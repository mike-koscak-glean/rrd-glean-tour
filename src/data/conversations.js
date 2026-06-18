import csodLogo from "../csod_logo.png";

const GLEAN_IMG = "https://app.glean.com/images";

const GDOCS_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.document`;
const GSLIDES_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.presentation`;
const GSHEETS_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.spreadsheet`;
const GDRIVE_ICON = `${GLEAN_IMG}/logos/gdrive3.svg`;
const SALESFORCE_ICON = `${GLEAN_IMG}/logos/salesforce.svg`;
const GONG_ICON = `${GLEAN_IMG}/logos/gong.svg`;
const GLOBE_ICON = `${GLEAN_IMG}/feather/globe.svg`;

const LMS_ICON = csodLogo;

// "Responsive" is RRD's RFP/proposal content system; no CDN logo, so use a lettered chip.
const RESPONSIVE_FALLBACK = { letter: "R", color: "#5B3DF5" };

export const flows = [
  /* ═══════════════════════════════════════════════════════
   * FLOW 0 — Sales Enablement Leader
   * Stacey's world: content governance, just-in-time serving,
   * taming microsite + Sellers Library sprawl.
   * ═══════════════════════════════════════════════════════ */
  {
    id: "enablement-leader",
    persona: {
      title: "Sales Enablement Leader",
      subtitle: "VP, Sales Enablement",
    },
    greeting: "Good afternoon",
    userQuery:
      "Our sellers are drowning in content — 14+ microsites hanging off the go-to-market hub, the Sellers Library in Google Drive, plus leftover acquisition drives. For our packaging plays, show me where the seller-facing content is fragmented across RRD Sales University, the microsites, and Drive. Flag duplicates and anything still on retired or acquired branding, then recommend the canonical must-have / should-have / nice-to-have set. Finally, propose how Glean serves the right asset just-in-time when a packaging opportunity moves to discovery in Salesforce — instead of us blasting another newsletter.",

    aiResponse: `Here's the state of your packaging content and a plan to govern and serve it.

**Where packaging content is fragmented**
The same packaging assets show up in several places, which is why reps have to dig:¹²
- The canonical kit lives in the **Sellers Library** Google Drive, indexed by content type.¹
- It's also linked (sometimes as older copies) across **5 of the 14 microsites** under the **RRD Sales University go-to-market view**.²
- Several near-duplicates are still sitting in **un-aggregated acquisition drives** and surface in search ahead of the current version.⁴

**Duplicates and stale branding to retire**
- Two packaging decks reference **pre-consolidation / acquired-company branding** and should be deprecated.⁴
- Three microsite pages point at **outdated Drive files** rather than the Sellers Library source — collapse these to a single link.²

**Recommended canonical set**
*Must-have (served in-deal):*¹
- Packaging buyer ICPs
- Packaging discovery question set
- Packaging "Discovery Kit" deck

*Should-have (role reinforcement):*¹
- Packaging battlecard and pricing one-pager
- Manager coaching guide for packaging deals

*Nice-to-have (searchable, not pushed):*¹
- Long-form background decks and recorded enablement sessions

**Serving it just-in-time instead of by newsletter**
Rather than another broadcast, wire content to the **Salesforce stage signal**:³
- When a **packaging opportunity moves into Discovery**, Glean surfaces the buyer ICPs, the packaging training, and the discovery questions to ask — in the seller's flow.³
- Glean acts as the **horizontal layer** across Drive, microsites, Salesforce, and Responsive, so this works without rebuilding everything inside Gemini or Agentforce.¹

**Suggested rollout**
1. Lock the must-have set in the Sellers Library and mark the duplicates deprecated in Glean.¹⁴
2. Point the 5 packaging microsites at the canonical sources.²
3. Pilot the discovery-stage trigger with one seller pod, then measure content opens vs. the old newsletter push.³`,

    sources: [
      {
        id: 1,
        title: "Sellers Library — Content Index",
        subtitle: "Google Sheets · Sales Enablement",
        iconUrl: GSHEETS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "The master index for the Sellers Library Google Drive. Organizes seller content by type (marketing, training, L&D, PR, sales engagement) and by must-have / should-have / nice-to-have tier. Built to map cleanly onto sales stages so the right asset can be served when a rep needs it.",
      },
      {
        id: 2,
        title: "RRD Sales University — Go-to-Market Hub",
        subtitle: "Internal microsite · GTM",
        iconUrl: GLOBE_ICON,
        iconFallback: null,
        author: "Microsites / Comms",
        excerpt:
          "Central go-to-market microsite hub that spiderwebs out into 14+ sub-microsites, any of which can be created by teams across the org. Several packaging pages link directly to Drive files — some current, some outdated copies — making it hard for sellers to know which version is canonical.",
      },
      {
        id: 3,
        title: "Packaging Play — Discovery Stage Kit",
        subtitle: "Google Slides · Sales Plays",
        iconUrl: GSLIDES_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "The current discovery-stage kit for packaging opportunities: buyer ICPs, the approved discovery question set, and packaging positioning. Intended to be triggered when a packaging opportunity enters the Discovery stage in Salesforce rather than pushed to all reps at once.",
      },
      {
        id: 4,
        title: "Acquisition Drive — Packaging Content Audit",
        subtitle: "Google Drive · Content Ops",
        iconUrl: GDRIVE_ICON,
        iconFallback: null,
        author: "Content Operations",
        excerpt:
          "Audit of packaging assets sitting in un-aggregated acquisition Google Drives. Flags duplicate decks, files using pre-consolidation/acquired-company branding, and content that was never migrated into the Sellers Library. Recommends deprecation or consolidation for each.",
      },
    ],

    followUpQuery:
      "Set up the Salesforce discovery-stage trigger that serves this packaging kit just-in-time",

    chatHistory: {
      today: ["Packaging content audit — microsites & Drive"],
      recent: [
        "Sellers Library — must-have / should-have index...",
        "Microsite sprawl — who created what this month...",
        "Just-in-time serving — Salesforce stage triggers...",
        "Acquisition drives — consolidation backlog...",
        "Newsletter vs. in-flow content — seller feedback...",
        "RRD Sales University — go-to-market view cleanup...",
      ],
    },

    showWork: {
      searchQuery:
        "packaging content sellers library microsites RRD sales university acquisition drive duplicates discovery stage",
      searching: [
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Sellers Library — Content Index...",
        },
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "RRD Sales University — Go-to-Market Hub...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Sellers Library — Content Index...",
        },
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "RRD Sales University — Go-to-Market Hub...",
        },
        {
          icon: GDRIVE_ICON,
          iconFallback: null,
          label: "Acquisition Drive — Packaging Content Audit...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Packaging Content Governance Plan — Sales Enablement",
        note: "Cross-referencing the Sellers Library index, microsite links, and acquisition drives to define one canonical, just-in-time package.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 1 — New Enterprise Seller
   * The just-in-time discovery dream: packaging opp hits
   * Discovery in Salesforce → ICPs, training, questions,
   * correlated with recent call transcripts.
   * ═══════════════════════════════════════════════════════ */
  {
    id: "new-seller",
    persona: {
      title: "New Enterprise Seller",
      subtitle: "New hire, first 90 days",
    },
    greeting: "Good afternoon",
    userQuery:
      "I'm in my first 90 days and a packaging opportunity just moved to Discovery in Salesforce. Pull together what I should review before the call — the buyer ICPs, the packaging training, and the discovery questions I should be asking — from the Sellers Library and RRD Sales University. If there are recent call transcripts or account notes that should change how I prep, fold those in too.",

    aiResponse: `Here's your just-in-time prep for the packaging opportunity now in Discovery.

**Why you're seeing this**
Your Salesforce opportunity moved into the **Discovery stage**, so this pulls the must-have packaging content tied to that stage — instead of you hunting across the 14 microsites for it.⁴

**1. Know the buyer (ICPs)**
Review the **packaging buyer ICPs** before the call:¹
- Primary buyer is usually in marketing/brand or procurement operations.
- Top pains: fragmented vendors, slow time-to-market, and proving ROI across print and digital.

**2. Get sharp on the offer (training)**
Skim the **Packaging 101 seller training** so your language matches the buyer's world:²
- Core packaging solutions and where RRD differentiates.
- Early-stage objection handling.

**3. Run a strong discovery (questions)**
Use the approved **discovery question set for packaging**:³
- *"How are you balancing speed-to-shelf with packaging consistency across SKUs today?"*
- *"Where does your packaging workflow slow down — design, sourcing, or production?"*
- *"How are you measuring packaging's impact on the shelf and on cost?"*
- *"Who else weighs in when you evaluate a packaging partner?"*

**What changed since the kit was written**
A **recent discovery call on a similar packaging account** flagged two things worth adapting to:⁵
- Buyers are pushing on **sustainability / materials**, so have that proof point ready.
- Pricing transparency came up early — don't save it for the end.

**Suggested 20-minute prep sequence**
1. Buyer ICP summary (5 min)¹
2. Packaging 101 highlights (7 min)²
3. Discovery questions (3 min)³
4. Recent call transcript takeaways (5 min)⁵

When you're done, ask me to draft your pre-call notes and a follow-up email — I'll keep it aligned to the approved content.`,

    sources: [
      {
        id: 1,
        title: "Packaging Buyer ICPs",
        subtitle: "Google Docs · Sales Enablement",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Defines the buyer personas for packaging opportunities — roles, decision criteria, common pains, and messaging guidance. Built to be surfaced at the discovery stage so new sellers walk in understanding who they're talking to and what matters to them.",
      },
      {
        id: 2,
        title: "Packaging 101 — Seller Training",
        subtitle: "LMS · Sales Onboarding",
        iconUrl: LMS_ICON,
        iconFallback: null,
        author: "Sales Onboarding",
        excerpt:
          "Foundational packaging curriculum for new sellers: solution overview, terminology, differentiation, and early-stage objection handling. Part of the first-90-days enablement track and mapped to the packaging discovery play.",
      },
      {
        id: 3,
        title: "Discovery Questions — Packaging Opportunities",
        subtitle: "Google Docs · Sales Plays",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Approved discovery question set for packaging deals, organized by buyer type and deal maturity. Designed to be served when an opportunity hits Discovery so reps ask the right questions and capture the right signals.",
      },
      {
        id: 4,
        title: "Opportunity — Packaging Cross-Sell (Discovery)",
        subtitle: "Salesforce · Opportunity",
        iconUrl: SALESFORCE_ICON,
        iconFallback: null,
        author: "Salesforce",
        excerpt:
          "Live opportunity record. Stage recently advanced to Discovery, which triggers the stage-based content recommendation. Includes account context, logged contacts, and current next steps — used to tailor which packaging assets are surfaced.",
      },
      {
        id: 5,
        title: "Recent Discovery Call — Packaging Account",
        subtitle: "Gong · Call transcript",
        iconUrl: GONG_ICON,
        iconFallback: null,
        author: "Gong",
        excerpt:
          "Transcript from a recent discovery call on a comparable packaging opportunity. Surfaces current buyer priorities (sustainability/materials), an early push on pricing transparency, and objections worth preparing for ahead of this call.",
      },
    ],

    followUpQuery:
      "Draft my pre-call notes and a follow-up email aligned to the approved packaging content",

    chatHistory: {
      today: ["Discovery prep — Packaging opportunity"],
      recent: [
        "Packaging buyer ICPs — who I'm meeting...",
        "Packaging 101 — training highlights...",
        "Discovery questions — packaging deals...",
        "Recent packaging call — what to adapt...",
        "Onboarding checklist — week 2...",
        "Salesforce — my opportunities by stage...",
      ],
    },

    showWork: {
      searchQuery:
        "packaging opportunity discovery stage buyer ICPs packaging training discovery questions recent call transcript",
      searching: [
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Opportunity — Packaging Cross-Sell (Discovery)...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Packaging Buyer ICPs...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Packaging Buyer ICPs...",
        },
        {
          icon: LMS_ICON,
          iconFallback: null,
          label: "Packaging 101 — Seller Training...",
        },
        {
          icon: GONG_ICON,
          iconFallback: null,
          label: "Recent Discovery Call — Packaging Account...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Discovery Prep Brief — Packaging Opportunity",
        note: "Correlating the Salesforce stage signal, the packaging kit, and a recent call transcript into a single just-in-time brief.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 2 — Sales Content & Communications Lead
   * Kelly / Tonya's world: audit 14+ microsites, consolidate
   * across acquisition drives + Responsive + Sellers Library.
   * ═══════════════════════════════════════════════════════ */
  {
    id: "sales-content",
    persona: {
      title: "Sales Content & Communications Lead",
      subtitle: "Manager, Sales Content & Engagement",
    },
    greeting: "Good afternoon",
    userQuery:
      "I need to get our content sprawl under control. Audit our 14+ microsites and tell me where packaging and proposal assets are duplicated, orphaned, or pointing at outdated Drive files across the acquisition drives, the Sellers Library, and Responsive. Show me what should collapse into a single source of truth — and what's still sitting in Drive that never got aggregated into Responsive.",

    aiResponse: `Here's the content audit across your microsites, Drive, and Responsive.

**The three sources of duplication**
1. **Microsite linking:** Across the 14+ microsites under the go-to-market hub, multiple pages link to near-identical or outdated Drive files.¹
2. **Acquisition drives:** Content from acquired businesses was never fully consolidated, so duplicates and orphans are scattered across drives.²
3. **Responsive gap:** Some proposal/RFP content lives in **Responsive**, but other answer content is still in Google Drive and was never aggregated in.³

**What's duplicated or outdated**
- Packaging and proposal boilerplate appears in **3+ locations** with no clear canonical copy.¹³
- Several microsite pages point to **stale Drive files** superseded by Sellers Library versions.¹⁴
- A set of **orphaned files** in acquisition drives have no owner and near-zero opens.²

**What's not yet in Responsive**
- Recurring RFP answers about capabilities and company details exist as loose Google Docs that should be promoted into the Responsive library so they stay current and reusable.³

**Recommended single sources of truth**
| Content | Canonical home |
|---|---|
| Seller-facing packaging assets | Sellers Library (Drive)⁴ |
| Proposal / RFP answers | Responsive³ |
| Buyer-facing one-pagers | Sellers Library, linked from microsites⁴ |

**Cleanup workflow**
1. **Inventory** every microsite-linked Drive file, Responsive entry, and acquisition-drive asset.¹²³
2. **Classify** each as canonical, duplicate, orphaned, outdated, or un-aggregated.²
3. **Consolidate** seller content under the Sellers Library index; promote proposal content into Responsive.³⁴
4. **Prevent re-sprawl** with light governance on who can spin up a new microsite and how pages must link to canonical sources.¹

Net effect: reps stop digging across destinations, and you stop manually wrangling microsites that multiply every week.`,

    sources: [
      {
        id: 1,
        title: "Microsite Inventory — RRD Sales University Network",
        subtitle: "Internal microsites · Comms",
        iconUrl: GLOBE_ICON,
        iconFallback: null,
        author: "Sales Content & Engagement",
        excerpt:
          "Directory of the 14+ active go-to-market microsites — owners, linked Drive folders, and last-published dates. Highlights pages pointing at outdated or duplicate Drive files and microsites created ad hoc by teams across the org.",
      },
      {
        id: 2,
        title: "Acquisition Drive Consolidation Tracker",
        subtitle: "Google Sheets · Content Ops",
        iconUrl: GSHEETS_ICON,
        iconFallback: null,
        author: "Content Operations",
        excerpt:
          "Tracks the inherited acquisition Google Drives, migration status, duplicate counts, and owner assignments. Flags orphaned files with no owner and low engagement that are candidates for archival or consolidation.",
      },
      {
        id: 3,
        title: "Responsive — Content Library Export",
        subtitle: "Responsive · RFP / Proposal",
        iconUrl: null,
        iconFallback: RESPONSIVE_FALLBACK,
        author: "Proposal / RFP Team",
        excerpt:
          "Current proposal and RFP answer inventory from Responsive with topic tags, last-updated timestamps, and usage frequency. Surfaces recurring answers that still live as loose Google Docs and should be promoted into Responsive to stay canonical.",
      },
      {
        id: 4,
        title: "Sellers Library — Governance Map",
        subtitle: "Google Docs · Sales Enablement",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Defines canonical storage rules, the content-type taxonomy, and the publishing relationship between Sellers Library assets and the microsites that reference them. The blueprint for collapsing duplicates into a single source of truth.",
      },
    ],

    followUpQuery:
      "Build the consolidation worklist — duplicates and orphans ranked by usage",

    chatHistory: {
      today: ["Content audit — microsites, Drive & Responsive"],
      recent: [
        "Microsite inventory — owners & last published...",
        "Acquisition drives — duplicate & orphan scan...",
        "Responsive — what's still loose in Drive...",
        "Sellers Library — canonical storage rules...",
        "Microsite governance — who can publish...",
        "Proposal boilerplate — single source of truth...",
      ],
    },

    showWork: {
      searchQuery:
        "microsite audit duplicate orphaned content acquisition drives responsive sellers library single source of truth",
      searching: [
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "Microsite Inventory — RRD Sales University Network...",
        },
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Acquisition Drive Consolidation Tracker...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "Microsite Inventory — RRD Sales University Network...",
        },
        {
          icon: null,
          iconFallback: RESPONSIVE_FALLBACK,
          label: "Responsive — Content Library Export...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Sellers Library — Governance Map...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Content Consolidation Plan — Sales Content & Comms",
        note: "Reconciling microsite links, acquisition drives, and Responsive to define a single source of truth per content type.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 3 — AI & Business Process Optimization
   * Normalize the AI stack (Gemini Enterprise, Agentforce POC);
   * where Glean fits as horizontal / backend knowledge layer;
   * agents to pilot incl. manager just-in-time coaching.
   * ═══════════════════════════════════════════════════════ */
  {
    id: "ai-bpo",
    persona: {
      title: "AI & Business Process Optimization",
      subtitle: "AI / BPO office",
    },
    greeting: "Good afternoon",
    userQuery:
      "We're trying to normalize our AI stack — Gemini Enterprise is rolling out to the whole rev team but only inside Google, and IT has an Agentforce POC pulling from API, MCP, Drive, and an RRD.com crawler. Where should Glean fit: the seller/manager-facing assistant, the backend knowledge layer under what we build, or both? Recommend the first 3 agents to pilot (include a manager just-in-time coaching agent), and how we'd measure impact in 90 days on pipeline velocity, days to close, and time-to-first-sale.",

    aiResponse: `Here's where Glean fits and the first three agents to pilot.

**Where Glean fits: backend layer first, assistant second**
Your current stack has gaps Glean is built to fill:¹²
- **Gemini Enterprise** is rolling out to the whole rev team but is **scoped to Google Workspace** — not connected to Salesforce, Responsive, SAP/Oracle, or the wider content estate.¹
- **Agentforce** is a POC pulling a few feeds (API, MCP, Drive, RRD.com crawler) inside Salesforce.²
- The unmet need is **cross-system content + coaching orchestration** with role-aware relevance.³

Recommendation: use Glean as the **horizontal knowledge layer** across Drive, microsites, Salesforce, Responsive, and call transcripts — feeding both its own assistant and, where useful, Gemini/Agentforce. It complements, not replaces, what you're already standing up.¹

**Three agents to pilot**

**1. Seller Stage-Based Content Agent**
Triggers on a **Salesforce stage change** (e.g., packaging → Discovery) and serves the buyer ICPs, packaging training, and discovery questions in-flow — the just-in-time vision, automated.³

**2. Manager Just-in-Time Coaching Agent**
Before a 1:1, surfaces for each rep: **where deals are stalling by stage**, curriculum completed and results, and the skill gaps to coach — pulled across Salesforce, the LMS, and call transcripts.⁴

**3. Content Governance Agent**
Continuously detects **duplicate / orphaned / outdated** content across microsites, acquisition drives, Responsive, and the Sellers Library so the estate stops sprawling.¹

**90-day measurement plan**
| Dimension | Metric |
|---|---|
| Adoption | Weekly active sellers/managers; % of stage-triggers that lead to a content open |
| Velocity | Pipeline velocity; close-won velocity; days to close |
| Ramp | Time-to-first-opportunity / time-to-first-sale for new hires |
| Content health | Duplicate reduction; orphaned-asset cleanup; proactive vs. broadcast comms ratio |

**Suggested sequencing**
- Weeks 1–3: connect Drive, Salesforce, microsites, Responsive; stand up the knowledge layer.¹
- Weeks 4–8: pilot agents 1 and 2 with one sales pod and their manager.³⁴
- Weeks 9–12: layer in the governance agent and report the before/after to the AI committee.¹`,

    sources: [
      {
        id: 1,
        title: "Gemini Enterprise — Rev Team Rollout Plan",
        subtitle: "Google Docs · AI Committee",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "AI Committee",
        excerpt:
          "Plan for baseline AI enablement across the entire revenue support org over 6–8 weeks, with every-other-week workstream reviews. Notes that Gemini is currently operating inside the Google suite only and is not connected to Salesforce, SAP/Oracle, or external content repositories.",
      },
      {
        id: 2,
        title: "Agentforce POC — Architecture Notes",
        subtitle: "Salesforce · IT / AI",
        iconUrl: SALESFORCE_ICON,
        iconFallback: null,
        author: "IT / AI",
        excerpt:
          "Proof-of-concept bringing multiple data feeds into Agentforce — one via API, one via MCP, one from Google Drive files, and one from an RRD.com crawler. Goal is to test multi-source retrieval inside Salesforce; the same functionality is slated to be tested through Gemini Enterprise.",
      },
      {
        id: 3,
        title: "AI Use-Case Prioritization Matrix",
        subtitle: "Google Sheets · AI / BPO Office",
        iconUrl: GSHEETS_ICON,
        iconFallback: null,
        author: "AI / BPO Office",
        excerpt:
          "Compares AI use cases across sales content, coaching, forecasting, operations, and planning to decide where third-party partners are needed vs. in-house build. Ranks cross-system content retrieval and just-in-time coaching as high-value, high-effort items without a clear owner.",
      },
      {
        id: 4,
        title: "Sales Manager 1:1 Coaching Framework",
        subtitle: "Google Docs · Sales Enablement",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Defines how managers review seller skill gaps, curriculum completion and results, deal-stage progression, and where deals stall — to coach in recurring 1:1s. The blueprint for a just-in-time coaching agent that assembles this view automatically before each meeting.",
      },
    ],

    followUpQuery:
      "Draft a 90-day Glean pilot proposal for the AI committee and Sales Enablement",

    chatHistory: {
      today: ["AI stack normalization — where Glean fits"],
      recent: [
        "Gemini Enterprise — rollout & connection gaps...",
        "Agentforce POC — API / MCP / Drive / crawler...",
        "Just-in-time coaching agent — manager 1:1s...",
        "Content governance agent — sprawl detection...",
        "Glean vs. Gemini vs. Agentforce — where each plays...",
        "90-day pilot — velocity & time-to-first-sale...",
      ],
    },

    showWork: {
      searchQuery:
        "gemini enterprise agentforce poc knowledge layer pilot agents manager coaching pipeline velocity time to first sale",
      searching: [
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Gemini Enterprise — Rev Team Rollout Plan...",
        },
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Agentforce POC — Architecture Notes...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Gemini Enterprise — Rev Team Rollout Plan...",
        },
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "AI Use-Case Prioritization Matrix...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Sales Manager 1:1 Coaching Framework...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Glean Pilot Proposal — AI Stack Normalization",
        note: "Positioning Glean as the horizontal knowledge layer and scoping three agents that complement Gemini and Agentforce with measurable 90-day outcomes.",
      },
    },
  },
];
