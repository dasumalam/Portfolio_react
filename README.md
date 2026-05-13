# Portfolio (React)

આ રિપો તમારું **વ્યક્તિગત portfolio વેબસાઇટ** છે — બીજા ડેવલપર / રિક્રુટરને ઝડપથી સમજાય એ માટે નીચે ટેક સ્ટેક અને સ્ટ્રક્ચર સંક્ષિપ્ત રીતે લખ્યું છે.

---

## What this project is

A single-page portfolio built with **React**. It includes sections for navigation, hero, about, skills, projects (with filters and image gallery), and contact.

---

## Languages & formats

| Item | Role |
|------|------|
| **JavaScript (ES modules)** | App logic, hooks, data |
| **JSX** | React components (`.jsx`) |
| **CSS** | Global styles in `src/index.css` (includes Tailwind layers / utilities) |

There is **no TypeScript** in the source (only `@types/*` in devDependencies for editor tooling).

---

## Core stack (npm packages)

| Package | Purpose |
|---------|---------|
| **React 19** | UI library |
| **react-dom** | Renders the app in the browser |
| **Vite 8** | Dev server, fast HMR, production build |
| **@vitejs/plugin-react** | JSX / Fast Refresh for React |
| **Tailwind CSS 4** | Utility-first styling |
| **@tailwindcss/vite** | Tailwind integrated as a Vite plugin |

### Dev / quality

| Package | Purpose |
|---------|---------|
| **ESLint** + **eslint-plugin-react-hooks** + **eslint-plugin-react-refresh** | Linting |

---

## External services (not in package.json)

| Resource | Purpose |
|----------|---------|
| **Font Awesome 6** (CDN) | Icons — loaded at runtime from cdnjs in `useFontAwesome` inside `src/hooks/usePortfolioAnimations.js` |

---

## Project structure (main folders)

```
portfolio/
├── index.html              # HTML shell + root div
├── vite.config.js          # Vite + React + Tailwind; base: '/Portfolio_react/' (GitHub Pages style path)
├── tailwind.config.js      # Custom animations (fade-in, slide-up, float, gradient), theme extensions
├── package.json
└── src/
    ├── main.jsx            # React root + StrictMode
    ├── App.jsx             # Wraps <Portfolio />
    ├── index.css           # Global CSS + Tailwind
    ├── components/         # UI sections (Portfolio, Hero, About, Skills, Projects, Gallery, Contact, Navigation)
    ├── constants/
    │   └── projects.js     # PROJECTS data + PROJECT_CATEGORIES (images, links, gallery arrays)
    ├── hooks/
    │   └── usePortfolioAnimations.js  # Scroll, page-load animations, mobile menu, project filter, gallery state, Font Awesome inject
    └── assets/             # Images referenced from constants (images, Mobile_app, Dry&Cleaning, Smart-show, Nimbus_Ai, etc.)
```

---

## How to run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Deployment note

`vite.config.js` sets `base: '/Portfolio_react/'`. If you deploy to a **different URL path** (or the site root), change `base` to match (e.g. `'/'` for root hosting).

---

## Where to edit content

| What to change | File / area |
|-----------------|-------------|
| Project cards, categories, images | `src/constants/projects.js` |
| Section copy / layout | Respective file in `src/components/` |
| Nav links, scroll behavior | `Portfolio.jsx`, `Navigation.jsx` |
| Animations / parallax / gallery logic | `src/hooks/usePortfolioAnimations.js` |
| Colors, fonts, Tailwind extras | `src/index.css`, `tailwind.config.js` |

---

## Scripts (from package.json)

| Script | Command |
|--------|---------|
| Development | `npm run dev` |
| Production build | `npm run build` |
| Lint | `npm run lint` |
| Preview build | `npm run preview` |

---

*Last aligned with `package.json` and repo layout as of the README creation.*
