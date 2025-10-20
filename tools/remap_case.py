import json
import os
import re

def main():
    print("\n=== Ferramenta de Remapeamento de Cases ===")
    
    # Obter inputs do usuário
    lp_name = input("Qual é o LP? (ex: frugality): ").strip()
    question_number = input("Qual é o número da pergunta? (ex: 12): ").strip()
    case_id = input("A qual case você quer vincular? (ex: unimed-cancer-patient-journey): ").strip()

    # Validar inputs
    if not lp_name or not question_number.isdigit() or not case_id:
        print("Erro: Entradas inválidas.")
        return

    question_number_str = str(question_number)

    # Caminho do arquivo
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    mapping_path = os.path.join(base_dir, "src", "data", "questionsToCasesMapping.js")

    try:
        # Ler o conteúdo do arquivo
        with open(mapping_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Extrair o objeto `questionsToCasesMapping` usando regex
        match = re.search(r'export const questionsToCasesMapping = (\{.*?\});', content, re.DOTALL)
        if not match:
            raise ValueError("Não foi possível encontrar o objeto questionsToCasesMapping no arquivo.")

        mapping_str = match.group(1)
        
        # Corrigir a string para ser um JSON válido (remover vírgulas extras no final de listas/objetos)
        mapping_str = re.sub(r',\s*([\}\]])', r'\1', mapping_str)

        # Carregar o JSON
        data = json.loads(mapping_str)

        # Verificar se o LP existe
        if lp_name not in data:
            print(f"Erro: LP '{lp_name}' não encontrado.")
            return

        # Verificar se a pergunta existe
        if question_number_str not in data[lp_name]:
            print(f"Erro: Pergunta número '{question_number_str}' não encontrada para o LP '{lp_name}'.")
            return

        # Criar a nova opção
        new_option = {"caseId": case_id, "score": 100} # Score 100 para a opção manual

        # Adicionar a nova opção no topo da lista
        data[lp_name][question_number_str]["options"].insert(0, new_option)

        # Converter o objeto atualizado para uma string formatada
        updated_mapping_str = json.dumps(data, indent=2)

        # Substituir o objeto antigo pelo novo no conteúdo do arquivo
        new_content = content.replace(match.group(1), updated_mapping_str)

        # Escrever o conteúdo atualizado de volta no arquivo
        with open(mapping_path, 'w', encoding='utf-8') as file:
            file.write(new_content)

        print("\nRemapeamento concluído com sucesso!")

    except Exception as e:
        print(f"\nErro durante o remapeamento: {str(e)}")

if __name__ == "__main__":
    main()