
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
        
        # Constrói o novo valor (ex: "'frugality_case1'")
        new_value = f