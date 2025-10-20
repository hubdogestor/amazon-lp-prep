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
    # Itera sobre todos os arquivos no diretório do LP
    for filename in os.listdir(lp_dir_path_abs):
        # Considera apenas arquivos de case, ignorando 'index.js' e 'config.js'
        if filename.endswith('.js') and 'case' in filename:
            file_path = os.path.join(lp_dir_path_abs, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                # Usa regex para encontrar o valor do campo 'id'
                match = re.search(r'id:\s*["\'](.*?)["\']', content)
                if match:
                    cases.append(match.group(1))
    
    # Ordena os cases para uma exibição consistente
    cases.sort()
    return cases

def main():
    print("\n=== Ferramenta de Remapeamento de Cases ===")
    
    try:
        # 1. Obter LP do usuário
        lp_name = input("Qual é o LP? (ex: frugality): ").strip()
        if not lp_name:
            print("Erro: O nome do LP não pode ser vazio.")
            return

        # 2. Listar cases disponíveis para o LP
        available_cases = get_cases_for_lp(lp_name)
        if not available_cases:
            print(f"Nenhum case encontrado para o LP '{lp_name}'. Verifique o nome do LP e a estrutura de arquivos.")
            return

        print(f"\nCases disponíveis para '{lp_name}':")
        for i, case_id in enumerate(available_cases):
            print(f"  {i + 1}: {case_id}")

        # 3. Obter a escolha do usuário
        choice_str = input(f"\nEscolha o número do case que você quer vincular (1-{len(available_cases)}): ").strip()
        if not choice_str.isdigit() or not (1 <= int(choice_str) <= len(available_cases)):
            print("Erro: Escolha inválida.")
            return
        
        selected_case_id = available_cases[int(choice_str) - 1]

        # 4. Obter o número da pergunta
        question_number = input("Qual é o número da pergunta? (ex: 12): ").strip()
        if not question_number.isdigit() or int(question_number) < 1:
            print("Erro: Número da pergunta inválido.")
            return

        # 5. Atualizar o arquivo de mapeamento
        mapping_path = get_absolute_path("src/data/questionsToCasesMapping.js")
        
        with open(mapping_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Extrair o objeto JS como string usando uma regex corrigida
        variable_name = 'questionsToCasesMapping'
        # Usando r'' para string raw e {{}} para escapar chaves em f-strings
        pattern = re.compile(r'export const questionsToCasesMapping = (\{.*?\});', re.DOTALL)
        match = pattern.search(content)
        
        if not match:
            raise ValueError(f"Não foi possível encontrar o objeto '{variable_name}' no arquivo de mapeamento.")

        mapping_str = match.group(1)
        
        # Limpeza para garantir que a string seja um JSON válido
        mapping_str_clean = re.sub(r'//.*', '', mapping_str)
        mapping_str_clean = re.sub(r',\s*([\}\]])', r'\1', mapping_str_clean)
        
        data = json.loads(mapping_str_clean)

        # Modificar os dados
        if lp_name not in data:
            print(f"Aviso: LP '{lp_name}' não encontrado no arquivo de mapeamento. Ele será criado.")
            data[lp_name] = {}
        
        if question_number not in data[lp_name]:
            print(f"Aviso: Pergunta '{question_number}' não encontrada para o LP '{lp_name}'. Uma nova entrada será criada.")
            data[lp_name][question_number] = {"options": []}

        new_option = {"caseId": selected_case_id, "score": 100}
        
        options = data[lp_name][question_number].get("options", [])
        # Remove qualquer mapeamento anterior com o mesmo caseId para evitar duplicatas
        options = [opt for opt in options if opt.get("caseId") != selected_case_id]
        # Adiciona a nova opção no topo da lista
        options.insert(0, new_option)
        data[lp_name][question_number]["options"] = options

        # Converter de volta para string e substituir no arquivo original
        updated_mapping_str = json.dumps(data, indent=2)
        new_content = content.replace(match.group(1), updated_mapping_str)

        with open(mapping_path, 'w', encoding='utf-8') as file:
            file.write(new_content)

        print(f"\nRemapeamento concluído! A pergunta {question_number} de '{lp_name}' agora aponta para o case '{selected_case_id}'.")

    except FileNotFoundError as e:
        print(f"\nErro de arquivo: {e}")
    except ValueError as e:
        print(f"\nErro de dados: {e}")
    except Exception as e:
        print(f"\nOcorreu um erro inesperado: {e}")

if __name__ == "__main__":
    main()