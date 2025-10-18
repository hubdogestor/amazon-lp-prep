import os
import glob
import re
import sys

# Fix Windows console encoding for emojis
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

def analyze_case_file(file_path):
    """Analyze a single case file for issues"""
    issues = []

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file is valid JavaScript
        if 'export default' not in content:
            issues.append("Missing 'export default' statement")

        # Check for FUPs section
        if 'fups:' not in content and 'fups =' not in content:
            issues.append("No FUPs section found")
            return issues, 0, 0

        # Extract FUPs section
        fups_match = re.search(r'fups:\s*\[(.*?)\](?=\s*\})', content, re.DOTALL)
        if not fups_match:
            issues.append("Cannot parse FUPs array")
            return issues, 0, 0

        fups_content = fups_match.group(1)

        # Count total FUPs (look for q: pattern)
        total_fups = len(re.findall(r'\bq:\s*["\']', fups_content))

        # Count empty responses (a: "" or a: '')
        empty_responses = len(re.findall(r'\ba:\s*["\']["\']', fups_content))

        # Count missing a_en
        has_q_en = len(re.findall(r'\bq_en:\s*["\']', fups_content))
        has_a_en = len(re.findall(r'\ba_en:\s*["\']', fups_content))

        # Missing accents check (sample check)
        if re.search(r'\bnao\b|\bja\b|\bvoce\b|\borcamento\b', content):
            issues.append("Missing Portuguese accents detected")

        if empty_responses > 0:
            issues.append(f"{empty_responses} FUPs with empty responses")

        if has_q_en > 0 and has_a_en < has_q_en:
            missing_a_en = has_q_en - has_a_en
            issues.append(f"{missing_a_en} FUPs missing a_en field")

        # Check for mandatory FUPs
        mandatory_patterns = [
            r'maior erro ou falha',
            r'faria diferente',
            r'obstáculo mais difícil|obstaculo mais dificil',
            r'principais riscos',
            r'dados você usou|dados voce usou',
            r'aprendizado.*outras frentes|aprendizado.*outros contextos'
        ]

        found_mandatory = 0
        for pattern in mandatory_patterns:
            if re.search(pattern, content, re.IGNORECASE):
                found_mandatory += 1

        if found_mandatory < 6:
            issues.append(f"Only {found_mandatory}/6 mandatory FUPs found")

        return issues, total_fups, empty_responses

    except Exception as e:
        return [f"Error reading file: {str(e)}"], 0, 0

def analyze_lp(lp_name):
    """Analyze all cases in a Leadership Principle"""
    lp_dir = f'src/data/{lp_name}'
    pattern = f'{lp_dir}/{lp_name}_case*.js'

    case_files = sorted(glob.glob(pattern))

    print(f"\n{'=' * 80}")
    print(f"{lp_name.upper().replace('_', ' ')}")
    print(f"{'=' * 80}")
    print(f"Total case files found: {len(case_files)}")

    if not case_files:
        print("⚠️  NO CASE FILES FOUND")
        return

    all_issues = {}
    total_empty = 0

    for file_path in case_files:
        case_name = os.path.basename(file_path)
        case_num = re.search(r'case(\d+)', case_name)
        case_num = case_num.group(1) if case_num else "?"

        issues, total_fups, empty = analyze_case_file(file_path)

        status = "✅ OK" if not issues else f"⚠️  {len(issues)} ISSUES"

        print(f"\n  Case {case_num}: {status}")
        print(f"    File: {case_name}")
        print(f"    Total FUPs: {total_fups}")

        if issues:
            all_issues[case_name] = issues
            for issue in issues:
                print(f"      ⚠️  {issue}")

        total_empty += empty

    if all_issues:
        print(f"\n  Summary: {len(all_issues)} files with issues, {total_empty} total empty FUPs")
    else:
        print(f"\n  Summary: All files OK ✅")

    return len(case_files), all_issues

# Main analysis
print("=" * 80)
print("PROJECT STATE ANALYSIS - Amazon LP Prep")
print("=" * 80)

lps = [
    'program_management',
    'stakeholder_management',
    'prioritizing_and_influence',
    'deal_with_ambiguity'
]

total_files = 0
total_issues = {}

for lp in lps:
    count, issues = analyze_lp(lp)
    total_files += count
    if issues:
        total_issues[lp] = issues

print(f"\n{'=' * 80}")
print("FINAL SUMMARY")
print(f"{'=' * 80}")
print(f"Total case files analyzed: {total_files}")
print(f"LPs with issues: {len(total_issues)}")

if total_issues:
    print(f"\nDETAILED ISSUES:")
    for lp, cases in total_issues.items():
        print(f"\n  {lp}:")
        for case_file, issues in cases.items():
            print(f"    - {case_file}: {', '.join(issues)}")
else:
    print("\n✅ NO ISSUES FOUND - ALL FILES OK!")

print(f"\n{'=' * 80}")
