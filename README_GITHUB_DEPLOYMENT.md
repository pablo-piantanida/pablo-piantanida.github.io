# Pablo Piantanida — Hugo academic website / GitHub Pages

This is the **complete merged Hugo project**, prepared for the first deployment at
https://pablo-piantanida.github.io/ . It includes the latest site customizations and the downloadable CV.

## First deployment (do not change DNS yet)
1. Extract this ZIP. The files `go.mod`, `go.sum`, `config/`, `content/`, `static/`, `assets/`, and `.github/` must be at the repository root.
2. Commit and push the **contents** of the extracted folder to the `main` branch of `pablo-piantanida/pablo-piantanida.github.io` (GitHub Desktop is recommended).
3. In GitHub > repository Settings > Pages > Build and deployment, choose **GitHub Actions**.
4. Check Actions > Deploy Hugo site to GitHub Pages. Once successful, visit https://pablo-piantanida.github.io/ and test images, publications, and CV.

## Only after testing: move to custom domain
1. In `config/_default/config.yaml`, change `baseURL` to `https://pablo-piantanida.org/`.
2. In `.github/workflows/hugo.yaml`, change the `--baseURL` URL to `https://pablo-piantanida.org/`.
3. Create `static/CNAME` with exactly `pablo-piantanida.org` (no scheme, one line).
4. Commit/push, set custom domain `pablo-piantanida.org` in GitHub > Settings > Pages.
5. In Squarespace DNS, remove conflicting Squarespace website forwarding records and set the GitHub Pages A records for @ (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153), and www CNAME -> pablo-piantanida.github.io. Preserve email-related records and nameservers.
6. When DNS and certificate provisioning complete, enable **Enforce HTTPS** in GitHub Pages.

## Notes
- GitHub Actions pins Hugo Extended 0.108.0 to match this older Wowchemy theme.
- Do not upload the ZIP as a single file: upload/commit its extracted contents.
- A GitHub Actions build has NOT been run in this environment; check the workflow logs on GitHub after pushing.
