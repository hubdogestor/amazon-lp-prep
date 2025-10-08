# Amazon Leadership Principles - Interview Prep

> Interactive web application for preparing Amazon Leadership Principles interviews using the STAR method.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/hubdogestor/amazon-lp-prep)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](https://github.com/hubdogestor/amazon-lp-prep)
[![Version](https://img.shields.io/badge/version-3.1.0-blue)](https://github.com/hubdogestor/amazon-lp-prep)

## Overview

This application helps candidates prepare for Amazon behavioral interviews by providing structured STAR (Situation, Task, Action, Result) examples for all 16 Amazon Leadership Principles. Each case includes follow-up questions and bilingual support (Portuguese/English).

## Features

- **68 Professional Cases**: Real-world examples covering all 16 Leadership Principles
- **Interactive Interface**: Browse cases by principle or search by interview questions
- **Bilingual Support**: Full PT/EN content with instant language switching
- **Follow-up Questions**: 10+ practice questions per case for interview preparation
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Case Classification**: TOP and GOOD case badges for quick quality reference

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hubdogestor/amazon-lp-prep.git

# Navigate to project directory
cd amazon-lp-prep

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Application will be available at http://localhost:5173/amazon-lp-prep/
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run test suite
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Project Structure

```
amazon-lp-prep/
├── src/
│   ├── components/       # React UI components
│   ├── contexts/         # React context providers
│   ├── data/             # Case data and mappings
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Utility functions
├── public/               # Static assets
└── archives/             # Archived versions
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run test suite |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest + React Testing Library
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Leadership Principles Coverage

All 16 Amazon Leadership Principles are covered:

1. Customer Obsession
2. Ownership
3. Invent and Simplify
4. Are Right, A Lot
5. Learn and Be Curious
6. Hire and Develop the Best
7. Insist on the Highest Standards
8. Think Big
9. Bias for Action
10. Frugality
11. Earn Trust
12. Dive Deep
13. Have Backbone; Disagree and Commit
14. Deliver Results
15. Strive to be Earth's Best Employer
16. Success and Scale Bring Broad Responsibility

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit changes (`git commit -am 'Add improvement'`)
6. Push to branch (`git push origin feature/improvement`)
7. Open a Pull Request

## License

This project is private and all rights are reserved.

## Author

**Leonardo Menezes**  
GitHub: [@hubdogestor](https://github.com/hubdogestor)

---

Built with ⚛️ React • ⚡ Vite • 🎨 Tailwind CSS
