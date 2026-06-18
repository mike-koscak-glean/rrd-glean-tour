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

/* ═══════════════════════════════════════════════════════════════
 * Flows realigned to the June 18, 2026 "Glean & RRD" call.
 * Deliverable in focus: a 5–10 min video for RRD's Sales Leader
 * Advisory Council showing TOP USE CASES for sales agents, with
 * quantified time savings, revenue impact, and time-to-onboard —
 * not a vendor pitch. The through-line from the call: the problem
 * is not lack of content, it's too much fragmented content and
 * noise across 14+ microsites, Drive, Responsive, and the Sellers
 * Library. Glean serves the right thing, in the flow, just in time.
 * ═══════════════════════════════════════════════════════════════ */

export const flows = [
  /* ═══════════════════════════════════════════════════════
   * FLOW 0 — Account Executive
   * The frontline pain every leader recognizes: stage-specific
   * deal prep served in one flow instead of digging across
   * microsites, Drive, Responsive, and the Sellers Library.
   * ═══════════════════════════════════════════════════════ */
  {
    id: "account-executive",
    persona: {
      title: "Account Executive",
      subtitle: "Enterprise seller, active deal cycle",
    },
    greeting: "Good afternoon",
    userQuery:
      "I'm prepping for a discovery call with a healthcare prospect tomorrow. Instead of me digging through the 14+ microsites, the Sellers Library, Drive, and Responsive, pull it together: what should I review right now, what questions should I ask, and which RRD materials are best for this stage?",

    aiResponse: `Here's your discovery-stage prep pack for the healthcare opportunity — pulled from across your seller systems into one answer.

**Why you're seeing one answer instead of 14 tabs**
This stitches together the discovery-stage content that's normally scattered across the microsites, the Sellers Library, Drive, and Responsive — so you're not hunting for it the night before.¹²

**What to review now (in priority order)**
- **Healthcare Discovery Playbook** — the pain themes and talking points that matter most for healthcare buyers.¹
- **Healthcare Capabilities Overview** — how to position RRD's relevant capabilities early, before you're in a formal proposal.³
- **Reusable proposal answers** — approved language for the questions healthcare prospects almost always ask, so nothing catches you flat.⁴

**Questions to ask on the call**
- *"Where does your current print, packaging, and communications workflow slow you down — design, sourcing, compliance, or production?"*
- *"How are regulatory and brand-compliance requirements handled across your materials today?"*
- *"Who else weighs in when you evaluate a partner, and what does a successful first project look like to them?"*

**Suggested 30-minute prep plan**
1. Discovery Playbook pain themes (10 min)¹
2. Capabilities talking points (8 min)³
3. Discovery questions (5 min)¹
4. Likely-objection answers from Responsive (7 min)⁴

**Illustrative impact**
Instead of checking microsites, Drive, Responsive, and the Sellers Library separately, prep like this could go from a typical **30–45 minutes of hunting to a few minutes** — a time-savings hypothesis worth confirming in a "day in the life" blueprint, with a sharper discovery as the upside.²

When you're done, ask me to turn this into a one-page discovery brief you can bring into the room.`,

    sources: [
      {
        id: 1,
        title: "Healthcare Discovery Playbook",
        subtitle: "Google Docs · Sales Enablement",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Discovery-stage questions and industry talking points for healthcare buyers, including common pain themes and the recommended follow-up assets to send after the call.",
      },
      {
        id: 2,
        title: "Sellers Library — Discovery Content Index",
        subtitle: "Google Sheets · Sales Enablement",
        iconUrl: GSHEETS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Indexed by content type, this maps sellers to the right discovery decks, industry one-pagers, case studies, and qualification tools — the canonical source the microsites should point to.",
      },
      {
        id: 3,
        title: "Healthcare Capabilities Overview",
        subtitle: "Google Slides · Industry Marketing",
        iconUrl: GSLIDES_ICON,
        iconFallback: null,
        author: "Industry Marketing",
        excerpt:
          "Overview deck summarizing RRD's relevant healthcare capabilities and how to position them early in the buying cycle, before a formal proposal.",
      },
      {
        id: 4,
        title: "Past Healthcare Proposal Answers",
        subtitle: "Responsive · RFP / Proposal",
        iconUrl: null,
        iconFallback: RESPONSIVE_FALLBACK,
        author: "Proposal / RFP Team",
        excerpt:
          "Reusable, approved response content that helps sellers anticipate the questions healthcare prospects ask before a formal proposal is ever requested.",
      },
    ],

    followUpQuery:
      "Turn this into a one-page discovery brief I can bring into the meeting",

    chatHistory: {
      today: ["Discovery prep — healthcare prospect"],
      recent: [
        "Healthcare discovery playbook — pain themes...",
        "Capabilities overview — how to position early...",
        "Discovery questions — what to ask tomorrow...",
        "Responsive — likely prospect questions...",
        "Sellers Library — what's canonical for discovery...",
        "My opportunities by stage — what needs prep...",
      ],
    },

    showWork: {
      searchQuery:
        "healthcare discovery prep playbook capabilities discovery questions proposal answers sellers library",
      searching: [
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Healthcare Discovery Playbook...",
        },
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Sellers Library — Discovery Content Index...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Healthcare Discovery Playbook...",
        },
        {
          icon: GSLIDES_ICON,
          iconFallback: null,
          label: "Healthcare Capabilities Overview...",
        },
        {
          icon: null,
          iconFallback: RESPONSIVE_FALLBACK,
          label: "Past Healthcare Proposal Answers...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Discovery Prep Pack — Healthcare Opportunity",
        note: "Pulling stage-specific content from the microsites, Sellers Library, Drive, and Responsive into one prep pack so the seller stops digging.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 1 — Proposal & RFP Lead
   * Tonya / Kelly's world: assemble the strongest approved
   * answer content across Responsive, Drive, and the Sellers
   * Library in minutes instead of hours.
   * ═══════════════════════════════════════════════════════ */
  {
    id: "rfp-lead",
    persona: {
      title: "Proposal & RFP Lead",
      subtitle: "Manager, Proposals & Content",
    },
    greeting: "Good afternoon",
    userQuery:
      "I'm responding to an RFP for packaging and logistics services. Pull the strongest approved content across Responsive, Drive, and the Sellers Library — the best reusable answers, the supporting proof points, and the exact source documents I should use — and flag anything that's stale or missing.",

    aiResponse: `Here's the strongest approved content for the packaging and logistics RFP, assembled from across your systems.

**Top reusable answer themes**
The most reused, most recently approved answers for this kind of RFP cluster into four blocks:¹
- Packaging capabilities and service differentiators
- Logistics and supply-chain service model
- Implementation and onboarding approach
- Quality, compliance, and sustainability

**Recommended response content**
- Lead the **executive summary** with the integrated packaging-plus-logistics story — it's RRD's clearest differentiator versus point vendors.¹²
- For **differentiators**, reuse the approved language on consolidated sourcing and speed-to-shelf.¹
- For the **service model**, pull the logistics overview rather than rewriting from scratch.²

**Supporting proof points**
- Customer outcomes and operational metrics from the packaging case study collection.⁴
- Reference results you can cite directly in the response.⁴

**Best source materials to open (ranked)**
1. Approved Packaging Services Response Library (Responsive)¹
2. Logistics Solutions Overview (Slides)²
3. Sellers Library — Proposal Content by Type (Sheets)³
4. Packaging Case Study Collection (Docs)⁴

**Gaps and risks to fix before you send**
- The sustainability proof point exists only as a loose Google Doc and was never promoted into Responsive — it'll go stale. Promote it so it stays canonical.³
- Two logistics answers reference pre-consolidation branding — refresh before reuse.³

**Illustrative impact**
Everything above is *retrieved from approved sources with provenance and freshness flags* — not generated — so you stay in control. Pulling it into one place could compress content-gathering from **hours of cross-system hunting to a few minutes**, a workflow-time hypothesis to validate alongside more consistent, on-brand responses.¹

Want me to draft a first-pass executive summary and differentiators section from this content?`,

    sources: [
      {
        id: 1,
        title: "Approved Packaging Services Response Library",
        subtitle: "Responsive · RFP / Proposal",
        iconUrl: null,
        iconFallback: RESPONSIVE_FALLBACK,
        author: "Proposal / RFP Team",
        excerpt:
          "Previously approved answers covering packaging capabilities, service differentiators, and implementation language, tagged by topic and ranked by how recently they were approved and reused.",
      },
      {
        id: 2,
        title: "Logistics Solutions Overview",
        subtitle: "Google Slides · Solutions Marketing",
        iconUrl: GSLIDES_ICON,
        iconFallback: null,
        author: "Solutions Marketing",
        excerpt:
          "Customer-facing presentation with positioning, capabilities, and proof points for logistics and supply-chain opportunities — reusable directly in the service-model section of a proposal.",
      },
      {
        id: 3,
        title: "Sellers Library — Proposal Content by Type",
        subtitle: "Google Sheets · Sales Enablement",
        iconUrl: GSHEETS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Structured index of proposal assets by content type, used to find the right boilerplate, case studies, and proof documents — and to flag answers still loose in Drive that should be promoted into Responsive.",
      },
      {
        id: 4,
        title: "Packaging Case Study Collection",
        subtitle: "Google Docs · Industry Marketing",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Industry Marketing",
        excerpt:
          "Curated customer outcomes and operational results that can be cited as supporting evidence in packaging and logistics proposals.",
      },
    ],

    followUpQuery:
      "Draft a first-pass executive summary and differentiators section for this RFP",

    chatHistory: {
      today: ["RFP assembly — packaging & logistics"],
      recent: [
        "Responsive — approved packaging answers...",
        "Logistics overview — service model section...",
        "Proposal content by type — what's canonical...",
        "Case studies — proof points to cite...",
        "Stale answers — what to refresh before sending...",
        "Loose Drive docs — promote into Responsive...",
      ],
    },

    showWork: {
      searchQuery:
        "packaging logistics RFP approved answers responsive proposal content sellers library case studies proof points",
      searching: [
        {
          icon: null,
          iconFallback: RESPONSIVE_FALLBACK,
          label: "Approved Packaging Services Response Library...",
        },
        {
          icon: GSLIDES_ICON,
          iconFallback: null,
          label: "Logistics Solutions Overview...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: null,
          iconFallback: RESPONSIVE_FALLBACK,
          label: "Approved Packaging Services Response Library...",
        },
        {
          icon: GSHEETS_ICON,
          iconFallback: null,
          label: "Sellers Library — Proposal Content by Type...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Packaging Case Study Collection...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "RFP Response Pack — Packaging & Logistics",
        note: "Reconciling Responsive, Drive, and the Sellers Library into one ranked, approved answer set and flagging stale or un-promoted content.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 2 — Frontline Sales Manager
   * Stacey's coaching vision: just-in-time insight on skill
   * gaps and deal progression, assembled across Salesforce,
   * the LMS, and call transcripts before a 1:1.
   * ═══════════════════════════════════════════════════════ */
  {
    id: "sales-manager",
    persona: {
      title: "Frontline Sales Manager",
      subtitle: "Sales manager, deal coaching",
    },
    greeting: "Good afternoon",
    userQuery:
      "Two of my reps have late-stage deals that are slipping. Summarize where each deal stands, what risks you see, and what coaching I should give each rep before their next customer meeting — pull from Salesforce, the LMS, and the call transcripts so I'm not reconstructing this by hand.",

    aiResponse: `Here's a just-in-time coaching read on both at-risk deals, assembled from Salesforce, the LMS, and recent call transcripts.

**Portfolio snapshot**
- **Acme Healthcare Expansion** — greater risk. Late stage, but the next step has slipped twice and a key stakeholder hasn't been engaged.¹
- **Regional Manufacturing Renewal** — at risk on timeline, not on intent. Stalled on a single open task.²

**Deal-by-deal inspection**

*Acme Healthcare Expansion*¹⁴
- Stage hasn't advanced in 3 weeks; close date already pushed once.
- The discovery recap shows pricing came up early but was never followed up.⁴
- Coaching content on multi-threading was assigned but not completed.³

*Regional Manufacturing Renewal*²
- A single procurement approval is the blocker; everything else is ready.
- Rep hasn't logged a mutual close plan.

**Coaching recommendations**

*For the rep on Acme:*³⁴
- Multi-thread now — get to the economic buyer this week.
- Revisit the pricing thread the call surfaced before it festers.
- Ask: *"What has to be true for this to close this quarter, and who hasn't said yes yet?"*

*For the rep on Regional Manufacturing:*²
- Build a mutual close plan with the procurement milestone dated.
- Ask: *"What's the approval path, and what can we do this week to de-risk it?"*

**Suggested inspection cadence**
- Weekly: stage age, slipped next steps, and assigned-vs-completed coaching content.
- Watch: deals with no activity in 7+ days and any close date pushed more than once.

**Why this matters**
This replaces manual deal-inspection prep with a live read across opportunity context and recent deal activity — so managers coach from context and intervene earlier on stuck deals. (Illustrative; the time saved and pipeline lift are hypotheses to validate, not claimed RRD numbers.)¹²

Want me to turn this into a coaching agenda for each 1:1?`,

    sources: [
      {
        id: 1,
        title: "Opportunity — Acme Healthcare Expansion",
        subtitle: "Salesforce · Opportunity",
        iconUrl: SALESFORCE_ICON,
        iconFallback: null,
        author: "Salesforce",
        excerpt:
          "Live deal record: current stage, next step, key contacts, and recent activity. Stage age and a twice-pushed close date flag this as the higher-risk opportunity.",
      },
      {
        id: 2,
        title: "Opportunity — Regional Manufacturing Renewal",
        subtitle: "Salesforce · Opportunity",
        iconUrl: SALESFORCE_ICON,
        iconFallback: null,
        author: "Salesforce",
        excerpt:
          "Second deal record: stage status, open tasks, and timeline indicators. A single open procurement task is driving the slippage, not buyer intent.",
      },
      {
        id: 3,
        title: "Sales Coaching Framework by Stage",
        subtitle: "LMS · Sales Enablement",
        iconUrl: LMS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Manager-facing guide on how to coach reps at each sales stage, including common skill gaps and intervention prompts. Shows which coaching content was assigned versus completed.",
      },
      {
        id: 4,
        title: "Call Review — Acme Discovery Recap",
        subtitle: "Gong · Call transcript",
        iconUrl: GONG_ICON,
        iconFallback: null,
        author: "Gong",
        excerpt:
          "Call notes showing what the rep covered and missed — including an early pricing signal that was never followed up — pinpointing where manager coaching is needed.",
      },
    ],

    followUpQuery:
      "Create a coaching agenda for my 1:1 with each rep",

    chatHistory: {
      today: ["Coaching read — two slipping deals"],
      recent: [
        "Acme Healthcare — why is it stalling...",
        "Regional Manufacturing — what's the blocker...",
        "Coaching framework — skill gaps by stage...",
        "Gong recap — pricing thread to revisit...",
        "Assigned vs. completed coaching content...",
        "Deal inspection cadence — what to watch weekly...",
      ],
    },

    showWork: {
      searchQuery:
        "late stage deals slipping coaching salesforce opportunity stage risk LMS coaching framework gong call recap skill gaps",
      searching: [
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Opportunity — Acme Healthcare Expansion...",
        },
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Opportunity — Regional Manufacturing Renewal...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Opportunity — Acme Healthcare Expansion...",
        },
        {
          icon: LMS_ICON,
          iconFallback: null,
          label: "Sales Coaching Framework by Stage...",
        },
        {
          icon: GONG_ICON,
          iconFallback: null,
          label: "Call Review — Acme Discovery Recap...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Coaching Read — Two At-Risk Deals",
        note: "Correlating Salesforce stage signals, LMS coaching completion, and call transcripts into a just-in-time coaching brief per rep.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 3 — New Seller
   * The time-to-onboard story: one guided path from fragmented
   * content instead of weeks of tribal searching. Cleanest flow
   * for the ramp metric the council cares about.
   * ═══════════════════════════════════════════════════════ */
  {
    id: "new-seller",
    persona: {
      title: "New Seller",
      subtitle: "New hire, first 90 days",
    },
    greeting: "Good afternoon",
    userQuery:
      "I'm new to RRD and I have my first meeting next week with a manufacturing prospect. Give me the basics: what we sell into this segment, the key discovery questions, the best intro materials, and what I should learn first — I don't know which of the 14 microsites to even start with.",

    aiResponse: `Welcome — here's a guided starting path for your first manufacturing meeting, instead of guessing which microsite to open.

**The short version**
RRD sells into manufacturing across packaging, labels, supply-chain and logistics, and commercial print/communications. Before the first meeting, focus on the buyer's world and a strong discovery — not the full catalog.¹

**What to learn first (in order)**
1. **Manufacturing Industry Overview** — who you're selling to and what they care about.¹
2. **New Seller Onboarding Checklist** — the must-complete items for week one.²
3. **Discovery Questions by Vertical** — the approved questions for a first manufacturing conversation.³
4. **Manufacturing Starter Pack** — the indexed set of case studies and one-pagers to know cold.⁴

**First-meeting prep**
- *Intro talk track:* lead with RRD's integrated packaging + supply-chain story, not a product list.¹
- *Discovery questions:* "Where does your packaging or labeling workflow slow down today?" · "How are you balancing speed-to-shelf with consistency across SKUs?" · "Who owns the decision when you evaluate a partner?"³
- *Common buyer pains:* fragmented vendors, slow time-to-market, proving ROI across print and digital.¹

**Recommended 2-week ramp path**
- *Week 1 (required):* Industry overview, onboarding checklist, discovery questions.¹²³
- *Week 2 (deeper):* Starter-pack case studies and the capabilities you'll position most.⁴
- *Optional:* long-form background decks — searchable when you need them, not required now.⁴

**Why this matters**
This turns fragmented content across 14+ microsites into a single guided path, cutting the dependency on tribal knowledge. (Time-to-onboard is the value hypothesis to validate in a "day in the life" blueprint — productive in your first weeks, not your first quarter.)²

When you're ready, ask me to build a 2-week ramp plan from these materials.`,

    sources: [
      {
        id: 1,
        title: "Manufacturing Industry Overview for Sellers",
        subtitle: "Google Slides · Industry Marketing",
        iconUrl: GSLIDES_ICON,
        iconFallback: null,
        author: "Industry Marketing",
        excerpt:
          "Introductory, segment-specific positioning deck that helps new reps understand manufacturing buyer needs and how RRD's packaging, labels, and supply-chain offerings fit.",
      },
      {
        id: 2,
        title: "New Seller Onboarding Checklist",
        subtitle: "LMS · Sales Onboarding",
        iconUrl: LMS_ICON,
        iconFallback: null,
        author: "Sales Onboarding",
        excerpt:
          "Structured onboarding path covering must-complete training, key assets, and early-ramp milestones for the first 90 days.",
      },
      {
        id: 3,
        title: "Discovery Questions by Vertical",
        subtitle: "Google Docs · Sales Enablement",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "Starter set of approved discovery questions organized by industry and early-stage conversation type, so a new seller walks in asking the right things.",
      },
      {
        id: 4,
        title: "Sellers Library — Manufacturing Starter Pack",
        subtitle: "Internal microsite · Sellers Library",
        iconUrl: GLOBE_ICON,
        iconFallback: null,
        author: "Sales Enablement",
        excerpt:
          "One indexed entry point to the core case studies, one-pagers, and decks a new seller should learn first — replacing a hunt across the 14+ microsites.",
      },
    ],

    followUpQuery:
      "Build me a 2-week ramp plan based on these materials",

    chatHistory: {
      today: ["Ramp prep — first manufacturing meeting"],
      recent: [
        "Manufacturing overview — who I'm selling to...",
        "Onboarding checklist — week 1 must-dos...",
        "Discovery questions — manufacturing first call...",
        "Starter pack — what to learn first...",
        "Where do I even start — which microsite...",
        "2-week ramp plan — required vs optional...",
      ],
    },

    showWork: {
      searchQuery:
        "new seller manufacturing onboarding industry overview discovery questions starter pack ramp time to onboard sellers library",
      searching: [
        {
          icon: GSLIDES_ICON,
          iconFallback: null,
          label: "Manufacturing Industry Overview for Sellers...",
        },
        {
          icon: LMS_ICON,
          iconFallback: null,
          label: "New Seller Onboarding Checklist...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: GSLIDES_ICON,
          iconFallback: null,
          label: "Manufacturing Industry Overview for Sellers...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Discovery Questions by Vertical...",
        },
        {
          icon: GLOBE_ICON,
          iconFallback: null,
          label: "Sellers Library — Manufacturing Starter Pack...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Guided Ramp Path — New Seller, Manufacturing",
        note: "Turning fragmented onboarding content across 14+ microsites into a single guided path to compress time-to-onboard.",
      },
    },
  },
];
