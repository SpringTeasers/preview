# preview — SpringTeasers preview hub

Shared GitHub Pages hub for teaser sites. `preview.springwebsites.com` is served from
this repo (`main`, path `/`) via the root `CNAME`.

Each teaser lives in its own subfolder, so every site gets a unique address:

| Teaser | URL | Folder |
|---|---|---|
| Juanes Home Improvement, LLC | https://preview.springwebsites.com/juanes-home-improvement/ | `juanes-home-improvement/` |

## Why this exists

A GitHub Pages **project** repo with a `CNAME` serves at the domain **root**, not at a
path. Multiple teaser repos claiming `preview.springwebsites.com` therefore collided at
`https://preview.springwebsites.com/`. Teaser repos must NOT contain a `CNAME`; they
publish their files into a subfolder here instead.

## Adding a teaser

1. Create `{slug}/` in this repo.
2. Copy the teaser's `index.html` and `styles.css` into it (never `CNAME`, never `README.md`).
3. Add a card linking to `/{slug}/` in the root `index.html`.
4. Commit and push to `main`.
5. Delete any `CNAME` from the original teaser repo so it stops claiming the domain root.

Assets must be referenced relatively so the site works under `/{slug}/`.
