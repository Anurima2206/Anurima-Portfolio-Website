# Anurima Sarkar — Portfolio

A modern, dev-themed personal portfolio built with **React (Vite)** and **Tailwind CSS**. Pure JS/JSX — no TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Editing content

Almost everything you'll want to change lives in **`src/data.js`**:

- `profile` — name, role, tagline, about text, email, phone, location, GitHub/LinkedIn URLs, resume file path
- `techStack` — categorized skill badges
- `projects` — your project cards (title, description, features, tech, live URL, GitHub URL, image)
- `skillHighlights` — the "what I can do" checklist
- `education` — degrees/schools
- `achievements` — recruiter-facing highlights

Update these arrays/objects and the whole site updates automatically — no need to touch component files.

### Adding your resume

Drop your PDF into `public/` as `resume.pdf` (or update `profile.resumeUrl` in `src/data.js` to match your filename).

### Adding your photo / project screenshots

Put images in `public/` (or `src/assets/`) and reference their path:

```js
photoUrl: "/photo.jpg",     // in profile
image: "/projects/prepwave.png", // in a project entry
```

If `photoUrl` is left empty, the hero shows a stylised code-editor illustration instead. If a project's `image` is empty, a placeholder card with the project name is shown.

## Structure

```
src/
  components/     → all UI sections (Hero, About, TechStack, Projects, etc.)
  hooks/          → useReveal (scroll fade-in animation)
  data.js         → all editable content
  index.css       → Tailwind + global styles
  App.jsx         → assembles the page
tailwind.config.js → color tokens (bg, card, accent, border, muted) & fonts
```

## Color theme

| Token  | Hex       |
|--------|-----------|
| bg     | `#0F172A` |
| card   | `#1E293B` |
| accent | `#38BDF8` |
| text   | `#FFFFFF` |

Defined in `tailwind.config.js` under `theme.extend.colors` — change them there to re-theme the whole site.

## Notes

- Fonts (Space Grotesk / Inter / JetBrains Mono) load from Google Fonts via `src/index.css`. Requires an internet connection when the site loads.
- Icons: `lucide-react` for UI icons, `react-icons` for brand/tech logos (GitHub, LinkedIn, React, Node, etc.).
- Deploy anywhere static: Vercel, Netlify, GitHub Pages — just run `npm run build` and deploy the `dist/` folder.
