# Amber Clock

A real-time analog clock in a vintage amber palette, with Roman numerals, engraved brass rings, detailed hands, and a subtle aged-paper texture. It displays your device's local time with smoothly moving hour, minute, and second hands.

This is a static site with no build step or package installation.

## Preview locally

Open `index.html` in a browser, or run a static file server from this folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Choose **Other** as the framework preset and leave build and output commands empty.
4. Select **Deploy**. Later pushes to the connected branch deploy automatically.

## Deploy to GitHub Pages

1. Put the contents of this folder at the root of a GitHub repository and push to `main`.
2. In repository **Settings → Pages**, select **GitHub Actions** as the deployment source.
3. The included workflow publishes the site on each push to `main`.

## Files

- `index.html` — clock face and hands
- `styles.css` — responsive amber clock design
- `script.js` — local-time hand movement and dial marks
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment
- `vercel.json` — Vercel static-site settings
