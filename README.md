# Glean × RRD — Vision Demo

A personalized, scripted demo that simulates the Glean AI Assistant experience tailored for RR Donnelley's sales enablement and onboarding stakeholders.

## What It Does

This app walks viewers through four sales-focused personas, each with a pre-loaded query, an animated AI response with inline citations, a collapsible "Show work" trace, and source cards — demonstrating how Glean would work across RRD's real systems.

## Personas

| Persona | Role |
|---------|------|
| **Sales Enablement Leader** | VP, Sales Enablement |
| **New Enterprise Seller** | New hire, first 90 days |
| **Sales Content & Communications Lead** | Manager, Sales Content & Engagement |
| **AI & Business Process Optimization** | AI / BPO office |

## Deep Links

Each persona has a direct URL:

- `/enablement-leader` — Sales Enablement Leader
- `/new-seller` — New Enterprise Seller
- `/sales-content` — Sales Content & Communications Lead
- `/ai-bpo` — AI & Business Process Optimization

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
