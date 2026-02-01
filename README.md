# My Portfolio

A modern portfolio website built with React, Vite, Framer Motion, and Tailwind CSS. Optimized for deployment on Vercel.

## Features
-   Responsive Design
-   Dark Mode / Light Mode
-   Multi-language support (EN/VI)
-   Nuomorphic Design (Neo-shadows)
-   Animated transitions with Framer Motion

## Structure
-   `frontend/`: The core website code.
-   `backend/`: A simple Node.js backend (optional).
-   `package.json`: Root package file for deployment discovery.

## Deployment on Vercel

1.  Push this repository to GitHub.
2.  Import the project in Vercel.
3.  Vercel should automatically detect the settings. If not:
    -   **Framework Preset**: Vite
    -   **Root Directory**: `frontend`
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `dist`
4.  Add your environment variables if any.

## Local Development

```bash
# Install dependencies
npm install-all

# Run frontend
npm run frontend:dev
```

## Images
All project and achievement images are stored in `frontend/public/assets/`. Ensure any new images are added to this directory to be available after deployment.
