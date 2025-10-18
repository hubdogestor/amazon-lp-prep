import os
import glob
import re
import sys

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# As 6 perguntas obrigatórias (com variações aceitas)
MANDATORY_FUPS = {
    "erro_falha": [
        r"qual\s+foi\s+(o\s+)?seu\s+maior\s+erro",
        r"qual\s+foi\s+(o\s+)?maior\s+erro",
        r"qual\s+foi\s+seu\s+maior\s+erro\s+ou\s+falha"
    ],
    "faria_diferente": [
        r"o\s+que\s+(voc[eê]\s+)?faria\s+diferente",
        r"what\s+would\s+you\s+do\s+differently"
    ],
    "obstaculo": [
        r"qual\s+foi\s+o\s+obst[aá]culo\s+mais\s+dif[ií]cil",
        r"obst[aá]culo\s+mais\s+dif[ií]cil\s+de\s+superar"
    ],
    "riscos": [
        r"quais\s+foram\s+os\s+principais\s+riscos",
        r"principais\s+riscos.*mitig"
    ],
    "dados": [
        r"que\s+dados\s+(voc[eê]\s+)?(usou|utilizou)",
        r"quais\s+dados.*racional",
        r"dados.*c[aá]lcul"
    ],
    "aprendizado": [
        r"como\s+(voc[eê]\s+)?(usou|reutilizou|aplicou)\s+(o\s+)?aprendizado",
        r"aprendizado.*outras?\s+(frentes?|[aá]reas?|contextos?)"
    ]
}

def check_mandatory_fups(file_path):
    """Verifica se um arquivo tem todas as 6 perguntas obrigatórias"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read().lower()

        found = {}
        for key, patterns in MANDATORY_FUPS.items():
            found[key] = False
            for pattern in patterns:
                if re.search(pattern, content, re.IGNORECASE):
                    found[key] = True
                    break

        missing = [k for k, v in found.items() if not v]
        return len(missing) == 0, missing

    except Exception as e:
        return False, [f"Error: {str(e)}"]

def main():
    lps = ["program_management", "stakeholder_management", "prioritizing_and_influence", "deal_with_ambiguity"]

    print("=" * 80)
    print("VERIFICAÇÃO DAS 6 PERGUNTAS OBRIGATÓRIAS")
    print("=" * 80)
    print()

    total_issues = 0

    for lp in lps:
        path = f"src/data/{lp}"
        if not os.path.exists(path):
            print(f"⚠️  Diretório {path} não encontrado")
            continue

        case_files = sorted(glob.glob(f"{path}/{lp}_case*.js"))

        print(f"\n{'=' * 80}")
        print(f"{lp.upper().replace('_', ' ')}")
        print(f"{'=' * 80}")

        lp_issues = 0
        for file_path in case_files:
            case_num = re.search(r'case(\d+)', file_path)
            if not case_num:
                continue
            case_num = case_num.group(1)

            has_all, missing = check_mandatory_fups(file_path)

            if has_all:
                print(f"  Case {case_num}: ✅ OK - Todas as 6 perguntas obrigatórias presentes")
            else:
                print(f"  Case {case_num}: ❌ FALTAM {len(missing)} pergunta(s)")
                for m in missing:
                    print(f"      → {m}")
                lp_issues += 1
                total_issues += 1

        if lp_issues == 0:
            print(f"\n  ✅ Todos os cases de {lp} estão OK!")

    print(f"\n{'=' * 80}")
    print(f"RESUMO FINAL: {total_issues} case(s) com perguntas faltando")
    print(f"{'=' * 80}")

if __name__ == "__main__":
    main()
