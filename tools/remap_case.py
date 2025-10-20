import os
import re
import json
import sys

# Define o caminho raiz do projeto, subindo um nível a partir de /tools
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
mapping_file_path = os.path.join(project_root, 'src', 'data', 'questionsToCasesMapping.js')
data_folder_path = os.path.join(project_root, 'src', 'data')

def get_case_id(lp, case_num):
    """
    Lê o arquivo do caso para extrair seu ID.
    """
    case_file_name = f"{lp}_case{case_num}.js"
    case_file_path = os.path.join(data_folder_path, lp, case_file_name)

    if not os.path.exists(case_file_path):
        print(f"\n\033[91mErro: O arquivo do caso '{case_file_path}' não foi encontrado.\033[0m")
        return None

    try:
        with open(case_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Procura por uma linha como: "id": "some-case-id",
        match = re.search(r'id["\']\s*:\s*["\']([^"\']+)["\']', content)
        
        if match:
            return match.group(1)
        else:
            print(f"\n\033[91mErro: Não foi possível encontrar o campo 'id' no arquivo '{case_file_path}'.\033[0m")
            return None
    except Exception as e:
        print(f"\n\033[91mOcorreu um erro ao ler o arquivo do caso: {e}\033[0m")
        return None

def update_mapping_file(lp, question_num, new_case_id):
    """
    Atualiza o arquivo questionsToCasesMapping.js com o novo mapeamento.
    """
    try:
        with open(mapping_file_path, 'r', encoding='utf-8') as f:
            full_content = f.read()

        # Isola o objeto JS do resto do arquivo
        # Encontra o início do objeto (depois de '=') e o final (o último '}')
        obj_match = re.search(r'=\s*(\{.*?\});', full_content, re.DOTALL)
        if not obj_match:
            print(f"\n\033[91mErro: Não foi possível encontrar o objeto de mapeamento em '{mapping_file_path}'.\033[0m")
            return

        header = full_content[:obj_match.start(1)]
        footer = full_content[obj_match.end(1):]
        
        # Carrega o objeto como JSON
        data = json.loads(obj_match.group(1))

        # Navega e atualiza a estrutura de dados
        if lp not in data:
            print(f"\n\033[93mAviso: O LP '{lp}' não existia no mapeamento. Ele será criado.\033[0m")
            data[lp] = {}
        
        if question_num not in data[lp]:
            print(f"\n\033[93mAviso: A pergunta '{question_num}' para o LP '{lp}' não existia. Ela será criada.\033[0m")
            data[lp][question_num] = {'options': []}

        options = data[lp][question_num].get('options', [])

        # Remove o caseId se ele já existir na lista para evitar duplicatas
        options = [opt for opt in options if opt.get('caseId') != new_case_id]

        # Adiciona o novo mapeamento no topo da lista com score 100
        new_option = {'caseId': new_case_id, 'score': 100}
        options.insert(0, new_option)
        
        data[lp][question_num]['options'] = options

        # Converte de volta para uma string JSON formatada
        updated_obj_str = json.dumps(data, indent=2, ensure_ascii=False)

        # Remonta o arquivo .js
        new_full_content = header + updated_obj_str + footer

        with open(mapping_file_path, 'w', encoding='utf-8') as f:
            f.write(new_full_content)

        print(f"\n\033[92mSucesso!\033[0m O mapeamento foi atualizado:")
        print(f"  \033[1mLP: {lp}, Pergunta: {question_num} -> Case ID: {new_case_id}\033[0m")

    except FileNotFoundError:
        print(f"\n\033[91mErro: O arquivo de mapeamento não foi encontrado em '{mapping_file_path}'.\033[0m")
    except json.JSONDecodeError:
        print(f"\n\033[91mErro: O arquivo de mapeamento '{mapping_file_path}' não é um JSON válido.\033[0m")
    except Exception as e:
        print(f"\n\033[91mOcorreu um erro inesperado: {e}\033[0m")

def main():
    """
    Função principal que interage com o usuário.
    """
    print("\n\033[1m--- Ferramenta de Remapeamento de Cases para Perguntas ---\033[0m")
    
    try:
        lp = input("  - Leadership Principle (LP) (ex: frugality): ").strip().lower()
        question_num = input("  - Número da pergunta (ex: 12): ").strip()
        case_num = input("  - Número do case a vincular (ex: 1): ").strip()

        if not all([lp, question_num, case_num]):
            print("\n\033[91mErro: Todas as entradas são obrigatórias. Operação cancelada.\033[0m")
            return

        # Valida se os números são inteiros
        int(question_num)
        int(case_num)

        new_case_id = get_case_id(lp, case_num)

        if new_case_id:
            update_mapping_file(lp, question_num, new_case_id)

    except ValueError:
        print("\n\033[91mErro: O número da pergunta e do case devem ser números inteiros.\033[0m")
    except (KeyboardInterrupt, EOFError):
        print("\n\nOperação cancelada pelo usuário. Saindo.")
        sys.exit(0)


if __name__ == "__main__":
    main()