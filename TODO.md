# Refactor Roadmap

1. Extract modal components (Icebreaker, MyQuestions, Narrative) into dedicated files.
2. Move persistent “used” state logic into a reusable hook (ex.: `useUsedItems`).
3. Break out large UI sections (case cards, search dropdowns) into separate components.
4. Centralize shared helpers/state via context or utility modules to keep `App.jsx` focused on composition.