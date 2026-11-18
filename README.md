# Dr. Raavi Deepthi — Academic & Research Portfolio

A responsive, accessible, search-friendly, single-page portfolio built with semantic HTML, modern CSS and vanilla JavaScript. It is designed for an academic and research profile, with emphasis on Computer Science and Engineering, cybersecurity, Internet of Vehicles (IoV), federated learning, AI and intrusion detection.

**Repository:** https://github.com/deepthireddyraavi/Dr-Raavi-Deepthi-Reddy  
**Suggested GitHub Pages URL:** https://deepthireddyraavi.github.io/Dr-Raavi-Deepthi-Reddy/

## 1. Project structure

- index.html
- css/style.css
- js/script.js
- js/xlsx.js
- assets/site-icon.svg
- assets/og-cover.svg
- robots.txt
- sitemap.xml
- README.md

No build process, package manager, frontend framework or backend is needed. Open the homepage locally or serve the folder using any static web server.

## 2. Content source and accuracy notes

The **November 18, 2026 resume supplied for this update** is the primary source for the public profile. It supersedes the older CV where the two versions differ. The portfolio now includes:
- Current Associate Professor appointment at Sreenidhi Institute of Science and Technology (2025–Present), as stated in the new resume.
- 11 years of academic experience and the reverse-chronological faculty appointments listed in the resume.
- Ph.D. in Computer Science and Engineering, GITAM University, Hyderabad (January 2026), plus the M.Tech. and B.Tech. credentials.
- Two postdoctoral research engagements, the research focus areas, SCI-listed papers, selected journal and conference publications, manuscripts under review, books and book chapters.
- AICTE RPS grant, patent activity, teaching award, conference presentation recognition, editorial board service, invited speaking engagements and peer-review contribution.
- Contact information provided in the resume.

### Accuracy checks before publication

1. The new resume identifies the current Sreenidhi appointment as **Associate Professor (2025–Present)**. This designation now appears in the homepage headline, professional experience and structured data.
2. The two postdoctoral research appointments are described as ongoing in the resume. Confirm that the appointment names, supervisors, locations and current status are accurate and permitted for public display.
3. The resume provides a patent title and July 2025 date but no application number or legal status. The site describes this as patent activity and does not claim that a patent has been granted.
4. The resume lists one Expert Systems with Applications citation with a 2027 volume/year. The page reproduces the resume's bibliographic year; confirm whether the publisher currently labels it online-first, in press or assigned to the 2027 volume.
5. Confirm publication statuses, author order, volume/issue/page details, journal indexing, DOI URLs and ISBNs against publisher records. Conference entries without full proceedings information are clearly identified as needing complete details.
6. LinkedIn, Google Scholar, ORCID, Scopus Author ID and ResearchGate URLs were not supplied. Add only verified public profile links.
7. No U.S. work authorization, visa status or current U.S. residence was stated in the resume. The site expresses interest in U.S.-based opportunities without making claims about work authorization.

### U.S. academic job-market presentation

The website uses a U.S.-oriented academic and research profile format:
- The current title and experience are shown consistently, with the most recent appointment first.
- A concise professional summary replaces a generic career objective.
- Education is limited to the Ph.D., master's and bachelor's degrees; high-school and pre-university credentials and percentage marks are omitted as they are generally not needed for an experienced U.S. academic applicant.
- Selected peer-reviewed/SCI-listed research, funding, editorial service, peer review, invited speaking and awards are easy to locate.
- American English is used in general website copy. Official publication titles, journal names and event titles retain their original wording.
- No photograph, date of birth, marital status, personal identification number or reference list is included. Add references separately when an employer or academic search committee requests them.

For U.S. faculty applications, keep a separate full academic CV with complete publication details and a shorter role-targeted résumé where the vacancy asks for one. Tailor the opening summary and selected publications to each position. Add verified Google Scholar, ORCID and LinkedIn URLs when available. Do not state U.S. work authorization or visa eligibility unless accurate and confirmed.

## 3. Local preview

From the project root, start a simple static server:

    python -m http.server 8000

Then visit http://localhost:8000 in a browser. A local server is preferable to opening the file directly because it behaves more like a deployed site.

## 4. Customization

### Design and layout

The public-facing layout uses a restrained academic / public-service visual system inspired by the information hierarchy of Norwegian public-service websites:
- White and pale-blue surfaces, dark readable text and one consistent blue accent.
- A plain wordmark and compact navigation with no decorative logo treatment.
- A text-first profile introduction with a factual “At a glance” panel instead of an invented profile illustration.
- Simple section headings, thin dividers and straightforward publication lists.
- Minimal motion and no scroll-triggered content reveals, so information is immediately available.

The site intentionally does not display a portrait because no approved professional headshot was provided. A photograph is optional; do not add a stock or AI-generated face for a professional academic profile.

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
- [ ] Confirm that the social preview image and favicon reflect the final public identity.

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
- Responsive layouts, visible focus styles, skip link, semantic navigation, ARIA state and simple non-animated content presentation.
- Print stylesheet for a clean browser-generated PDF.
- Theme choice is remembered locally when browser storage is available.

A loading target under 1.5 seconds is a goal, not a guarantee. Actual performance depends on hosting, network conditions, device, browser and any third-party scripts added later. Keep external dependencies out of the initial page load and re-test the deployed URL using Lighthouse and PageSpeed Insights.

## 9. Final pre-launch review

- [ ] Confirm current Associate Professor designation and institutional affiliation.
- [ ] Confirm postdoctoral appointment status and public wording.
- [ ] Verify every publication status, DOI, ISBN and author order.
- [ ] Confirm the patent application/grant status and number.
- [ ] Add verified LinkedIn / Google Scholar / ORCID links.
- [ ] Confirm the social preview image and favicon are current.
- [ ] Replace the canonical URL with the final production URL everywhere.
- [ ] Test on a mobile device, keyboard-only navigation and a screen reader.
- [ ] Test print-to-PDF and publication export.
- [ ] Run PageSpeed Insights and fix any issues introduced by later assets.

---

**Built with:** HTML5 · CSS3 · Vanilla JavaScript · optional SheetJS export  
**Maintainer:** Dr. Raavi Deepthi