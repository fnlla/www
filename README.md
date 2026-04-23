# FNLLA Web

Official FNLLA website repository.

## Purpose

`fnlla/www` hosts the public platform website, product positioning, ecosystem entry points,
and release communication layer.

## Ownership

FNLLA website and brand communication are maintained by TechAyo.

- Copyright: TechAyo
- Website: https://techayo.co.uk

## Local Preview

Open `index.html` directly or run a static server:

```bash
python -m http.server 8080
```

Then open `http://127.0.0.1:8080`.

## Deployment

GitHub Pages deployment is managed by `.github/workflows/deploy-pages.yml`.

## Structure

- `index.html` main website entry
- `assets/` brand and visual assets
- `styles.css` layout and visual system
- `scripts/site.js` minimal interaction layer
