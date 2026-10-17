# Pablo Piantanida — GitHub Pages deployment (V7.60)

Repository: `pablo-piantanida/pablo-piantanida.github.io`.
Domain: `pablo-piantanida.org`.

## IMPORTANT: this archive is an OVERLAY, not a standalone Hugo project

The earlier website releases contain customized pages, styles, images, and CV, but do **not** include the original Hugo/Wowchemy project scaffold. In particular, this archive does not contain `go.mod`, `go.sum`, and potentially other theme configuration files needed for a successful Hugo build. **Do not upload only this archive to an empty GitHub repository and expect it to build.**

### Correct installation

1. Locate the complete local Hugo project that currently works with `~/hugo-0.108/hugo server -D`.
2. Make a copy of that entire project.
3. Unzip V7.60 over the copy, overwriting matching files. Do not delete the existing project's `go.mod`, `go.sum`, or other config files.
4. Test locally with `~/hugo-0.108/hugo server -D`.
5. Upload or push **the contents of the merged project** to the repository `pablo-piantanida.github.io` (not the ZIP).
6. In GitHub Settings → Pages choose **GitHub Actions**. Check Actions for successful deployment.
7. This release already configures the final production domain in `config/_default/config.yaml` and `static/CNAME`. During initial tests the GitHub Pages temporary URL may not work correctly until custom-domain DNS is configured, because the site is built with the final domain. If you want to test before DNS cutover, temporarily set `baseURL` and the workflow's `--baseURL` to `https://pablo-piantanida.github.io/` and remove `static/CNAME`; restore them for cutover.
8. When deployment is confirmed, configure the custom domain in Settings → Pages and update Squarespace DNS (4 GitHub Pages A records for `@`, and `www` CNAME to `pablo-piantanida.github.io`). Remove conflicting old Squarespace website A/CNAME records, but preserve email and `_domainconnect` records.
9. Enable Enforce HTTPS after GitHub issues a certificate.

### Included changes

- Set Hugo baseURL to `https://pablo-piantanida.org/`.
- Added `.github/workflows/hugo.yaml` with Hugo Extended 0.108.0 and GitHub Pages deploy.
- Added `static/CNAME`.
- Preserved V7.59 homepage, publications, styling, images, and academic CV.

### Notes

The GitHub workflow has been checked for file presence and archive integrity, **not run against the missing original project scaffold**. Some older Wowchemy dependencies may require adaptation after the first Actions build. Avoid changing Squarespace DNS until the build succeeds.
