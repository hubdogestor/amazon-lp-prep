#!/bin/bash
set -e

# Build the project
pnpm run build

# Move to dist folder
cd dist

# Initialize git in the dist folder
git init
git add -A
git commit -m "Deploy to gh-pages"

# Force push to the gh-pages branch
git push -f git@github.com:hubdogestor/amazon-lp-prep.git main:gh-pages

cd ..