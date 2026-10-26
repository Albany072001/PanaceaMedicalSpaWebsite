# Panacean Medical Spa — Website Prototype

A responsive, multi-page frontend prototype for **Panacean Medical Spa**, developed from a Figma Make design and maintained as a React application. This repository contains the website implementation for reviewing its visual design, navigation, page layouts, and interactive frontend elements.

> **Project status:** Frontend prototype. A working UI does not imply that contact forms, appointments, payments, or other external services are connected to a production backend.

**[View live prototype](https://albany072001.github.io/PanaceaMedicalSpaWebsite/)** · **[View Figma design](https://www.figma.com/design/TbEtZGP8MPCNd4e6fjtgOE/Panacean-Medical-Spa-Home-Page--Copy-.)** · **[Source repository](https://github.com/Albany072001/PanaceaMedicalSpaWebsite)**

## Overview

The project demonstrates a modern medical-spa website with dedicated pages for company information, services, treatments, customer reviews, and contact information. It was originally generated as a Figma Make code bundle and is now version-controlled and deployed through GitHub.

### Pages

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Landing page and primary introduction |
| `/about` | About | Information about the spa |
| `/services` | Services | Overview of available services |
| `/treatments` | Treatments | Treatment-focused information |
| `/reviews` | Reviews | Customer testimonials and reviews |
| `/contact` | Contact | Contact information and related UI |

Routes listed above are relative to the application's deployment base path.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | React + TypeScript |
| Bundler / development server | Vite 6 |
| Styles | Tailwind CSS 4 |
| Routing | React Router 7 |
| UI building blocks | Radix UI and additional reusable React components |
| Icons | Lucide React; Material UI icons are also included as a dependency |
| Design source | Figma Make |
| Hosting | GitHub Pages |
| Automation | GitHub Actions |

The exported project includes additional UI and animation dependencies. Consult [`package.json`](./package.json) for the authoritative package list and current versions.

## Getting started

### Prerequisites

- Node.js and npm (Node.js 22 is used in the GitHub Actions deployment workflow).
- Git.

### Install and run

```bash
git clone https://github.com/Albany072001/PanaceaMedicalSpaWebsite.git
cd PanaceaMedicalSpaWebsite
npm ci
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173/`).

### Production build

```bash
npm run build
```

Vite writes the build output to `dist/`. This directory is generated and should **not** be committed to Git.

To preview the build without adding another npm script:

```bash
npx vite preview
```

If `package.json` includes a `"preview": "vite preview"` script, `npm run preview` works as well.

When testing the GitHub Pages build locally, use the repository base path shown in the preview URL, usually `/PanaceaMedicalSpaWebsite/`.

## Project structure

```text
PanaceaMedicalSpaWebsite/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment workflow
├── src/
│   ├── app/
│   │   ├── components/      # Shared page sections, navigation, UI components
│   │   ├── pages/           # Home, About, Services, Treatments, Reviews, Contact
│   │   ├── App.tsx
│   │   └── routes.ts        # React Router definitions
│   ├── assets/              # Local image assets
│   └── main.tsx             # Application entry point
├── index.html
├── package.json
├── package-lock.json
└── vite.config.ts
```

The structure above reflects the updated frontend and the GitHub Pages workflow added during repository setup. The Figma export may also include other style, utility, and configuration files.

## Design and asset handling

Figma Make exports some images using identifiers like `figma:asset/<filename>`. A custom resolver in `vite.config.ts` maps these imports to files under `src/assets/`.

Keep the `figmaAssetResolver()` function when updating the app from a new Figma Make export. The React and Tailwind Vite plugins are also required by the current project.

Some original photography files are several megabytes each. Before treating this as a production-ready site, optimize these images (for example, appropriately sized WebP/AVIF variants and lazy loading where appropriate).

## Deployment

The website is configured for **GitHub Pages** using a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Work on a feature or design branch.
2. Run `npm ci`, `npm run build`, and test the UI locally.
3. Open a pull request targeting `main`.
4. Merge after review.
5. GitHub Actions builds the project and publishes `dist/` to GitHub Pages.

**GitHub configuration:** In **Settings → Pages**, select **GitHub Actions** as the deployment source.

### Base path and client-side routes

The Vite configuration uses:

```ts
base: '/PanaceaMedicalSpaWebsite/',
```

When using `createBrowserRouter`, React Router must also account for the same deployment prefix:

```ts
createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
```

This allows the app to recognize its homepage at `/PanaceaMedicalSpaWebsite/` rather than only at `/`.

**Known hosting limitation:** GitHub Pages does not automatically fall back to `index.html` for direct requests to nested client-side routes. In-app links can work while refreshing `/PanaceaMedicalSpaWebsite/services` returns a 404. Address this with an SPA fallback strategy, use hash-based routing, or move to hosting with rewrite rules. Setting `basename` alone does not fix refreshes of nested routes.

## Working with an updated Figma export

When the prototype changes in Figma Make:

1. Export the latest project source files.
2. Create a branch, such as `design/update-figma-prototype`.
3. Replace or integrate the updated source files **without touching `.git/`**.
4. Review differences to avoid retaining obsolete components or reverting deployment fixes.
5. Recheck `vite.config.ts`, `src/app/routes.ts`, dependencies, and the deployment workflow.
6. Run `npm ci` (or `npm install` when dependencies changed), `npm audit`, and `npm run build`.
7. Commit the tested changes, push the branch, and open a pull request.

Do not track `node_modules/`, `dist/`, or local environment files. An appropriate `.gitignore` should exclude them.

## Current scope and limitations

- This is a **frontend implementation of a prototype**, not a documented full-stack spa management system.
- Any booking, consultation, payment, or contact features should be tested individually before being described as operational integrations.
- Direct navigation to nested React Router URLs requires additional GitHub Pages handling as described above.
- Dependencies should be reviewed with `npm audit` and updated deliberately. Avoid automatic breaking upgrades without testing.
- Responsive layouts and accessibility should be verified across devices before any production release.

## License and usage

No license is declared here. Unless the repository includes a separate `LICENSE` file, do not assume the source code, branding, or photography is available for unrestricted reuse.

---

**Panacean Medical Spa Website Prototype** · Built from a Figma Make design · Maintained on GitHub
