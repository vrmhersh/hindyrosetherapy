# Therapy website (two brands, one codebase)
npm install
npm run dev                      # Hindy Rose
VITE_BRAND=helen npm run dev     # Helen Rose
Deploy each as its own Vercel project from this repo. For the Helen project add the environment variable VITE_BRAND = helen.
Brand details (name, email, LinkedIn) live at the top of src/content.js.

## Images
1. Download photos into `images-source/`, named: hero, about-hero, office, pct, cbt, eft, dew, stone, linen, fern (.jpg/.png/.webp).
2. `npm install` then `npm run images` creates compressed WebP files in `public/img/`.
3. In `src/content.js` set `USE_LOCAL_IMAGES = true`, then commit `public/img` to GitHub.
