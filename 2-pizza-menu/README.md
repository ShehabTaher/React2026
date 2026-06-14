# 02 — Pizza Menu

A restaurant menu app for **Fast React Pizza Co.** Built with Create React App. All components live in a single file for learning purposes.

## What's in this folder

```
2-pizza-menu/
├── public/
│   ├── index.html          # HTML shell with #root mount point
│   ├── favicon.ico
│   ├── manifest.json
│   └── pizzas/             # 6 pizza photos
│       ├── focaccia.jpg
│       ├── margherita.jpg
│       ├── spinaci.jpg
│       ├── funghi.jpg
│       ├── salamino.jpg
│       └── prosciutto.jpg
└── src/
    ├── index.js            # All components + pizza data + entry point
    └── index.css           # Full app styling (Roboto Mono, layout, cards)
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

## What the app does

Displays a pizza restaurant page with three sections:

1. **Header** — restaurant title
2. **Menu** — list of 6 pizzas with image, name, ingredients, price, and sold-out state
3. **Footer** — open/closed message based on current hour (7:00–22:00), with an order button when open

## Components (`src/index.js`)

| Component | Role |
|-----------|------|
| `App` | Root layout — wraps Header, Menu, Footer |
| `Header` | Page title |
| `Menu` | Maps `pizzaData` into a list; shows empty state if no pizzas |
| `Pizza` | Single pizza card — props, conditional styling, sold-out badge |
| `Footer` | Checks opening hours with `new Date()` |
| `Order` | Shown when open — hours info + Order button |

## Concepts covered

- Create React App project setup
- Component composition (parent → children)
- Props (`pizza`, `closeHour`, `openHour`)
- Rendering lists with `.map()` and `key`
- Conditional rendering (`? :`, `&&`)
- Template literals and dynamic class names
- Static data arrays
- CSS imports in React
- `React.StrictMode`

## Tech

- React 19
- Create React App (react-scripts 5)
