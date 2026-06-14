# React2026

My personal React learning journey — small projects and exercises, one folder per section.

## Folders


| #   | Folder                             | Status | Description                                      |
| --- | ---------------------------------- | ------ | ------------------------------------------------ |
| 1   | `[01-PURE-REACT/](01-PURE-REACT/)` | Done   | React via CDN — no build tool                    |
| 2   | `[2-pizza-menu/](2-pizza-menu/)`   | Done   | Pizza Menu app with Create React App             |
| 3   | `[3-steps/](3-steps/)`             | Done   | Multi-step challenge app — `useState` & events   |


Each folder has its own **README** with file details, concepts covered, and how to run it.

---

## Repository Structure

```
React2026/
├── README.md                 # This file — overview of all folders
├── .vscode/
│   └── react.code-snippets   # VS Code snippets (rfc, rsc, cl)
├── 01-PURE-REACT/
│   ├── README.md
│   └── index.html
├── 2-pizza-menu/
│   ├── README.md
│   ├── public/
│   │   └── pizzas/           # Pizza images
│   └── src/
│       ├── index.js          # Components + data
│       └── index.css         # Styles
└── 3-steps/
    ├── README.md
    ├── public/
    │   └── vanilla.html      # Plain JS version for comparison
    └── src/
        ├── App.js            # Step navigation + state
        └── index.css         # Styles
```

---

## Quick Start


| Project           | How to run                                      |
| ----------------- | ----------------------------------------------- |
| **01-PURE-REACT** | Open `01-PURE-REACT/index.html` in a browser    |
| **2-pizza-menu**  | `cd 2-pizza-menu` → `npm install` → `npm start` |
| **3-steps**       | `cd 3-steps` → `npm install` → `npm start`      |


---

## Progress

- [x] **01** — Pure React Hello World
- [x] **02** — Pizza Menu app
- [x] **03** — Steps challenge (`useState`, event handlers)