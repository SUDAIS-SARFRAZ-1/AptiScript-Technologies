# Product Requirements Document
## AptiScript Technologies — Corporate Website
*Building Next Generation Software*

| | |
|---|---|
| **Prepared by** | Sudais Sarfraz — Founder, AptiScript Technologies |
| **Document Version** | 1.2 |
| **Date** | September 22, 2026 |
| **Status** | Draft for Review |

---

## Table of Contents

1. [Document Overview](#1-document-overview)
2. [Purpose & Background](#2-purpose--background)
3. [Goals & Objectives](#3-goals--objectives)
4. [Target Audience](#4-target-audience)
5. [Scope](#5-scope)
6. [Site Structure & Page Requirements](#6-site-structure--page-requirements)
7. [Functional Requirements](#7-functional-requirements)
8. [Non-Functional Requirements](#8-non-functional-requirements)
9. [Recommended Technical Implementation](#9-recommended-technical-implementation)
10. [Timeline & Milestones](#10-timeline--milestones)
11. [Success Metrics (KPIs)](#11-success-metrics-kpis)
12. [Risks & Open Questions](#12-risks--open-questions)
13. [Assumptions & Constraints](#13-assumptions--constraints)
14. [Future Considerations (v2+)](#14-future-considerations-v2)
15. [Revision History](#15-revision-history)
16. [Approval](#16-approval)

---

## 1. Document Overview

- **Product Name:** AptiScript Technologies Corporate Website
- **Owner:** Sheikh Sudais, Founder
- **Team Size:** 10 members (Frontend, Backend, DevOps)
- **Document Purpose:** Define scope, structure, features, and technical requirements for AptiScript Technologies' public-facing website, used to attract clients and establish credibility as a full-service software house.

## 2. Purpose & Background

AptiScript Technologies is a software development company positioned as a full-service software house, capable of delivering custom web and mobile applications, SaaS (Software-as-a-Service) products, backend systems, APIs (Application Programming Interfaces), cloud solutions, DevOps pipelines, and business automation. The company is led by a founder with a Software Engineering degree and is supported by a 10-member team spanning the full development lifecycle.

The company currently has no live website. This document defines the requirements for a professional corporate website that will serve as the primary sales, credibility, and lead-generation asset for the business.

## 3. Goals & Objectives

- Establish AptiScript Technologies as a credible, full-service software house (not a single-stack freelance operation).
- Generate qualified leads through clear calls-to-action (quote requests, consultation bookings, WhatsApp contact).
- Showcase technical range across frontend, backend, databases, and DevOps to reassure clients of end-to-end delivery capability.
- Highlight team capacity (10 members) to signal the company can handle production-scale engagements, not just small projects.
- Rank for relevant local search terms (e.g. "software house Lahore", "custom software development Pakistan").
- Serve as a living tech demonstration — the site itself should be built on the company's own stack (React/Next.js) as a proof point.

## 4. Target Audience

| Segment | Description | Primary Need |
|---|---|---|
| Startup Founders | Early-stage founders needing an MVP or full product built | Speed, transparency, fixed-scope delivery |
| SMBs / Local Businesses | Businesses needing automation, internal tools, or a digital presence | Reliability, clear pricing, local trust |
| Enterprise / Agencies | Companies outsourcing overflow dev work or specialist modules | Proven process, team capacity, security |
| Recruiters / Partners | Parties evaluating AptiScript for partnership or hiring | Portfolio depth, team credentials |

## 5. Scope

### 5.1 In Scope

- Public marketing website (not a client portal or authenticated dashboard).
- Pages: Home, Services, Tech Stack, Portfolio, About/Team, Process, Contact.
- Contact form with backend email delivery.
- Mobile-responsive design across all breakpoints.
- Basic on-page SEO (meta tags, semantic headings, sitemap.xml, robots.txt).
- Social links (Instagram, Facebook, business email) once accounts are created.
- Lightweight **Privacy Policy** and **Terms of Use** pages — required because the contact form collects personal data (name, email, message).
- Consultation booking link (e.g. Calendly) embedded on Home and Contact.
- Footer displaying business registration details (SECP registration number / NTN) once available, plus city/location and a direct phone number.
- Team profiles linked to real, verifiable LinkedIn profiles.
- Engagement model summary (contract/NDA, payment structure, accepted payment methods) on the Process or Contact page.

### 5.2 Out of Scope (v1)

- Client authentication/login portal.
- Payment processing or invoicing system.
- Blog/CMS (flagged as a v2 candidate — see Section 14).
- Multi-language support.

> **Suggestion:** Consider explicitly stating who owns copywriting for each page (founder, team, or a hired copywriter) and the deadline for supplying case-study content, team bios, and headshots — this is a common source of launch delays and isn't currently assigned to anyone.

## 6. Site Structure & Page Requirements

### 6.1 Home

- Hero section: company name, tagline "Building Next Generation Software," and primary CTA (Get a Quote / Book a Call).
- Secondary CTA: WhatsApp/direct contact button, persistent across scroll.
- Services overview (summary cards linking to full Services detail).
- Tech stack strip (logo row) for instant credibility.
- Featured portfolio/case study preview (1–2 projects).
- Team/capacity highlight: "10-person team covering the full development lifecycle."
- Trust strip: process summary, response-time commitment, or founder credentials.
- Footer CTA + contact form entry point.

### 6.2 Services

Structured by client outcome, not internal tech, so non-technical visitors immediately see relevance:

- Web Application Development
- Mobile Application Development
- Backend & API Development
- Cloud & DevOps Solutions
- Business Process Automation
- Custom Software Consulting

Each service block includes: short description, representative tech used, and a CTA to request a quote for that service.

### 6.3 Tech Stack

Dedicated section/page demonstrating full-cycle capability, grouped by category:

| Category | Technologies |
|---|---|
| Frontend | HTML, CSS, Tailwind CSS, JavaScript, React, Next.js |
| State Management | Zustand, React Query |
| Databases / ORM | PostgreSQL, MongoDB, Redis, Prisma, Supabase, Neon |
| Backend | Node.js, Express, REST APIs, Auth & RBAC (Role-Based Access Control), Webhooks, WebSockets, OAuth, System Design |
| DevOps | Docker, Git, GitHub, GitHub Actions (CI/CD), Render, Vercel |

Presented as a logo grid or grouped pill layout for fast visual scanning; not a plain text list.

### 6.4 Portfolio / Work

- Case-study format per project: problem, solution, tech used, outcome.
- MindMesh (AI-powered project planning system) featured as flagship case study.
- Additional projects added as they are delivered under the AptiScript brand.
- Each entry links out to a live demo or repository where available.

### 6.5 About / Team

- Company narrative: founded by a Software Engineering graduate, now a 10-member team.
- Mission/positioning statement: full-service software house handling the entire development lifecycle.
- Team structure: breakdown by function (frontend, backend, DevOps) to reinforce production-scale capability.
- Founder profile: credentials, role, and vision for the company.
- Real (non-stock, non-AI-generated) team photos, each linking to a verified LinkedIn profile — this is one of the strongest trust signals for a startup with no public track record yet.

> **Suggestion:** Clarify whether individual team members will be named/pictured, or if the team is presented only as functional groups (some team members may prefer not to be publicly listed — worth confirming before launch).

### 6.6 Process

- Discovery → Design → Development → Deployment → Support, shown as a timeline or numbered steps.
- Brief note on tooling used at each stage (e.g. CI/CD via GitHub Actions at deployment) to reinforce technical credibility.
- Engagement model summary: contract/NDA signed before work starts, fixed-price vs. milestone-based payment options, and accepted payment methods (Stripe, Wise, Payoneer) for international clients.

### 6.7 Trust & Credibility Elements *(new)*

Since AptiScript has no public track record yet, these elements exist specifically to reassure a first-time client that the company is real and professional, not a scam:

- **Footer:** business registration number (SECP) / NTN once registered, city/location, and a direct phone number alongside email and WhatsApp.
- **About/Team:** real, non-stock team photos, each linking to a verified LinkedIn profile.
- **Process/Contact:** explicit engagement model — contract/NDA before work starts, payment structure, accepted payment methods.
- **Home/Contact:** consultation booking link (e.g. Calendly) as an alternative to the contact form, signaling a structured process rather than an informal "we'll get back to you."
- **Portfolio:** every entry links to a live demo or public repo wherever possible — an unverifiable claim is worse than no claim at all.

> **Note:** If the business isn't legally registered yet, treat registration as a pre-launch action item (see Section 12, Risks & Open Questions) rather than a launch blocker — ship the footer without it and add the registration number once available.

## 7. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-1 | Contact form captures name, email, project type, and message; sends to business email | Must |
| FR-2 | WhatsApp / direct chat CTA visible on all pages | Must |
| FR-3 | Services page links each service to a pre-filled quote-request flow | Should |
| FR-4 | Portfolio entries support case-study detail pages | Should |
| FR-5 | Site is fully responsive across mobile, tablet, and desktop breakpoints | Must |
| FR-6 | Meta tags, Open Graph tags, sitemap.xml, and robots.txt configured for SEO | Must |
| FR-7 | Social links (Instagram, Facebook) wired once accounts are live | Could |
| FR-8 | Analytics integration (e.g. Google Analytics/Plausible) to track lead sources | Should |
| FR-9 | Privacy Policy and Terms of Use pages, linked from footer and contact form | Must |
| FR-10 | Consultation booking link (e.g. Calendly) available on Home and Contact pages | Should |
| FR-11 | Footer displays business registration number/NTN and location once available | Could |
| FR-12 | Team member profiles link out to verified LinkedIn profiles | Should |
| FR-13 | Process/Contact page states engagement model (contract/NDA, payment structure, accepted payment methods) | Must |

## 8. Non-Functional Requirements

### 8.1 Performance

- Initial page load under 2.5s on a standard broadband connection.
- Lighthouse performance score of 90+ on key pages (Home, Services).

### 8.2 Design & UX

- Modern, clean UI — the site functions as a live demo of AptiScript's own delivery quality.
- Consistent design system: typography, spacing, and color tokens defined once and reused.
- Clear visual hierarchy guiding visitors toward a CTA on every page.

### 8.3 Security

- Contact form protected against spam/bot submission (rate limiting or CAPTCHA).
- HTTPS enforced site-wide.
- Input validation and sanitization on all form submissions.

### 8.4 SEO & Discoverability

- Semantic HTML structure with proper heading hierarchy.
- Target keywords: "software house Lahore," "custom software development Pakistan," "MERN (MongoDB, Express, React, Node.js) stack development agency."

### 8.5 Maintainability

- Component-based architecture (React/Next.js) so pages can be extended without a rebuild.
- Codebase hosted on GitHub with CI/CD (Continuous Integration/Continuous Deployment) via GitHub Actions to Vercel/Render.

### 8.6 Accessibility *(new)*

- Target WCAG 2.1 AA conformance: sufficient color contrast, keyboard-navigable menus and forms, descriptive alt text on all images/logos, visible focus states.
- Form fields and error messages must be screen-reader accessible.

### 8.7 Browser & Device Support *(new)*

- Latest two versions of Chrome, Safari, Firefox, and Edge.
- iOS Safari and Android Chrome for mobile.
- Graceful degradation (not pixel-perfect parity) on older browsers.

> **Suggestion:** These two subsections (8.6, 8.7) were missing from the original draft. Accessibility and browser support are easy to skip in v1 and expensive to retrofit later — worth confirming target compliance level and device matrix with the dev team before build starts.

## 9. Recommended Technical Implementation

To align the website itself with AptiScript's positioning as a full-stack software house, and to double as a live demonstration of team capability:

| Layer | Recommendation | Rationale |
|---|---|---|
| Frontend | Next.js + Tailwind CSS | SEO-friendly (SSR/SSG — Server-Side Rendering / Static Site Generation), matches the team's core stack |
| Form/state handling | React Query for submission state | Consistent with team's existing tooling |
| Backend (contact form) | Node.js + Express REST endpoint, or Next.js API routes | Reuses existing backend expertise |
| Database (if needed) | PostgreSQL via Prisma + Supabase/Neon | For storing leads/inquiries if not just email |
| Hosting | Vercel (frontend), Render (API if separated) | Matches team's current DevOps tooling |
| CI/CD | GitHub Actions | Automated build/deploy on push to main |

## 10. Timeline & Milestones *(new)*

No delivery dates were specified in the original draft. Suggested phased milestones — replace the `[TBD]` dates with real targets:

| Milestone | Deliverable | Target Date |
|---|---|---|
| Kickoff | Content collection (copy, team bios, case studies) begins | `[TBD]` |
| Design | Wireframes + visual design system approved | `[TBD]` |
| Development | Core pages built (Home, Services, Tech Stack, Contact) | `[TBD]` |
| Content freeze | Portfolio, About/Team, Process pages finalized | `[TBD]` |
| QA & launch prep | Cross-browser/device testing, SEO checklist, analytics wired | `[TBD]` |
| Launch | Site live on production domain | `[TBD]` |

> **Suggestion:** Even a rough target (e.g. "launch within 6 weeks of kickoff") helps the 10-person team prioritize and gives the founder a way to track slippage.

## 11. Success Metrics (KPIs)

- Number of qualified leads/quote requests submitted per month.
- Contact form conversion rate (visitors → submissions).
- Organic search visibility for target keywords (ranking + impressions).
- Average time on Services and Portfolio pages (engagement signal).
- Bounce rate on Home page (target below industry average for B2B services sites).

> **Suggestion:** Consider adding a numeric baseline/target next to each metric once analytics is live (e.g. "≥10 quote requests/month within 90 days of launch") — as written, these are directional but not measurable pass/fail criteria.

## 12. Risks & Open Questions *(new)*

| Risk / Question | Why it matters | Suggested mitigation |
|---|---|---|
| No dedicated design budget (per Section 13) | Could delay visual design or result in inconsistent stock imagery | Decide early: stock photography, a hired freelance designer, or in-house illustration |
| Team of 10 is client-billable; site content depends on their spare time | Case studies, bios, and technical review may slip behind paying client work | Assign a single content owner with a deadline, independent of client workload |
| Domain name and business email/social accounts not yet finalized (Instagram/Facebook pending) | Blocks footer links, SEO metadata, and launch readiness | Confirm domain and finalize social accounts before the content-freeze milestone |
| No CAPTCHA/anti-spam budget or vendor chosen | Contact form (FR-1) could be flooded with spam without one | Decide between free options (Cloudflare Turnstile, hCaptcha) during development |
| Single reviewer/approver (founder only) | Slower feedback loops, single point of failure for sign-off | Optionally name a technical lead as secondary reviewer for section 9 (technical implementation) |
| Business not yet legally registered (SECP/NTN) | Enterprise/agency clients (Section 4) often check registration before signing; footer credibility elements (6.7) are incomplete without it | Prioritize registration before launch, or launch with the footer field blank and add it as soon as registration completes |

## 13. Assumptions & Constraints

- Business email is already set up; Instagram and Facebook pages are pending creation.
- Team of 10 is available to contribute case studies and, where relevant, technical review of site content.
- No dedicated budget line specified for paid design assets — stock/custom illustration to be decided during design phase.

## 14. Future Considerations (v2+)

- Blog/CMS for SEO content and thought leadership.
- Client portal for project tracking and status updates.
- Careers page as the team grows beyond 10 members.
- Case-study PDF downloads for offline sharing with prospects.

## 15. Revision History *(new)*

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | September 18, 2026 | Sheikh Sudais | Initial draft |
| 1.1 | September 22, 2026 | Sheikh Sudais | Reformatted for readability; added Timeline & Milestones, Risks & Open Questions, Accessibility, Browser & Device Support, and Revision History sections; added Privacy Policy/Terms requirement (FR-9) |
| 1.2 | September 22, 2026 | Sheikh Sudais | Added startup-credibility/trust requirements: booking link, business registration/NTN in footer, verified LinkedIn team profiles, engagement model & payment terms (new Section 6.7, FR-10 to FR-13); added related risk on business registration status |

## 16. Approval

| Name | Role | Signature | Date |
|---|---|---|---|
| Sheikh Sudais | Founder | | |
