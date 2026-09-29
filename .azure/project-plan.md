# Project Plan

**Status**: Integrated
**Created**: 2026-09-29
**Mode**: NEW
**Execution Mode**: auto

---

## 1. Project Overview

**Goal**: Build a multi-page, editorial website for a software-building startup or agency that explains its services, presents original case studies, tells the team story, and gives prospective clients a practical contact path. The project is designed so that every module is independently testable.

**App Type**: Static + API

**API Login**: No

**Mode**: NEW

**Deployment Plan**: No deployment plan found

---

## 2. Startup Website — frontend

| Component           | Technology     |
| ------------------- | -------------- |
| **Language**        | TypeScript     |
| **Runtime**         | Node           |
| **Package Manager** | npm            |
| **Test Runner**     | vitest         |
| **Mocking Library** | vi.mock        |
| **Test Command**    | npm test       |
| **Orchestration**   | docker-compose |

## 3. Services Required

| Azure Service | Role in App                                                              | Environment Variable | Default Value (Local) | Classification |
| ------------- | ------------------------------------------------------------------------ | -------------------- | --------------------- | -------------- |
| None          | Static frontend hosting is sufficient; no Azure data service is required | —                    | —                     | Essential      |

## 4. Prerequisites

### Run

| Tool    | Service(s)      | Installed | Version |
| ------- | --------------- | --------- | ------- |
| Node.js | \*              | ✅        | v26.8.1 |
| npm     | \*              | ✅        | 11.19.0 |
| Vite    | Startup Website | ✅        | 8.3.1   |

### Debug

| Tool                        | Service(s)      | Installed | Version  |
| --------------------------- | --------------- | --------- | -------- |
| VS Code JavaScript Debugger | Startup Website | ✅        | Built-in |

Double-check all tools marked ❓ before proceeding; this plan has no unresolved prerequisite detections.

## 5. Design System & UI

**Component Library**: Fluent UI v9 with Tailwind CSS utilities
**Style Direction**: A high-contrast editorial studio site with warm orange signals, ink-black typography, paper surfaces, oversized typographic moments, and compact project metadata. Layouts should feel authored and tactile rather than like a generic agency template, with restrained motion on route entry, cards, and navigation.
**Typography**: Space Grotesk for display and interface text, DM Mono for labels and project metadata

### Color Palette

| Token     | Hex       | Usage                                                                       |
| --------- | --------- | --------------------------------------------------------------------------- |
| `primary` | `#E85D2A` | Warm orange for primary actions, active navigation, and key editorial marks |
| `accent`  | `#F2B84B` | Golden highlight for tags, selected work, and small moments of emphasis     |
| `surface` | `#F5F0E8` | Warm paper background across the public site                                |
| `text`    | `#171717` | Ink-black headings, body copy, and high-contrast controls                   |
| `muted`   | `#766F66` | Secondary copy, captions, metadata, and supporting labels                   |
| `border`  | `#D8CEC0` | Paper-toned dividers, form fields, and card edges                           |

### Pages

| Page          | Route       | Purpose                                                                                | Layout                                                         |
| ------------- | ----------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------- |
| Studio Home   | `/`         | Establish the studio point of view and guide visitors toward services or selected work | `header, nav, hero, main, card-list, actions, footer`          |
| Services      | `/services` | Explain the studio's product strategy, design, and engineering capabilities            | `header, nav, main, grid, card-list, actions, footer`          |
| Selected Work | `/work`     | Present original case studies with outcomes, sectors, and delivery details             | `header, nav, main, card-list, split(card-list                 | main), footer` |
| About         | `/about`    | Tell the team story, working principles, and collaboration model                       | `header, nav, hero, main, two-column(card-list+main), footer`  |
| Contact       | `/contact`  | Offer a clear project-intake form and set expectations for the first conversation      | `header, nav, main, two-column(main+form), action-bar, footer` |

### Sample Content

Studio Home — featured project:
| Project | Sector | Outcome | Status |
|----------|--------|---------|--------|
| Northstar Field Guide | Climate operations | 42% faster field reporting | Featured |
| Common Thread | Community finance | 3.1x more completed onboarding | Featured |
| Lumen House | Independent hospitality | 18-day launch from brief to beta | Featured |

Services — capability:
| Capability | Best for | Typical starting point | Status |
|-------------|----------|------------------------|--------|
| Product Strategy | Teams shaping a new offer | Opportunity map | Available |
| Brand + Interface | Products that need a sharper signal | Direction sprint | Available |
| Full-stack Delivery | Teams ready to ship | Working beta | Available |

Selected Work — case study:
| Case study | Client context | Result | Type |
|------------|----------------|--------|------|
| Northstar Field Guide | Climate operations platform | 42% faster reporting | Product system |
| Common Thread | Credit union onboarding | 3.1x completion rate | Service redesign |
| Lumen House | Boutique hotel group | Beta in 18 days | Launch platform |

About — principle:
| Principle | Meaning | Owner |
|-----------|---------|-------|
| Make the invisible visible | Turn complexity into a shared map | Strategy |
| Ship the useful version | Learn with real people early | Delivery |
| Leave a better system | Build foundations teams can extend | Engineering |

Contact — form defaults: Project type: New product · Timeline: This quarter · Budget: $50k-$100k · Message: Tell us what you are trying to make, change, or understand.

## 6. Project Structure

```text
project-root/
├── .azure/
│   └── project-plan.md
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── public/
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── styles/
    │   ├── globals.css
    │   └── tokens.css
    ├── components/
    │   ├── SiteHeader.tsx
    │   ├── SiteFooter.tsx
    │   ├── ProjectCard.tsx
    │   └── SectionHeading.tsx
    ├── content/
    │   ├── projects.ts
    │   ├── services.ts
    │   └── principles.ts
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── ServicesPage.tsx
    │   ├── WorkPage.tsx
    │   ├── AboutPage.tsx
    │   └── ContactPage.tsx
    └── test/
        └── navigation.test.tsx
```

## 7. Route Definitions

| #   | Method | Path        | Description                                                      | Request Body | Response Body               | Status Codes |
| --- | ------ | ----------- | ---------------------------------------------------------------- | ------------ | --------------------------- | ------------ |
| 1   | GET    | `/`         | Studio point of view, featured work, and primary calls to action | —            | Rendered Studio Home page   | 200          |
| 2   | GET    | `/services` | Product strategy, brand/interface, and delivery capabilities     | —            | Rendered Services page      | 200          |
| 3   | GET    | `/work`     | Selected case studies and measurable outcomes                    | —            | Rendered Selected Work page | 200          |
| 4   | GET    | `/about`    | Team story, principles, and collaboration model                  | —            | Rendered About page         | 200          |
| 5   | GET    | `/contact`  | Project-intake form presentation and contact details             | —            | Rendered Contact page       | 200          |

## 8. Next Steps

1. Run **azure-project-scaffold** to execute this plan
2. Run **azure-project-integrate** to wire the frontend to live data, smoke-test the backend, and create the migrations
3. Run **azure-debug-plan** → **azure-debug-generate** for Docker emulators and VS Code debugging
4. Run the **azure-deploy** agent when ready; it uses **azure-app-onboard** for architecture, cost estimation, IaC generation, provisioning, and health verification
