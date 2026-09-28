# venantiusgalih.com

Static personal portfolio hosted with GitHub Pages.

## Site

- `index.html` is the portfolio homepage.
- `CNAME` configures the custom domain `venantiusgalih.com` for GitHub Pages.

## Local Preview

From the repository root, run:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Minify Assets

The homepage loads minified CSS and JavaScript. Keep the readable source files as the editing source, then regenerate their `.min` counterparts from the repository root after making changes. Node.js and npm are required; `npx` downloads the tools when they are not already available locally.

Minify CSS with Lightning CSS:

```powershell
npx --yes --package lightningcss-cli lightningcss --minify css/personal.css -o css/personal.min.css
npx --yes --package lightningcss-cli lightningcss --minify css/background.css -o css/background.min.css
npx --yes --package lightningcss-cli lightningcss --minify css/custom-scrollbar.css -o css/custom-scrollbar.min.css
```

Minify JavaScript with esbuild:

```powershell
npx --yes esbuild js/dark-mode-toggle.js js/custom-scrollbar.js js/experience-duration.js --minify --outdir=js --out-extension:.js=.min.js
```

The HTML references the generated `.min.css` and `.min.js` files. Update those references if asset filenames change.

## Crawling

`robots.txt` asks all crawlers not to crawl the site. This is voluntary guidance, not access control; GitHub Pages content remains publicly accessible.