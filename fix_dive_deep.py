import os
import glob

def fix_encoding(file_path):
    """Fix encoding issues in JavaScript files"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace curly/smart quotes with straight quotes
    content = content.replace('"', '"')
    content = content.replace('"', '"')
    content = content.replace(''', "'")
    content = content.replace(''', "'")

    # Replace em-dash and en-dash with regular dash
    content = content.replace('—', '-')
    content = content.replace('–', '-')

    # Replace non-breaking spaces with regular spaces
    content = content.replace('\u00a0', ' ')
    content = content.replace('\u202f', ' ')

    # Replace zero-width spaces and joiners
    content = content.replace('\u200b', '')
    content = content.replace('\u200c', '')
    content = content.replace('\u200d', '')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed encoding: {file_path}")

# Find all dive_deep case files
pattern = "src/data/dive_deep/dive_deep_case*.js"
files = glob.glob(pattern)

print(f"Found {len(files)} files to fix:\n")

for file_path in files:
    fix_encoding(file_path)

print(f"\nDone! Fixed encoding in {len(files)} files.")
