import csodLogo from "../csod_logo.png";

const GLEAN_IMG = "https://app.glean.com/images";

const GDOCS_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.document`;
const GSLIDES_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.presentation`;
const GSHEETS_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.spreadsheet`;
const GDRIVE_ICON = `${GLEAN_IMG}/logos/gdrive3.svg`;
const SALESFORCE_ICON = `${GLEAN_IMG}/logos/salesforce.svg`;
const GLOBE_ICON = `${GLEAN_IMG}/feather/globe.svg`;

const LMS_ICON = csodLogo;

export const flows = [
  /* ═══════════════════════════════════════════════════════
   * FLOW 0 — Sales Enablement Leader
   * ═══════════════════════════════════════════════════════ */
  {
    id: "enablement-leader",
    persona: {
      title: "Sales Enablement Leader",
      subtitle: "VP, Sales Enablement",
    },
    greeting: "Good afternoon",
    userQuery:
      "For our Q2 sales plays, bring together the most up-to-date enablement content for a mid-market cross-sell opportunity in financial services. Include the primary deck we want sellers to use, the right battlecard and microsite section, and any proposal templates from the acquisition library that match. Then flag anything that looks outdated or duplicative and recommend one canonical package I should promote to sellers and how to roll it out alongside Gemini.",

    aiResponse: `Here's the governed package for your Q2 financial services cross-sell plays.

**Primary deck to promote**
Recommended deck: **"Q2 Financial Services Cross-Sell — Core Pitch"**¹
- Latest version, updated this quarter with new case studies and proof points.¹
- Already referenced in the Q2 Plays doc and linked from the FS microsite.¹³
- Used in recent wins; win stories are embedded in the notes.

**Battlecard and microsite content**
- Battlecard: **"Financial Services Platform vs [Top Competitors]"**²
  - Covers pricing, differentiation, and objection handling aligned with your current plays.
- Microsite section: **"Why RRD for Financial Services"**³
  - Use this as the canonical source for one-liners and visuals; Gemini and Glean agents should both lean on this page for consistent messaging.³

**Relevant proposal templates**
Two acquisition-era templates match this play:⁴
- *"FS Cross-Sell — Existing Print Customer"*
- *"FS Cross-Sell — Digital + Print Bundle"*

Both include workable language, but the **Digital + Print Bundle** template aligns better with your current platform positioning.⁴

**Cleanup: what looks outdated or duplicative**
Several older decks and battlecards cover similar ground but:
- Reference retired product names.
- Use pre-consolidation branding.

Recommend: mark these as deprecated in Glean and remove them from microsite navigation so Gemini and Glean both steer sellers to the newer content.¹³

**Canonical package & rollout plan**
Canonical set to promote:
1. Q2 FS Cross-Sell Core Deck¹
2. FS Platform vs Competitors Battlecard²
3. FS Microsite "Why RRD" section³
4. Updated "Digital + Print Bundle" proposal template⁴

Rollout suggestion:
- Create a Glean "FS Cross-Sell Brief" agent that packages these four assets for any FS opportunity.
- Link that agent and these assets from the Gemini gem index so sellers see a consistent story whichever assistant they start with.³
- Spotlight the package in your next sales comms and microsite hero slot.`,

    sources: [
      {
        id: 1,
        title: "Q2 Plays — Financial Services Cross-Sell",
        subtitle: "Google Slides · Sales Plays",
        iconUrl: GSLIDES_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Q2 sales play for financial services cross-sell. Updated this quarter with refreshed case studies, proof points, and win stories. Primary deck referenced in the Q2 Plays doc and linked from the FS microsite hub. Used by top performers in recent regional bank and insurance opportunities.",
      },
      {
        id: 2,
        title: "Battlecard — Financial Services Platform vs Competitors",
        subtitle: "Google Docs · Sales Enablement",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Sales Content & Engagement",
        excerpt:
          "Current competitive battlecard for the FS segment. Covers pricing comparison, platform differentiation, and objection handling for the top competitive scenarios. Aligned with Q2 plays and approved for field use. Includes guidance on print vs. digital bundling and cross-sell positioning.",
      },
      {
        id: 3,
        title: "Go-to-market Microsite — Financial Services Hub",
        subtitle: "Internal site · Sales Plays",
        iconUrl: GLOBE_ICON,
        iconFallback: null,
        author: "Microsites Team",
        excerpt:
          "Canonical internal microsite for the financial services segment. Contains approved one-liners, visuals, and sales messaging for FS cross-sell plays. Designed to be the source of truth for both Gemini gems and Glean agents pointing sellers to FS content. Last updated this quarter.",
      },
      {
        id: 4,
        title: "Acquisition Library — FS Cross-Sell Templates",
        subtitle: "Google Drive · Content Library",
        iconUrl: GDRIVE_ICON,
        iconFallback: null,
        author: "Content Library",
        excerpt:
          "Proposal templates from the acquisition library. Two templates match the current FS cross-sell play: 'Existing Print Customer' and 'Digital + Print Bundle.' The Digital + Print Bundle version aligns better with current platform positioning. Both contain adaptable language but should not be used without reviewing for retired product names.",
      },
    ],

    followUpQuery:
      "Create a Glean FS Cross-Sell Brief agent that packages these four assets",

    chatHistory: {
      today: ["Campaign launch checklist — Q2 Sales Plays"],
      recent: [
        "Acquisition library — Migration plan...",
        "Microsite usage dashboard — Last 90 days...",
        "Salesforce content performance — Battlecards...",
        "Gemini enablement rollout — Go-to-market team...",
        "Seller feedback — Content is hard to find...",
        "Q2 Sales Plays — Launch Readiness...",
      ],
    },

    showWork: {
      searchQuery:
        "Q2 sales plays financial services cross-sell deck battlecard microsite proposal",
      searching: [
        {
          icon: GSLIDES_ICON,
          iconFallback: null,
          label: "Q2 Plays — Financial Services Cross-Sell...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Battlecard — Financial Services Platform vs Competitors...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GSLIDES_ICON,
          iconFallback: null,
          label: "Q2 Plays — Financial Services Cross-Sell...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Battlecard — Financial Services Platform vs Competitors...",
        },
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "Go-to-market Microsite — Financial Services Hub...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Sales Plays Content Package — Financial Services Cross-Sell",
        note: "Cross-referencing Q2 plays, microsite content, and acquisition templates to propose a single, governed sales package.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 1 — New Enterprise Seller
   * ═══════════════════════════════════════════════════════ */
  {
    id: "new-seller",
    persona: {
      title: "New Enterprise Seller",
      subtitle: "New hire, first 90 days",
    },
    greeting: "Good afternoon",
    userQuery:
      "I'm an enterprise seller in week 2 of onboarding. I have my first discovery call next week with a mid-market account covering commercial print and direct mail. Help me: understand their current programs and products with us, build a discovery question set, know what internal resources I should study ahead of the call, and know how to use Gemini and Glean together to prep efficiently.",

    aiResponse: `Here's your pre-call brief for the upcoming commercial print and direct mail discovery call.

**Your account snapshot**
Based on the account record, this is an existing print customer with an active commercial print program.³ Key context to know going in:
- They currently use RRD for commercial print and direct mail production — the relationship predates the recent business unit consolidations.
- No active cross-sell opportunities are currently logged in Salesforce, which makes this a strong candidate for introducing the digital + direct mail bundle.³
- The previous seller logged one executive contact in marketing operations; worth confirming the full stakeholder map before the call.

**Discovery question set**
For a first call with an existing print customer, lead with understanding before pitching:¹
- *"How is your team thinking about the balance between print and digital channels for your 2026 campaigns?"*
- *"Where does your print and direct mail workflow tend to slow down today — is it design, production, or tracking ROI?"*
- *"Are you currently measuring response rates across print and digital in the same place, or are those reporting siloed?"*
- *"How are decisions about vendors and consolidation typically made — at the marketing team level or above?"*

**Internal resources to study before the call**
Priority reading:¹²
1. **Onboarding Plan (Days 1–30)** — specifically the "Existing Customer Discovery" module in your LMS track.¹
2. **Onboarding Microsite "Start Here" page** — the product overview for commercial print and direct mail.²
3. **Salesforce First 30 Days Activity Template** — sets up the discovery call follow-up structure you'll complete after the meeting.³

**How to use Gemini and Glean together**
Use **Glean** to:
- Pull the latest account context, past proposals, and any relevant internal notes across Salesforce and Drive before the call.¹³
- Search for case studies or win stories from similar existing print customers to use as proof points.

Use **Gemini** to:
- Draft variations of your follow-up email and refine your talk track based on the brief.
- Polish the discovery questions above into a format you're comfortable delivering.

Together, they keep you aligned to the official content while still letting you move fast.`,

    sources: [
      {
        id: 1,
        title: "Onboarding Plan — Enterprise Sellers (Days 1–30)",
        subtitle: "LMS · Sales Onboarding",
        iconUrl: LMS_ICON,
        iconFallback: null,
        author: "Sales Onboarding",
        excerpt:
          "Structured 30-day onboarding plan for enterprise sellers. Includes curriculum modules, on-the-job training checkpoints, and manager coaching milestones. Contains an 'Existing Customer Discovery' module with approved discovery frameworks and question banks for commercial print and direct mail accounts.",
      },
      {
        id: 2,
        title: "Onboarding Microsite — Start Here",
        subtitle: "Internal site · New Sellers",
        iconUrl: GLOBE_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "New seller onboarding hub. Week-by-week guidance, product overviews, and links to approved training content. Product overview sections cover commercial print, direct mail, digital, and cross-sell bundle positioning. The 'Start Here' page is the primary navigation point for new hires in their first 30 days.",
      },
      {
        id: 3,
        title: "Salesforce Template — First 30 Days Activities",
        subtitle: "CRM · Activity Template",
        iconUrl: SALESFORCE_ICON,
        iconFallback: null,
        author: "Sales Operations",
        excerpt:
          "Salesforce activity template for new sellers in their first 30 days. Pre-populated with key activity types, tasks, and follow-up cadence expected from enterprise AEs. Includes a discovery call prep checklist and a post-call structured update template tied to MEDDIC fields and opportunity stage advancement.",
      },
      {
        id: 4,
        title: "Gemini for Sellers: Beyond Email Drafting",
        subtitle: "Training · AI Enablement",
        iconUrl: LMS_ICON,
        iconFallback: null,
        author: "AI / BPO Office",
        excerpt:
          "Training module on using Gemini as a seller productivity tool beyond basic email drafting. Covers: how to build talk tracks from official content, draft follow-up sequences tied to discovery notes, and use Gemini gems to pull the right play for a given opportunity. Required as part of the onboarding AI enablement track.",
      },
    ],

    followUpQuery:
      "Pull the most relevant case study for an existing print customer in financial services",

    chatHistory: {
      today: ["Account prep — First Discovery Call"],
      recent: [
        "LMS progress — Days 1–30 track...",
        "Product overview — Commercial Print & Direct Mail...",
        "Gemini for sellers training...",
        "SKO recordings — New hire track...",
        "Onboarding checklist — Week 2...",
        "Salesforce first 30 days template...",
      ],
    },

    showWork: {
      searchQuery:
        "new seller onboarding discovery call account prep product overview commercial print direct mail",
      searching: [
        {
          icon: LMS_ICON,
          iconFallback: null,
          label: "Onboarding Plan — Enterprise Sellers (Days 1–30)...",
        },
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "Onboarding Microsite — Start Here...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: LMS_ICON,
          iconFallback: null,
          label: "Onboarding Plan — Enterprise Sellers (Days 1–30)...",
        },
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "Onboarding Microsite — Start Here...",
        },
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Salesforce Template — First 30 Days Activities...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "First Discovery Call Brief — Commercial Print Account",
        note: "Pulling onboarding plan, account context, and training materials to build your pre-call brief.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 2 — Sales Content & Communications Lead
   * ═══════════════════════════════════════════════════════ */
  {
    id: "sales-content",
    persona: {
      title: "Sales Content & Communications Lead",
      subtitle: "Manager, Sales Content & Engagement",
    },
    greeting: "Good afternoon",
    userQuery:
      "Look across our last two onboarding cohorts and our Gemini rollout. Summarize where new sellers are getting stuck in the first 60 days, which onboarding assets are actually being used, and how often they're using Gemini vs not touching it. Recommend 3 concrete changes we should make to the onboarding experience and content layout.",

    aiResponse: `Here's what the data says about onboarding and what to change next.

**Where new sellers are getting stuck**
- **Content discovery:** High drop-off after the first few days on the onboarding microsite; many sellers jump straight to ad-hoc search or asking peers.²
- **Tool behaviors:** A meaningful portion of new hires log into Salesforce and Gemini but don't consistently use the "First 30 Days" templates or tagged plays.⁴
- **Application gap:** Sellers complete trainings but don't always connect them to real accounts and opportunities in their territory.¹

**What onboarding assets are actually used**
Strong engagement with:²
- "Start Here" page and the first-week checklist.
- Core product overview decks.

Under-used:
- Deeper playbooks and longform PDFs.
- Certain acquisition-era assets that are still linked but rarely opened.²

**How Gemini is being used (or not)**
Adoption is uneven:³
- A subset of sellers use Gemini heavily for email drafting and light content polishing.
- Many are still at a baseline level — using it for editing emails but not tying it back to specific plays or accounts.³
- Very few new hires are using Gemini to synthesize internal content because that content isn't consistently wired in or clearly promoted.

**Three changes to make now**

**1. Create a "New Seller Onboarding" Glean agent.**²
When a seller types *"I'm in week 2 of onboarding, what should I focus on?"* the agent:
- Looks at their accounts and opportunities in Salesforce.⁴
- Maps to the official onboarding plan and microsite structure.¹²
- Returns a personalized checklist and links to the exact content they should use.

**2. Restructure the onboarding microsite around tasks, not file types.**²
- Replace sections like *"Decks / PDFs / Videos"* with workflows like *"Prepare for your first discovery call,"* *"Run your first QBR,"* etc.
- Back those workflows with a Glean-powered search box that finds the right content across systems.

**3. Instrument and showcase a simple "time-to-first-sale" story.**⁴
- Use Glean analytics and Salesforce to compare behavior patterns — content use and assistant queries — between faster-ramping sellers and the rest.
- Turn that into a one-slide story for leadership showing how better content discovery and guided onboarding shortens ramp.`,

    sources: [
      {
        id: 1,
        title: "Onboarding Analytics — Cohorts Q3 & Q4",
        subtitle: "Google Sheets · Sales Enablement",
        iconUrl: GSHEETS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Cohort-level analytics for the Q3 and Q4 enterprise seller onboarding groups. Tracks time-to-first-opportunity, content engagement, LMS completion rates, and manager coaching touchpoints. Q4 cohort shows 18% slower time-to-first-sale vs Q3 despite similar headcount and territory composition.",
      },
      {
        id: 2,
        title: "Microsite Usage Report — Onboarding Hub",
        subtitle: "Internal site · Analytics",
        iconUrl: GLOBE_ICON,
        iconFallback: null,
        author: "Microsites Team",
        excerpt:
          "'Start Here' and Week 1 checklist show strong engagement. Deeper playbooks and acquisition-era assets have low open rates — several linked pages have under 10 unique visits in 60 days. Bounce rate increases significantly after day 5 of onboarding, suggesting sellers are abandoning structured paths for ad-hoc search.",
      },
      {
        id: 3,
        title: "Gemini Usage — Go-to-Market Team",
        subtitle: "Google Sheets · AI / BPO Office",
        iconUrl: GSHEETS_ICON,
        iconFallback: null,
        author: "AI / BPO Office",
        excerpt:
          "Gemini usage analysis for the go-to-market team through Q1. Usage is bimodal: a small group of power users accounts for the majority of advanced use cases. New sellers are predominantly using Gemini for email editing only. Fewer than 15% of new hires have used Gemini to synthesize internal content.",
      },
      {
        id: 4,
        title: "Time to First Opportunity & First Close",
        subtitle: "CRM · Performance Metrics",
        iconUrl: SALESFORCE_ICON,
        iconFallback: null,
        author: "Sales Operations",
        excerpt:
          "Salesforce-based report comparing time-to-first-opportunity and time-to-first-close by seller cohort, tenure band, and territory type. Fastest-ramping sellers show higher early Salesforce activity completion and more consistent use of approved templates and plays in their first 30 days.",
      },
    ],

    followUpQuery:
      "Draft the brief for leadership showing how guided onboarding shortens ramp",

    chatHistory: {
      today: ["Onboarding content usage — Last cohort"],
      recent: [
        "Microsite analytics — Seller behavior by page...",
        "Email campaign — Announcing Gemini rollout...",
        "Salesforce report — Time to first opportunity...",
        "Seller survey — 'Hard to find what I need'...",
        "Gemini usage patterns — Go-to-market...",
        "Onboarding Cohort Debrief — Q4...",
      ],
    },

    showWork: {
      searchQuery:
        "onboarding cohort analytics microsite usage gemini usage first 60 days time to first sale survey",
      searching: [
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Onboarding Analytics — Cohorts Q3 & Q4...",
        },
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "Microsite Usage Report — Onboarding Hub...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Onboarding Analytics — Cohorts Q3 & Q4...",
        },
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "Microsite Usage Report — Onboarding Hub...",
        },
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Gemini Usage — Go-to-Market Team...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Onboarding Optimization Brief — Sales Enablement",
        note: "Merging usage, performance, and survey data to recommend onboarding and content changes tied to behavior and time-to-first-sale.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 3 — AI & Business Process Optimization
   * ═══════════════════════════════════════════════════════ */
  {
    id: "ai-bpo",
    persona: {
      title: "AI & Business Process Optimization",
      subtitle: "AI / BPO office",
    },
    greeting: "Good afternoon",
    userQuery:
      "Within Sales & Onboarding, where can Glean add the most value on top of Gemini and existing tools? Recommend the first 3 Glean agents we should pilot, how they plug into Salesforce, Gemini, and our existing onboarding tracks, and how we'd measure impact in 90 days.",

    aiResponse: `Here are the top three Glean agents to pilot alongside Gemini.

**1. Sales Content Copilot (Cross-System)**

*What it does:*
Given an account, product, or play, it pulls together the latest deck, battlecard, microsite content, and relevant proposal templates from Salesforce, Drive, and internal sites.¹⁴

*Why it's different from Gemini alone:*
Uses Glean's knowledge graph and permissions to reliably find and prioritize the right assets across all systems — without manual wiring each time.¹²

*Where it lives:*
As a panel inside Salesforce, and as a Glean agent sellers can invoke directly or via shortcut from Gemini.²

---

**2. Onboarding Journey Copilot**

*What it does:*
Watches a new seller's real activity — Salesforce tasks, meetings, content opens — and, when asked, gives a personalized 30/60/90 plan plus "what to do this week" based on the official onboarding track.³

*Why it matters:*
Reduces time-to-first-sale while using your existing LMS, microsites, and Gemini investments — not displacing them.¹³

*Where it lives:*
In Glean's assistant, with notifications via email or chat.

---

**3. Call-to-CRM Update Agent**

*What it does:*
Takes call notes or a meeting summary and drafts structured Salesforce updates: next steps, decision makers, MEDDIC-style fields, and tasks.²

*Why it fits your strategy:*
Leverages the same AI stack you're investing in, but uses Glean's context and connectors to reduce manual data entry and improve CRM data quality.²

---

**90-day impact measurement**
Track:
- **Adoption:** how often these agents are invoked by sellers and managers.
- **Behavior change:** increase in Salesforce activity completion rates, use of official content, and Gemini usage tied to plays.¹²
- **Outcome metrics:** change in time-to-first-opportunity / first close for new hires, and win rate on plays supported by the Sales Content Copilot.³⁴

| Agent | Primary metric | Secondary metric |
|-------|---------------|-----------------|
| Sales Content Copilot | % of opps using official content | Win rate on supported plays |
| Onboarding Journey Copilot | Time-to-first-opportunity | Salesforce activity completion |
| Call-to-CRM Update Agent | CRM update rate post-call | Data quality score |`,

    sources: [
      {
        id: 1,
        title: "Gemini Rollout Plan — Go-to-Market",
        subtitle: "Google Docs · AI / BPO Office",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "AI / BPO Office",
        excerpt:
          "Go-to-market rollout plan for Gemini across the sales organization. Covers phased rollout, training tracks, gem index structure, and integration with Salesforce and the proposal platform. Open items: Gemini-to-Salesforce integration partially built; Notebook LM usage untracked. Glean positioned as a complementary connector layer.",
      },
      {
        id: 2,
        title: "Automation Backlog — Sales & Onboarding",
        subtitle: "Google Sheets · AI Pipeline",
        iconUrl: GSHEETS_ICON,
        iconFallback: null,
        author: "AI / BPO Office",
        excerpt:
          "Prioritized backlog of AI and automation opportunities across sales and onboarding. Top-ranked items: cross-system content retrieval for sellers, CRM update automation post-call, and personalized onboarding journey agents. All three identified as high-effort/high-value without a clear owner; Glean pilot addresses the first two directly.",
      },
      {
        id: 3,
        title: "Onboarding Plan — Enterprise Sellers (Days 1–90)",
        subtitle: "LMS · Sales Onboarding",
        iconUrl: LMS_ICON,
        iconFallback: null,
        author: "Sales Onboarding",
        excerpt:
          "Full 90-day onboarding plan for enterprise sellers. Structured curriculum milestones, manager coaching gates, and on-the-job assignments. Designed to be the source of truth for the Onboarding Journey Copilot; the agent would map seller activity against this plan in real time to generate personalized weekly priorities.",
      },
      {
        id: 4,
        title: "RRD AI Strategy — Go-to-market & Infrastructure",
        subtitle: "Google Docs · Strategy",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "AI / BPO Office",
        excerpt:
          "Internal AI strategy document covering infrastructure investments and go-to-market AI priorities. Confirms Gemini as the horizontal AI platform; Glean is scoped as the knowledge layer and cross-system retrieval solution. Strategy explicitly values tools that complement rather than replace Gemini, Salesforce, and existing LMS investments.",
      },
    ],

    followUpQuery:
      "Draft a 90-day Glean pilot proposal to share with Sales Enablement leadership",

    chatHistory: {
      today: ["Gemini rollout — Go-to-market status"],
      recent: [
        "AI + Automation backlog — Sales & Onboarding...",
        "Gemini Gems — Sales library...",
        "Proposal platform integration plan...",
        "Salesforce AI initiatives — Sales Programs evaluation...",
        "RRD AI strategy — Infrastructure & Go-to-market...",
        "Glean vs Gemini — Where each plays...",
      ],
    },

    showWork: {
      searchQuery:
        "gemini rollout sales enablement automation backlog onboarding time to first sale sales programs evaluation",
      searching: [
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Gemini Rollout Plan — Go-to-Market...",
        },
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Automation Backlog — Sales & Onboarding...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Gemini Rollout Plan — Go-to-Market...",
        },
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Automation Backlog — Sales & Onboarding...",
        },
        {
          icon: LMS_ICON,
          iconFallback: null,
          label: "Onboarding Plan — Enterprise Sellers (Days 1–90)...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Glean Pilot Proposal — Sales & Onboarding Agents",
        note: "Proposing three Glean agents that complement Gemini and Salesforce, focused on fast, measurable wins.",
      },
    },
  },
];
