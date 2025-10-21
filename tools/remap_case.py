import json
import os
import re

def get_absolute_path(relative_path):
    """Converte um caminho relativo da raiz do projeto para um caminho absoluto."""
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    return os.path.join(base_dir, relative_path)

def get_cases_for_lp(lp_name):
    """Carrega os IDs dos cases de um LP específico lendo os arquivos em sua pasta."""
    lp_dir_path_rel = f"src/data/{lp_name}"
    lp_dir_path_abs = get_absolute_path(lp_dir_path_rel)

    if not os.path.isdir(lp_dir_path_abs):
        raise FileNotFoundError(f"O diretório para o LP '{lp_name}' não foi encontrado em '{lp_dir_path_abs}'")

    cases = []
    for filename in os.listdir(lp_dir_path_abs):
        if filename.endswith('.js') and 'case' in filename:
            file_path = os.path.join(lp_dir_path_abs, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                match = re.search(r'id:\s*["\'](.*?)["\']', content)
                if match:
                    cases.append(match.group(1))
    
    cases.sort()
    return cases

def calculate_and_display_counts(lp_name, mapping_data):
    """Calcula e exibe a contagem de perguntas para cada case do LP."""
    lp_data = mapping_data.get(lp_name, {})
    case_counts = {}

    try:
        all_lp_cases = get_cases_for_lp(lp_name)
        for case_id in all_lp_cases:
            case_counts[case_id] = 0
    except FileNotFoundError:
        pass

    for question_details in lp_data.values():
        options = question_details.get("options", [])
        if options:
            primary_case_id = options[0].get("caseId")
            if primary_case_id:
                case_counts[primary_case_id] = case_counts.get(primary_case_id, 0) + 1
    
    print(f"\n--- Contagem de Perguntas Atualizada para '{lp_name}' ---")
    if not case_counts:
        print("Nenhum case encontrado ou mapeado para este LP.")
        return

    sorted_counts = sorted(case_counts.items(), key=lambda item: item[1], reverse=True)
    
    for case_id, count in sorted_counts:
        print(f"- {case_id}: {count} pergunta(s)")
    print("----------------------------------------------------")


def main():
    print("\n=== Ferramenta de Remapeamento de Cases ===")
    
    try:
        lp_name = input("Qual é o LP? (ex: frugality): ").strip()
        if not lp_name:
            print("Erro: O nome do LP não pode ser vazio.")
            return

        available_cases = get_cases_for_lp(lp_name)
        if not available_cases:
            print(f"Nenhum case encontrado para o LP '{lp_name}'.")
            return

        print(f"\nCases disponíveis para '{lp_name}':")
        for i, case_id in enumerate(available_cases):
            print(f"  {i + 1}: {case_id}")

        choice_str = input(f"\nEscolha o número do case (1-{len(available_cases)}): ").strip()
        if not choice_str.isdigit() or not (1 <= int(choice_str) <= len(available_cases)):
            print("Erro: Escolha inválida.")
            return
        
        selected_case_id = available_cases[int(choice_str) - 1]

        question_number = input("Qual é o número da pergunta? (ex: 12): ").strip()
        if not question_number.isdigit() or int(question_number) < 1:
            print("Erro: Número da pergunta inválido.")
            return

        mapping_path = get_absolute_path("src/data/questionsToCasesMapping.js")
        
        with open(mapping_path, 'r', encoding='utf-8') as file:
            content = file.read()

        pattern = re.compile(r'export const questionsToCasesMapping = (\{.*?\});', re.DOTALL)
        match = pattern.search(content)
        
        if not match:
            raise ValueError("Não foi possível encontrar o objeto 'questionsToCasesMapping'.")

        mapping_str = match.group(1)
        mapping_str_clean = re.sub(r'//.*', '', mapping_str)
        mapping_str_clean = re.sub(r',\s*([\}\]])', r'\1', mapping_str_clean)
        
        data = json.loads(mapping_str_clean)

        if lp_name not in data:
            data[lp_name] = {}
        
        if question_number not in data[lp_name]:
            data[lp_name][question_number] = {"options": []}

        new_option = {"caseId": selected_case_id, "score": 100}
        
        options = data[lp_name][question_number].get("options", [])
        options = [opt for opt in options if opt.get("caseId") != selected_case_id]
        options.insert(0, new_option)
        data[lp_name][question_number]["options"] = options

        updated_mapping_str = json.dumps(data, indent=2)
        new_content = content.replace(match.group(1), updated_mapping_str)

        with open(mapping_path, 'w', encoding='utf-8') as file:
            file.write(new_content)

        print(f"\nRemapeamento concluído! A pergunta {question_number} de '{lp_name}' agora aponta para '{selected_case_id}'.")

        calculate_and_display_counts(lp_name, data)

    except FileNotFoundError as e:
        print(f"\nErro de arquivo: {e}")
    except (ValueError, IndexError) as e:
        print(f"\nErro de dados ou escolha inválida: {e}")
    except Exception as e:
        print(f"\nOcorreu um erro inesperado: {e}")

if __name__ == "__main__":
    main()
