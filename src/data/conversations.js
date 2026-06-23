const GLEAN_IMG = "https://app.glean.com/images";

const GDOCS_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.document`;
const GSLIDES_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.presentation`;
const GSHEETS_ICON = `https://app.glean.com/static/proxy/gdriveicons/32/type/application/vnd.google-apps.spreadsheet`;
const GDRIVE_ICON = `${GLEAN_IMG}/logos/gdrive3.svg`;
const SALESFORCE_ICON = `${GLEAN_IMG}/logos/salesforce.svg`;
const GLOBE_ICON = `${GLEAN_IMG}/feather/globe.svg`;

// LMS (Cornerstone) — show a lettered chip instead of a vendor logo.
const LMS_FALLBACK = { letter: "L", color: "#1C5BE0" };

const RESPONSIVE_ICON = "https://www.responsive.io/icon.svg";

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
    sourceApps: "Salesforce, Google Drive, Responsive, and the Sellers Library",
    persona: {
      title: "Account Executive",
      subtitle: "Enterprise seller, active deal cycle",
    },
    greeting: "Good afternoon",
    userQuery:
      "I have a discovery call with a healthcare prospect tomorrow. What should I review to prep, what questions should I ask, and which RRD materials are best for this stage?",

    aiResponse: `Here's your discovery prep for tomorrow's healthcare call.

The Salesforce opportunity shows this is an early-stage expansion — two contacts engaged and no proposal sent yet — so keep this discovery-led, not pricing-led.⁵

**What to review first (in priority order)**
- **Healthcare Discovery Playbook** — the pain themes and talking points that land with healthcare buyers.¹
- **Healthcare Capabilities Overview** — how to position RRD early, before a formal proposal.³
- **Reusable proposal answers** — approved language for the questions these buyers most often ask.⁴

**Questions to ask on the call**
- *"Where does your print, packaging, and compliance workflow slow you down today?"*
- *"How are regulatory and brand-compliance requirements handled across your materials?"*
- *"Who else weighs in on a partner decision, and what does a successful first project look like?"*

The Sellers Library index confirms these are the canonical discovery-stage assets for healthcare, so you're working from the current versions.²

Want me to turn this into a one-page discovery brief you can bring into the room?`,

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
        iconUrl: RESPONSIVE_ICON,
        iconFallback: null,
        author: "Proposal / RFP Team",
        excerpt:
          "Reusable, approved response content that helps sellers anticipate the questions healthcare prospects ask before a formal proposal is ever requested.",
      },
      {
        id: 5,
        title: "Opportunity — Meridian Health Expansion",
        subtitle: "Salesforce · Opportunity",
        iconUrl: SALESFORCE_ICON,
        iconFallback: null,
        author: "Salesforce",
        excerpt:
          "Live deal record for the healthcare opportunity: current stage, engaged contacts, and recent activity. Shows an early-stage expansion with two contacts engaged and no proposal sent yet.",
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
        "healthcare discovery prep playbook capabilities discovery questions proposal answers sellers library salesforce opportunity stage",
      searching: [
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Opportunity — Meridian Health Expansion...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Healthcare Discovery Playbook...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Opportunity — Meridian Health Expansion...",
        },
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
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Discovery Prep Pack — Healthcare Opportunity",
        note: "Grounding stage-specific content from the Sellers Library, Drive, and Responsive in the live Salesforce deal context.",
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
    sourceApps: "Salesforce, Responsive, Google Drive, and the Sellers Library",
    persona: {
      title: "Proposal & RFP Lead",
      subtitle: "Manager, Proposals & Content",
    },
    greeting: "Good afternoon",
    userQuery:
      "I'm responding to an RFP for packaging and logistics services. What's the strongest approved content I can reuse — the best answers, proof points, and source documents — and is anything stale or missing?",

    aiResponse: `Here's the strongest approved content for the packaging & logistics RFP.

**Best content to reuse (ranked)**
1. **Approved Packaging Services Response Library** — packaging capabilities and differentiators.¹
2. **Logistics Solutions Overview** — pull the service-model section as-is rather than rewriting.²
3. **Sellers Library — Proposal Content by Type** — the canonical index of what's approved to reuse.³
4. **Packaging Case Study Collection** — outcomes and metrics to cite as proof.⁴

**How to frame it**
Lead the executive summary with the integrated packaging-plus-logistics story — RRD's clearest differentiator versus point vendors.¹²

**Tailor it to the account**
The Salesforce opportunity notes the prospect ranked sustainability and speed-to-shelf as their top evaluation criteria — lead with those themes, which makes promoting the sustainability proof point below even more important.⁵

**Flag before you send**
- The sustainability proof point exists only as a loose Google Doc and was never promoted into Responsive — promote it so it stays canonical.³
- Two logistics answers reference pre-consolidation branding — refresh before reuse.³

Want a first-pass executive summary and differentiators section drafted from this?`,

    sources: [
      {
        id: 1,
        title: "Approved Packaging Services Response Library",
        subtitle: "Responsive · RFP / Proposal",
        iconUrl: RESPONSIVE_ICON,
        iconFallback: null,
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
      {
        id: 5,
        title: "Opportunity — Crestline Foods Packaging RFP",
        subtitle: "Salesforce · Opportunity",
        iconUrl: SALESFORCE_ICON,
        iconFallback: null,
        author: "Salesforce",
        excerpt:
          "Live deal record for the RFP: scope, incumbent vendor, key contacts, and the evaluation criteria the prospect shared — with sustainability and speed-to-shelf ranked as top priorities.",
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
        "packaging logistics RFP approved answers responsive proposal content sellers library case studies proof points salesforce opportunity evaluation criteria",
      searching: [
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Opportunity — Crestline Foods Packaging RFP...",
        },
        {
          icon: RESPONSIVE_ICON,
          iconFallback: null,
          label: "Approved Packaging Services Response Library...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: SALESFORCE_ICON,
          iconFallback: null,
          label: "Opportunity — Crestline Foods Packaging RFP...",
        },
        {
          icon: RESPONSIVE_ICON,
          iconFallback: null,
          label: "Approved Packaging Services Response Library...",
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
        note: "Matching approved content from Responsive, Drive, and the Sellers Library to the prospect's evaluation criteria in the Salesforce opportunity, and flagging stale content.",
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
    sourceApps: "Salesforce, your LMS, and call recaps in Drive",
    persona: {
      title: "Frontline Sales Manager",
      subtitle: "Sales manager, deal coaching",
    },
    greeting: "Good afternoon",
    userQuery:
      "Two of my reps have late-stage deals that are slipping. Where does each deal stand, what risks do you see, and what coaching should I give each rep before their next customer meeting?",

    aiResponse: `Here's where both at-risk deals stand and how to coach each rep, pulled from Salesforce, the LMS, and recent call recaps.

**Where each deal stands**
- **Acme Healthcare Expansion** — *higher risk.* Stage hasn't moved in 3 weeks, close date already pushed, and a key stakeholder is still unengaged. Pricing came up early on the call but was never followed up.¹⁴
- **Regional Manufacturing Renewal** — *at risk on timeline, not intent.* One open procurement approval is the only blocker; no mutual close plan logged yet.²

**Coaching before the next meeting**
- *Acme rep:* multi-thread to the economic buyer this week and reopen the pricing thread — the multi-threading module was assigned but never completed.³⁴ Ask: *"Who hasn't said yes yet, and what has to be true to close this quarter?"*
- *Regional rep:* build a mutual close plan with the procurement milestone dated.² Ask: *"What's the approval path, and how do we de-risk it this week?"*

Want this as a coaching agenda for each 1:1?`,

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
        iconUrl: null,
        iconFallback: LMS_FALLBACK,
        author: "Sales Enablement",
        excerpt:
          "Manager-facing guide on how to coach reps at each sales stage, including common skill gaps and intervention prompts. Shows which coaching content was assigned versus completed.",
      },
      {
        id: 4,
        title: "Call Recap — Acme Discovery",
        subtitle: "Google Docs · Call notes",
        iconUrl: GDOCS_ICON,
        iconFallback: null,
        author: "Account Team",
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
        "Call recap — pricing thread to revisit...",
        "Assigned vs. completed coaching content...",
        "Deal inspection cadence — what to watch weekly...",
      ],
    },

    showWork: {
      searchQuery:
        "late stage deals slipping coaching salesforce opportunity stage risk LMS coaching framework call recap notes skill gaps",
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
          icon: null,
          iconFallback: LMS_FALLBACK,
          label: "Sales Coaching Framework by Stage...",
        },
        {
          icon: GDOCS_ICON,
          iconFallback: null,
          label: "Call Recap — Acme Discovery...",
        },
      ],
      synthesizing: {
        icon: GDOCS_ICON,
        iconFallback: null,
        label: "Coaching Read — Two At-Risk Deals",
        note: "Correlating Salesforce stage signals, LMS coaching completion, and call recaps into a just-in-time coaching brief per rep.",
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
    sourceApps: "Google Drive, your LMS, and the Sellers Library",
    persona: {
      title: "New Seller",
      subtitle: "New hire, first 90 days",
    },
    greeting: "Good afternoon",
    userQuery:
      "I'm new to RRD and I have my first meeting next week with a manufacturing prospect. What do we sell into this segment, what are the key discovery questions, and what should I review first?",

    aiResponse: `Welcome to RRD — here's a starting path for your first manufacturing meeting.

RRD sells into manufacturing across packaging, labels, supply-chain and logistics, and commercial print. For a first meeting, focus on the buyer's world and a strong discovery — not the full catalog.¹

**What to learn first (in order)**
1. **Manufacturing Industry Overview** — who you're selling to and what they care about.¹
2. **New Seller Onboarding Checklist** — the week-one must-dos.²
3. **Discovery Questions by Vertical** — approved questions for a first conversation.³
4. **Manufacturing Starter Pack** — the case studies and one-pagers to know cold.⁴

**For the meeting**
- *Talk track:* lead with RRD's integrated packaging + supply-chain story, not a product list.¹
- *Ask:* "Where does your packaging or labeling workflow slow down?" · "How do you balance speed-to-shelf with consistency across SKUs?" · "Who owns the partner decision?"³

Want a 2-week ramp plan built from these materials?`,

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
        iconUrl: null,
        iconFallback: LMS_FALLBACK,
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
          "One indexed entry point to the core case studies, one-pagers, and decks a new seller should learn first.",
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
          icon: null,
          iconFallback: LMS_FALLBACK,
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
        note: "Assembling the manufacturing intro materials, onboarding checklist, and discovery questions into one starting path.",
      },
    },
  },
];
