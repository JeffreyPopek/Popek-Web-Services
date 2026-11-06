# Popek Web Services

A lightweight, single-page HTML, CSS, and JavaScript website. No deployment or DNS changes have been made.

## Open locally

Double-click index.html to open the website directly in your browser. No Node.js, dependencies, build step, or terminal is needed. Refresh after editing. VS Code Live Server is optional for automatic reloads and an HTTP preview.

## Editing

- Content and metadata: index.html
- Theme colors and responsive layouts: styles.css
- Theme toggle and contact form submission: script.js
- Crawl configuration: robots.txt and sitemap.xml

The project screenshot and founder portrait are stored in assets/ and referenced in index.html with intrinsic dimensions, alt text, and lazy loading. Include the assets/ folder when deploying. Add the verified church website URL where marked.

## Google Forms contact link

The Get a Quote and Discuss your project links in index.html open the configured Google Form in a new tab with `rel="noopener noreferrer"`. Update all four links to change the form URL. The hero and navigation contact links scroll to the Get in Touch section. The visible email addresses use `mailto:` links. The Have a Question? card submits to Netlify Forms without navigating away when JavaScript is enabled.

Light mode is the default. The theme toggle saves each visitor's explicit preference.

## Netlify Forms deployment and setup

This is a static site: no build command is needed; publish the repository root (` . `, without spaces), including assets/. The visible form in index.html is the static definition Netlify scans. Its name and hidden form-name are both contact; submitted fields are name, email, subject, message, and bot-field. No additional React or JavaScript form definition is needed.

1. In your Netlify project's Forms area, enable form detection, then deploy these files again.
2. Confirm that contact appears in Forms with the expected fields and honeypot protection.
3. Under Forms > Submission notifications > Add notification, configure email notifications for contact. Netlify currently requires the recipient to be an active team member except on Enterprise or Legacy Business plans. Use contact@popekwebservices.com if eligible, or an eligible team address.
4. Submit a clearly labeled test message on the deployed website. Confirm it appears in verified submissions (check spam if missing), the page shows success, and the notification arrives.

JavaScript sends a URL-encoded POST to / and only shows success after an HTTP success response. Failures retain input. Local mocked responses test the interface, not Netlify storage or delivery. Do not treat a generic local static server as a working submission backend. With JavaScript disabled, the native POST uses Netlify's default response page.

Official documentation: https://docs.netlify.com/manage/forms/setup/ and https://docs.netlify.com/manage/forms/notifications/

## Historical Cloudflare Pages deployment reference

The embedded form requires Netlify hosting and enabled form detection; the historical Cloudflare instructions below do not provide form handling.

1. Connect the reviewed repository to Cloudflare Pages with no framework and no build command. Set the output directory to `.` (the repository root). Alternatively, use Pages direct upload with index.html, styles.css, script.js, favicon.svg, robots.txt, sitemap.xml and the assets/ folder in the upload root.
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
