# 03 — Steps

A small **3-step challenge** app built with Create React App. Navigate through steps with Previous/Next buttons, toggle the panel with a close button, and see how React state drives the UI declaratively.

## What's in this folder

```
3-steps/
├── public/
│   ├── index.html          # HTML shell with #root mount point
│   ├── vanilla.html        # Same UI in plain JS (imperative DOM updates)
│   ├── favicon.ico
│   └── manifest.json
└── src/
    ├── index.js            # Entry point — mounts App
    ├── App.js              # Step logic, state, and UI
    └── index.css           # Layout, step indicators, buttons
```

## How to run

```bash
npm install   # first time only
npm start     # http://localhost:3000
```

| Command | Description |
|---------|-------------|
| `npm start` | Dev server with hot reload |
| `npm test` | Run tests in watch mode |
| `npm run build` | Production build in `build/` |

To compare with the vanilla version, open `public/vanilla.html` directly in a browser (no npm needed).

## What the app does

Displays a card with three numbered steps and a message for each:

1. **Step 1** — Learn React ⚛️
2. **Step 2** — Apply for jobs 💼
3. **Step 3** — Invest your new income 🤑

**Previous** and **Next** move between steps (bounded at 1 and 3). Step numbers highlight as you progress. The **×** button toggles the whole card on and off.

## Code structure

| File / piece | Role |
|--------------|------|
| `App.js` | Main component — holds state and renders the step UI |
| `messages` | Static array of text shown per step |
| `step` state | Current step (1–3), updated by Previous/Next |
| `isOpen` state | Whether the step card is visible |
| `handlePrevious` / `handleNext` | Event handlers that update `step` |
| `index.js` | Creates root and renders `<App />` inside `StrictMode` |

## Concepts covered

- `useState` hook — managing component state
- Functional state updates (`setStep((s) => s + 1)`)
- Event handlers (`onClick`)
- Conditional rendering (`&&`, ternary for active class)
- Inline styles vs CSS classes
- React fragments (`<>...</>`)
- Declarative UI vs imperative DOM (compare with `public/vanilla.html`)
- Separate component file (`App.js`) vs single-file setup

## Tech

- React 19
- Create React App (react-scripts 5)
