# 01 — Pure React

First step: use React **without** npm or a build tool. Everything runs in a single HTML file via CDN scripts.

## What's in this folder

| File | Description |
|------|-------------|
| `index.html` | Loads React 18, ReactDOM, and Babel from CDN; renders a Hello World component |

## How to run

Open `index.html` directly in your browser, or use the **Live Server** extension in VS Code.

No install step required.

## What the app does

- Defines a `MyApp` functional component that returns `<h1>Hello, world!</h1>`
- Mounts it into `<div id="root">` using `ReactDOM.createRoot()`

## Concepts covered

- JSX syntax
- Functional components
- `ReactDOM.createRoot()` and `root.render()`
- Loading React from a CDN (development only — not for production)

## Tech

- React 18 (unpkg CDN)
- Babel Standalone (compiles JSX in the browser)
