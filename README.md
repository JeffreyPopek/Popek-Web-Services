# Popek Web Services

A lightweight, single-page HTML, CSS, and JavaScript website. No deployment or DNS changes have been made.

## Open locally

Double-click index.html to open the website directly in your browser. No Node.js, dependencies, build step, or terminal is needed. Refresh after editing. VS Code Live Server is optional for automatic reloads and an HTTP preview.

## Editing

- Content and metadata: index.html
- Theme colors and responsive layouts: styles.css
- Theme toggle and contact form: script.js
- Crawl configuration: robots.txt and sitemap.xml

Replace the explicitly labeled project and portrait placeholders with real images. Store compressed WebP or AVIF files locally, set width and height, provide meaningful alt text, and lazy-load below-the-fold images. Add the verified church website URL where marked. No project screenshot or testimonial is invented.

## Google Forms contact link

Set GOOGLE_FORM_URL at the top of script.js to your published Google Forms link. It is intentionally empty: Contact Me links to the coming-soon message until a valid HTTPS Google Forms URL is supplied. Once configured, it becomes a link opening in a new tab. Direct email remains available. No embedded form or submission service is used.

Light mode is the default. The theme toggle saves each visitor's explicit preference.

## Cloudflare Pages deployment (when approved)

1. Connect the reviewed repository to Cloudflare Pages with no framework and no build command. Set the output directory to `.` (the repository root). Alternatively, use Pages direct upload with index.html, styles.css, script.js, favicon.svg, robots.txt and sitemap.xml in the upload root.
2. Configure the Google Forms URL and review the pages.dev preview before connecting the domain.
3. Keep the domain registered at Squarespace. For the apex `popekwebservices.com`, Cloudflare requires the domain to use Cloudflare DNS nameservers. Registration does not need to transfer.
4. Before changing nameservers, export or record the entire authoritative DNS zone. Recreate and compare **all** existing MX records (including priorities), SPF TXT, every DKIM selector, DMARC TXT, Titan verification, mail-related CNAME/SRV and other records in Cloudflare. Do not rely solely on automated scanning. Keep mail hostnames DNS-only, not proxied. Do not add a second SPF record or replace Titan's values with guesses.
5. If DNSSEC is enabled, follow the registrar/Cloudflare DNSSEC migration instructions: remove the old DS before changing nameservers and re-enable DNSSEC with the new DS after migration. A stale DS can break all resolution, including email.
6. Only after reviewing the copied records, change nameservers in Squarespace to the exact pair Cloudflare assigns. Leave the old zone intact during propagation. Verify MX/TXT resolution and test incoming/outgoing Titan email.
7. In Pages → Custom domains, associate `popekwebservices.com` first and follow its DNS instructions. Replace only conflicting website records; preserve email records. Add `www.popekwebservices.com` as another custom domain if desired and configure a redirect to the canonical apex. Verify HTTPS and both names.
8. Recheck Titan delivery, SPF, DKIM and DMARC after propagation. Nameserver changes affect every DNS record, so copying the complete zone is essential.

An alternative is to keep Squarespace DNS and attach only a subdomain such as `www` through CNAME; the apex setup above requires Cloudflare nameservers. Do not add a CNAME without associating the hostname in Pages first.

Official reference: https://developers.cloudflare.com/pages/configuration/custom-domains/

## Review checklist

Check desktop and mobile layouts, keyboard focus, anchors beneath the sticky header, both themes, saved preference and first-visit light mode, reduced motion, real images, and Google Forms link. The site has accessible foundations but has not been formally audited for WCAG compliance.
