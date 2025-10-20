import os
import re

# Define o caminho absoluto para o arquivo de mapeamento, baseado na localização do script.
# O script está em /tools, então voltamos um nível para a raiz do projeto.
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
mapping_file_path = os.path.join(project_root, 'src', 'data', 'questionsToCasesMapping.js')

def update_mapping(lp, question_num, case_num):
    """
    Atualiza o arquivo questionsToCasesMapping.js com o novo mapeamento.
    """
    try:
        with open(mapping_file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Constrói a chave de busca (ex: 'frugality_12')
        key_to_find = f"{lp}_{question_num}"
        
        # Constrói o novo valor (ex: "'frugality_case1'") - SEM F-STRING PARA SIMPLICIDADE
        new_value = "'" + lp + "_case" + case_num + "'"

        # Expressão regular para encontrar a linha a ser substituída.
        # Procura por: `frugality_12: 'qualquer_coisa',`
        # Captura o início da linha (incluindo a chave) e substitui apenas o valor.
        pattern = re.compile(f"(\\b{key_to_find}\\b\s*:\s*)\'[^']+\'")

        if not pattern.search(content):
            print(f"\n\033[91mErro: A chave '{key_to_find}' não foi encontrada no arquivo.\033[0m")
            print("Por favor, verifique o LP e o número da pergunta e tente novamente.")
            return

        # Substitui o valor antigo pelo novo
        new_content = pattern.sub(f"\\g<1>{new_value}", content)

        with open(mapping_file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"\n\033[92mSucesso!\033[0m O mapeamento foi atualizado:")
        print(f"  \033[1m{key_to_find}: {new_value}\033[0m")

    except FileNotFoundError:
        print(f"\n\033[91mErro: O arquivo de mapeamento não foi encontrado em '{mapping_file_path}'.\033[0m")
    except Exception as e:
        print(f"\n\033[91mOcorreu um erro inesperado: {e}\033[0m")

def main():
    """
    Função principal que interage com o usuário.
    """
    print("\033[1m--- Ferramenta de Remapeamento de Cases para Perguntas ---\\033[0m")
    print("Por favor, forneça as seguintes informações:")

    lp = input("  - Qual é o Leadership Principle (LP)? (ex: frugality) -> ").strip().lower()
    question_num = input("  - Qual é o número da pergunta? (ex: 12) -> ").strip()
    case_num = input("  - A qual número de case você quer vincular? (ex: 1) -> ").strip()

    if not all([lp, question_num, case_num]):
        print("\n\033[91mErro: Todas as entradas são obrigatórias. Operação cancelada.\033[0m")
        return

    update_mapping(lp, question_num, case_num)

if __name__ == "__main__":
    main()
