# Glean × RRD — Vision Demo

A personalized, scripted demo that simulates the Glean AI Assistant experience tailored for RR Donnelley's sales organization.

## What It Does

This app walks viewers through four seller-facing use cases, each with a pre-loaded query, an animated AI response with inline citations, a collapsible "Show work" trace, and source cards — demonstrating how Glean serves the right content and coaching, in the flow, across RRD's real systems.

It's built as the basis for the 5–10 minute video for RRD's Sales Leader Advisory Council: top use cases for sellers with quantified time savings, revenue impact, and time-to-onboard — aligned to the June 18, 2026 "Glean & RRD" call. The through-line from that call: the problem isn't a lack of content, it's too much fragmented content and noise across 14+ microsites, Drive, the Responsive RFP system, and the Sellers Library.

## Use cases

| Persona | Role | Use case |
|---------|------|----------|
| **Account Executive** | Enterprise seller, active deal cycle | Stage-specific discovery prep served in one flow |
| **Proposal & RFP Lead** | Manager, Proposals & Content | Assemble approved RFP content across Responsive, Drive & the Sellers Library in minutes |
| **Frontline Sales Manager** | Sales manager, deal coaching | Just-in-time coaching on skill gaps and deal progression |
| **New Seller** | New hire, first 90 days | A guided ramp path that shrinks time-to-onboard |

## Deep Links

Each use case has a direct URL:

- `/account-executive` — Account Executive
- `/rfp-lead` — Proposal & RFP Lead
- `/sales-manager` — Frontline Sales Manager
- `/new-seller` — New Seller

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy

Deployed on Vercel. Push to `main` to trigger a new deployment.

```bash
npm run build
```

---

*Prepared for RRD by the Glean team*
