# Dr. Raavi Deepthi — Academic & Research Portfolio

A responsive, accessible, search-friendly, single-page portfolio built with semantic HTML, modern CSS and vanilla JavaScript. It is designed for an academic and research profile, with emphasis on Computer Science and Engineering, cybersecurity, Internet of Vehicles (IoV), federated learning, AI and intrusion detection.

**Repository:** https://github.com/deepthireddyraavi/Dr-Raavi-Deepthi-Reddy  
**Suggested GitHub Pages URL:** https://deepthireddyraavi.github.io/Dr-Raavi-Deepthi-Reddy/

## 1. Project structure

- index.html
- css/style.css
- js/script.js
- js/xlsx.js
- assets/profile-placeholder.svg
- assets/og-cover.svg
- robots.txt
- sitemap.xml
- README.md

No build process, package manager, frontend framework or backend is needed. Open the homepage locally or serve the folder using any static web server.

## 2. Content source and accuracy notes

The profile content was compiled from the academic CV available for this task. It includes:
- 11 years of academic experience and the institutions/periods listed in the CV.
- Ph.D. in Computer Science and Engineering, GITAM University, Hyderabad (January 2026).
- M.Tech. and B.Tech. qualifications, postdoctoral research details, research areas and selected publication records.
- Books, book chapters, manuscripts listed as under review, patent activity, the AICTE Research Promotion Scheme grant and awards.
- Contact information supplied in the CV.

**Please verify these items before publishing:**

1. The CV heading identifies the profile as **Associate Professor**, while the current Sreenidhi Institute experience entry lists **Assistant Professor (2025–Present)**. The public portfolio therefore uses the neutral headline “Computer Science & Engineering Academic | Cybersecurity Researcher” and keeps the experience entry as stated. Replace it with the official current designation after checking the appointment record.
2. Both postdoctoral engagements are marked as ongoing in the supplied CV. Confirm that the titles, supervisors, campuses and current status can be publicly stated.
3. The CV describes a patent title and July 2025 date, but does not include an application number or legal status. The website deliberately calls this “patent activity” and does not claim that a patent has been granted.
4. Publication details and statuses are transcribed from the CV. Verify author order, issue/pages, journal indexing, DOI validity and whether each item is published, accepted or presented. In particular, check the supplied DOI 10.48047/1vzeqw30 and the ISBN recorded for DAA before relying on them.
5. Add complete citation details and official publisher links for conference entries where the CV does not identify the proceedings.
6. LinkedIn, Google Scholar, ORCID, Scopus Author ID and ResearchGate URLs were not supplied. Do not add guessed profile links.

## 3. Local preview

From the project root, start a simple static server:

    python -m http.server 8000

Then visit http://localhost:8000 in a browser. A local server is preferable to opening the file directly because it behaves more like a deployed site.

## 4. Customization

### Replace the profile placeholder

The current hero uses assets/profile-placeholder.svg, an initials graphic rather than a real portrait. Add a professional headshot named profile.webp in assets/, then change the image path in index.html to:

    <img class="profile-placeholder"
         src="assets/profile.webp"
         alt="Dr. Raavi Deepthi, Computer Science and Engineering academic"
         width="220" height="220">

Use a compressed WebP or AVIF image, crop it consistently, and provide a descriptive alt text. Do not upload an image unless you have the right to publish it.

### Update personal and professional details

- Edit the profile summary, role, experience, education and research sections directly in index.html.
- Update the email, phone, location and GitHub links in the contact section and in the Person JSON-LD block in the page head.
- Add LinkedIn, Google Scholar and ORCID only after confirming the correct public profile URLs. Add them to the visible contact area and the Person sameAs array.
- Add new publications as article.publication-item cards, with a correct data-category value: journal, conference or accepted. The export function reads these cards automatically.
- If the current designation changes, update the hero headline, page title, metadata, structured data and experience timeline together.
- Replace the default portfolio URL in the canonical tag, Open Graph tags, JSON-LD, robots.txt and sitemap.xml if you use a custom domain or another host.

### Excel export helper

js/xlsx.js loads SheetJS only after the visitor chooses **Export publication list**. This keeps the initial page load free of the spreadsheet library. If the CDN is unreachable, the helper downloads a CSV file instead. The page itself does not need Excel data to render.

If you prefer no third-party runtime request at all, replace the Excel exporter with CSV-only logic in js/xlsx.js. If you later need to import a CV spreadsheet, validate file type and size, treat all cells as untrusted input, and never execute formulas or HTML from workbook cells.

## 5. SEO checklist

### On-page SEO
- [x] Unique page title containing the full name and professional keywords.
- [x] Specific meta description with location and research specializations.
- [x] Canonical URL, Open Graph and Twitter card metadata.
- [x] Semantic landmarks: header, nav, main, section, article and footer.
- [x] One primary H1 and a logical H2/H3 hierarchy.
- [x] Descriptive link names and useful image alt text.
- [x] JSON-LD Person, ProfilePage and WebSite structured data.
- [x] Search-engine crawl instructions and XML sitemap.
- [ ] Verify all public profile and publication URLs before launch.
- [ ] Add a real professional portrait and a raster social-sharing image if desired.

### Technical SEO
- [ ] Publish over HTTPS on a stable domain.
- [ ] Confirm the canonical URL exactly matches the final production URL.
- [ ] Submit the sitemap in Google Search Console and Bing Webmaster Tools.
- [ ] Inspect the homepage in Google Search Console after deployment.
- [ ] Validate structured data with Google's Rich Results Test and Schema Markup Validator.
- [ ] Check mobile usability and Core Web Vitals with PageSpeed Insights.
- [ ] Keep the page indexable; do not deploy with a staging noindex directive.

## 6. Deploy

### GitHub Pages (simplest for this repository)

1. Push/merge the reviewed portfolio files into the repository's main branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose branch main and folder /(root), then save.
5. Wait for the Pages deployment workflow to complete.
6. Open the published URL:  
   https://deepthireddyraavi.github.io/Dr-Raavi-Deepthi-Reddy/
7. Confirm HTTPS, the canonical URL, robots.txt and sitemap.xml.

No install command, build command or output directory is needed.

### Netlify

1. Push the repository to GitHub and import it in Netlify.
2. Choose the repository and production branch main.
3. Leave the build command empty.
4. Set the publish directory to . (repository root).
5. Deploy, attach a custom domain if desired, and enable HTTPS.
6. Update the canonical URL, social metadata, structured data, robots.txt and sitemap.xml to use the final domain.

### Vercel

1. Import the GitHub repository in Vercel.
2. Select the **Other** framework preset (static site).
3. Leave the build command empty and use . as the output directory if prompted.
4. Deploy, attach a custom domain if desired, and enable HTTPS.
5. Update all absolute production URLs in the SEO metadata and sitemap.

## 7. Tips to rank for “Dr. Raavi Deepthi”

1. Use one consistent public spelling: **Dr. Raavi Deepthi**. Keep it identical in the site title, H1, profile descriptions, author bios and public academic profiles.
2. Publish the site at a stable HTTPS URL. A personal domain using the name is worth considering if available.
3. Add reciprocal links from verified university profile pages, Google Scholar, ORCID, LinkedIn, conference speaker biographies and publisher author pages. Only link accounts you control.
4. Keep publication records accurate and link to official publisher pages or DOI records. Consistency across author profiles helps search engines disambiguate names.
5. Create useful, original research summaries over time—for example, explain IoV intrusion detection, federated learning for vehicular networks and privacy-preserving AI. Avoid repetitive keyword stuffing.
6. Ask institutions and conference organizers to use the same name spelling and link to this portfolio from relevant public profile pages.
7. Set up Google Search Console and Bing Webmaster Tools, verify ownership, submit the sitemap and monitor indexing and search queries.
8. Keep the site current when appointments, research projects, awards or publications change. Search ranking is not guaranteed; it depends on indexing, competition, reputation and external references.

## 8. Performance and accessibility

- No framework, build bundle, external font request or icon package.
- CSS and JavaScript are local and small; the optional Excel dependency is loaded only on export.
- Responsive layouts, visible focus styles, skip link, semantic navigation, ARIA state and reduced-motion support.
- Print stylesheet for a clean browser-generated PDF.
- Theme choice is remembered locally when browser storage is available.

A loading target under 1.5 seconds is a goal, not a guarantee. Actual performance depends on hosting, network conditions, device, browser and any images or third-party scripts added later. Keep the real portrait compressed, avoid autoplay media, and re-test the deployed URL using Lighthouse and PageSpeed Insights.

## 9. Final pre-launch review

- [ ] Confirm the current designation and institutional affiliation.
- [ ] Confirm postdoctoral appointment status and public wording.
- [ ] Verify every publication status, DOI, ISBN and author order.
- [ ] Confirm the patent application/grant status and number.
- [ ] Add verified LinkedIn / Google Scholar / ORCID links.
- [ ] Replace the monogram with an approved portrait if desired.
- [ ] Replace the canonical URL with the final production URL everywhere.
- [ ] Test on a mobile device, keyboard-only navigation and a screen reader.
- [ ] Test print-to-PDF and publication export.
- [ ] Run PageSpeed Insights and fix any issues introduced by later assets.

---

**Built with:** HTML5 · CSS3 · Vanilla JavaScript · optional SheetJS export  
**Maintainer:** Dr. Raavi Deepthi