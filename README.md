# Eco Badger – Free GitHub Pages Site

This folder contains a ready‑to‑deploy static website for **Eco Badger**.

## Quick Deploy (GitHub Pages)

1. Create a repository on GitHub named `eco-badger` (public).
2. Upload **all files** from this folder to the root of the repo (`index.html`, `style.css`, `script.js`, and the `assets` folder).
3. In the repo, go to **Settings → Pages**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` → `/root`
4. Your site will be live at: `https://YOUR-USERNAME.github.io/eco-badger` (replace with your username).

## Customize

- **Email & phone:** Edit in `index.html` in the Contact section (search for `your-email@example.com` and `+254 700 000 000`).
- **Logo:** Replace `assets/logo.svg` with your own. Keep the filename the same or update the `<img src>` paths.
- **Projects:** Replace `assets/project-placeholder.svg` with real images—add files like `assets/project1.jpg` and update the `<img src="">` paths in the Projects section.
- **Colors:** Adjust CSS variables at the top of `style.css` (look for `--brand-600`, etc.).
- **Text:** Edit headings/paragraphs in `index.html`.

## Optional: Custom Domain

1. Buy a domain (e.g. from Namecheap or Cloudflare).
2. In your repo → **Settings → Pages → Custom domain**, enter `www.yourdomain.com`.
3. Add `CNAME` record pointing `www` to `YOUR-USERNAME.github.io` in your domain DNS.
4. Enable **Enforce HTTPS**.

---

© 2025 Eco Badger
