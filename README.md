# magicsclient-site

Static landing/download page for MagicsClient, deployed on Cloudflare Pages
under `magicsclient.shop`.

## Editing content

Almost everything lives in `js/downloads.js` — edit the arrays/objects there and
the page re-renders itself:

- **Requirements pills** (hero): `REQUIREMENTS` (Minecraft / loader / Java).
- **Downloads:** `RELEASES` — newest first; set `primary: true` on the recommended build.
- **Features grid:** `FEATURES` — 3–6 short items. Empty array hides the section.
- **Changelog:** `CHANGELOG` — newest first.

Other content:

- **Tagline / About / Discord link:** edit the hero, `#about`, nav, and footer in `index.html`.
- **Install steps:** the `#install` section in `index.html` (generic Fabric flow).
- **Styling:** `css/style.css`.

> All user-editable strings are HTML-escaped at render time, so mod names,
> versions, and notes are safe to paste in as-is.

## Deploying (GitHub auto-deploy)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git** → pick this repo.
3. Build settings: framework preset **None**, build command **empty**,
   output directory `/`.
4. Every push to the connected branch redeploys automatically.

## Deploying manually (Wrangler CLI, optional)

```bash
npm install -g wrangler
wrangler login
wrangler pages project create magicsclient-site
wrangler pages deploy . --project-name=magicsclient-site
```

## Privacy / opsec notes

- No external scripts, fonts, or analytics are loaded — everything is
  same-origin. The `_headers` file enforces this with a strict
  Content-Security-Policy so nothing third-party can be added by accident.
- `Referrer-Policy: no-referrer` means GitHub (or wherever the download link
  points) never sees `magicsclient.shop` in its referer logs.
- Cloudflare Pages has no origin server to expose — DNS only ever points at
  Cloudflare's edge, never a machine you control.
- Registrar and GitHub-side hygiene (WHOIS privacy, noreply commit email,
  Cloudflare 2FA) is covered in the setup walkthrough, not in this repo.
