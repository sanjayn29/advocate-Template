# Sathiyanesan M Legal Consultancy Website

## Project Overview

This project is a professional single-page website for Sathiyanesan M, Legal Business Consultant, based in Vellore. The website presents legal consultancy services, contact information, professional identity, and an interactive digital visiting card.

The design is intentionally premium, restrained, and trustworthy. It uses a navy, gold, white, and light-gray visual system inspired by an established advocate or legal consultancy identity rather than a generic startup or template aesthetic.

## Technology Stack

- React 18 with TypeScript
- Vite for local development and production builds
- Tailwind CSS for utility-based styling
- GSAP and ScrollTrigger for entrance and scroll animations
- Lucide React for interface and legal-service icons
- React Router for application routing
- Radix UI and shadcn-style components for reusable UI primitives
- Vitest and Testing Library for testing
- ESLint and TypeScript for code quality

## Available Scripts

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run build:dev # Create a development-mode build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
npm test          # Run the test suite
npm run test:watch # Run tests in watch mode
```

## Application Structure

The main application is routed through `src/App.tsx`. The root page is `src/pages/Index.tsx`, which composes the public website from focused sections.

### Main Sections

- **Loading screen:** Displays the advocate identity and a short progress animation before the page appears.
- **Navbar:** Fixed responsive navigation with Home, Services, Contact, and Card links. It includes a mobile menu with accessible open and close labels.
- **Hero section:** Introduces Sathiyanesan M and the Legal Business Consultant identity. Primary calls to action scroll to the contact and services sections.
- **Services section:** Presents the available legal and business services in a responsive card grid.
- **Contact section:** Displays phone, email, and office address information with direct telephone and email links.
- **Visiting card:** Provides an interactive card that flips to reveal contact details.
- **Footer:** Reinforces the legal identity, copyright year, and professional positioning.

## Services Presented

The current website content includes:

1. Criminal Cases
2. Civil Litigation
3. Land Registrations
4. Loan Arbitration and Mediation
5. CIBIL Clearance, NDC and OTS
6. Business Solutions
7. Liaison Services

## Brand and Design Direction

The visual direction is based on the qualities expected from a professional legal consultancy:

- Trust
- Authority
- Reliability
- Precision
- Professionalism
- Clarity
- Established expertise

The interface avoids excessive decoration, bright or neon colors, heavy gradients, oversized rounded cards, and generic SaaS patterns. Sections use clear spacing, restrained shadows, subtle borders, strong typographic hierarchy, and gold details to create a formal legal identity.

## Color System

All primary design colors are centralized in `src/index.css` and exposed through Tailwind-compatible design tokens in `tailwind.config.ts`.

| Role | Color | Usage |
| --- | --- | --- |
| Primary Navy | `#213655` | Hero, navigation, footer, major headings, legal identity, dark surfaces |
| Gold / Bronze | `#997938` | Accents, icons, dividers, calls to action, borders, highlights, favicon mark |
| Light Gray | `#D1D6DC` | Subtle backgrounds, borders, separators, secondary UI elements |
| White | `#FFFFFF` | Main page backgrounds, cards, readable content areas, light text on navy |

Supporting derived tokens are used for muted text, darker and lighter navy surfaces, focus rings, shadows, and semantic UI states. The four brand colors remain the controlling visual language throughout the website.

## Typography

The site uses two complementary Google Fonts:

- **Libre Baskerville:** Used for headings, the advocate name, section titles, and formal identity text. It gives the site an authoritative editorial feel.
- **DM Sans:** Used for body copy, navigation, labels, buttons, service descriptions, and contact details. It keeps smaller text clear and readable.

Typography is organized through these CSS variables:

- `--font-display`
- `--font-body`
- `--font-accent`

Headings use a strong serif treatment, while body content uses a clean sans-serif system with readable line height and spacing.

## Interaction and Animation

The website preserves a small set of purposeful interactions:

- Loading screen progress animation on initial entry
- GSAP hero entrance animation
- GSAP scroll-triggered reveals for services and contact content
- Fixed navigation that changes appearance after scrolling
- Smooth scrolling from navigation and hero call-to-action buttons
- Responsive mobile navigation menu
- Interactive 3D visiting-card flip
- Hover states for buttons, links, service cards, and accents

Animations are intentionally subtle and support orientation and hierarchy. They should not distract from legal information or contact actions.

## Responsive Behavior

The layout is designed for:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors
- Large desktop screens

Responsive behavior includes:

- Collapsible mobile navigation
- Single-column mobile service and contact layouts
- Multi-column service and contact layouts at larger breakpoints
- Flexible hero typography that wraps safely on narrow screens
- Stable visiting-card aspect ratio
- Responsive button stacking
- No intentional horizontal page overflow

## Accessibility

The implementation maintains the following accessibility practices:

- Semantic headings and section structure
- Readable contrast between navy, gold, white, and muted text
- Direct telephone and email links
- Accessible mobile menu labels
- Buttons with visible text labels
- Icons used as visual support rather than the sole source of meaning
- Responsive text wrapping and stable layout dimensions
- Reduced reliance on color alone for navigation and actions

## Metadata and Identity

The browser and social metadata use the actual advocate identity:

- Page title: `Sathiyanesan M | Legal Business Consultant`
- Description focused on legal consultancy services in Vellore
- Open Graph title and description
- Twitter/X title and description
- Custom advocate favicon at `public/advocate-mark.svg`

The favicon uses a navy field with a gold balance-scale mark to match the website identity.

## Project Files

Important files include:

- `index.html` - document metadata and favicon references
- `src/App.tsx` - providers and application routing
- `src/pages/Index.tsx` - main page composition
- `src/index.css` - global styles, brand tokens, typography, and utilities
- `src/App.css` - root layout baseline
- `src/components/Navbar.tsx` - responsive navigation
- `src/components/HeroSection.tsx` - primary introduction and calls to action
- `src/components/ServicesSection.tsx` - legal services grid
- `src/components/ContactSection.tsx` - contact details
- `src/components/VisitingCard.tsx` - interactive digital visiting card
- `src/components/LoadingScreen.tsx` - initial loading experience
- `src/components/Footer.tsx` - site footer
- `tailwind.config.ts` - Tailwind theme mapping
- `vite.config.ts` - Vite server, React plugin, and path alias
- `public/advocate-mark.svg` - custom legal favicon

## Content and Business Details

The current contact details shown by the website are:

- Phone: `+91 99441 10082`
- Email: `ms11victor@gmail.com`
- Office: Vetriselvan Advocate Chamber, No:06, Tanjammal Thirumana Mandabam, First Floor, Phase 1, South Avenue Road, Sathuvachari, Vellore - 632009

These details should be updated in the relevant components if the office information changes.

## Quality Checks

Before deployment, run:

```bash
npm run build
npm run lint
npm test
```

Also verify the following manually:

- The page opens at `/`.
- Desktop navigation scrolls to each section.
- Mobile navigation opens and closes correctly.
- Phone and email links work on supported devices.
- The visiting card flips correctly.
- The favicon appears in the browser tab.
- The layout has no horizontal scrolling on mobile.
- The production build loads without console errors.
