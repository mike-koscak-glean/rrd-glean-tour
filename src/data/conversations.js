const GLEAN_IMG = "https://app.glean.com/images";

const CONFLUENCE_ICON = `${GLEAN_IMG}/logos/confluence.svg`;
const SHAREPOINT_ICON = `${GLEAN_IMG}/logos/sharepoint.svg`;
const JIRA_ICON = `${GLEAN_IMG}/logos/jira.svg`;
const OUTLOOK_ICON = `${GLEAN_IMG}/logos/outlook.svg`;

const REMEDY_FALLBACK = { letter: "R", color: "#B22222" };
const WORKDAY_FALLBACK = { letter: "W", color: "#0070D1" };
const GONG_FALLBACK = { letter: "G", color: "#9B51E0" };
const LMS_FALLBACK = { letter: "L", color: "#1A6EAD" };
const PDF_FALLBACK = { letter: "P", color: "#D93025" };
const GRC_FALLBACK = { letter: "G", color: "#CC0000" };

export const flows = [
  /* ═══════════════════════════════════════════════════════
   * FLOW 0 — AI Platform & Enterprise IT
   * ═══════════════════════════════════════════════════════ */
  {
    id: "ai-platform",
    persona: {
      title: "AI Platform & Enterprise IT",
      subtitle: "OneTru AI Assist leadership (Bharat & Jonathan)",
    },
    greeting: "Good afternoon, Jonathan",
    userQuery:
      "Give me a concrete plan for onboarding Workday, Coupa, Jira, Confluence, Remedy, Salesforce, and Outlook content into OneTru AI Assist using Glean as the connector and search layer. Summarize what Glean provides out-of-the-box vs. what we'd still have to build, how permissions and data residency would be handled, and a realistic 60–90 day rollout sequence.",

    aiResponse: `Here's a proposed **60–90 day onboarding plan** for Workday, Coupa, Jira, Confluence, Remedy, Salesforce, and Outlook using Glean.

**1. What Glean provides out-of-the-box**
- Native connectors for Workday, Coupa, Jira, Confluence, Salesforce, and Microsoft 365 (Outlook/SharePoint/Teams) with delta sync, full-text indexing, and permission mirroring.¹²
- Support for TU's existing SSO and group-based entitlements, so OneTru AI Assist only surfaces content users can already see in each source.¹
- Search and chat interface that can be embedded into the OneTru AI Assist UI or accessed via Glean's own web app.⁴

**2. Where you'd still build custom pieces**
- **Remedy / ITSM & asset tools**: Glean can index via API, but you'll likely want a thin TU-owned adapter that normalizes ticket and CMDB schemas into your enterprise data platform.²
- **Data platform abstractions**: to keep OneTru AI Assist vendor-agnostic, you'll continue to expose a unified data access layer; Glean's connectors plug into that where possible rather than duplicating pipelines.¹
- **Custom agents**: e.g., "Incident Triage Assistant" or "Connector Health Monitor" built on top of Glean's APIs but branded and orchestrated from your existing AI gateway.³

**3. Security and data residency**
- Glean honors row- and field-level permissions from each source system; its index never exposes content to users who don't already have access.¹²
- Data remains in regional data centers aligned with TU policy, with all content encrypted in transit and at rest. For high-sensitivity systems (e.g., certain finance or credit bureaus), you can limit Glean to metadata-only or specific fields.
- All AI actions are fully auditable: you can log prompts, source docs, and outputs into your existing security monitoring stack.⁴

**4. 60–90 day rollout sequence**

| Week | Milestone |
|------|-----------|
| 1–2 | Stand up Glean in a non-production tenant tied to TU SSO. Connect Confluence, Jira, and SharePoint for a small IT / AI platform pilot group. |
| 3–4 | Add Workday, Coupa, and Salesforce; validate permission behavior with HR, Procurement, and RevOps. Run side-by-side comparisons with your Gemini pilot.³ |
| 5–8 | Bring in Remedy / ITSM data via the adapter approach and Outlook for email context. Launch a limited OneTru AI Assist + Glean pilot for IT Ops and Security.² |
| 9–12 | Expand to additional critical systems on your 45-source list. Finalize runbooks, SLAs, and risk controls for a production-grade rollout under the OneTru AI Assist banner. |

If you'd like, I can turn this into a CIO-level one-pager or a detailed workback plan for your architecture review.`,

    sources: [
      {
        id: 1,
        title: "Enterprise AI Platform — Architecture Overview",
        subtitle: "Confluence · Enterprise Architecture",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "Bharat Kandanoor",
        excerpt:
          "OneTru AI Assist is designed as a vendor-agnostic AI layer. Glean connectors plug into the unified data access layer rather than duplicating pipelines. SSO and group-based entitlements are honored across all indexed source systems.",
      },
      {
        id: 2,
        title: "OneTru AI Assist — Source Systems Inventory",
        subtitle: "Confluence · AI Platform Team",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "Jonathan Soto",
        excerpt:
          "45+ enterprise systems scoped for OneTru AI Assist: Workday, Coupa, Jira, Confluence, Remedy, Salesforce, Outlook/SharePoint/Teams. Remedy requires a custom TU-owned adapter for CMDB schema normalization. Permissions validation required with HR, Procurement, and RevOps before production rollout.",
      },
      {
        id: 3,
        title: "Gemini Pilot — Lessons Learned",
        subtitle: "SharePoint · Enterprise IT",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "Enterprise IT",
        excerpt:
          "Gemini pilot confirmed value of side-by-side comparison approach for AI vendor evaluation. Recommended running Glean connector validation in weeks 3–4 against the same test queries used in Gemini pilot to validate answer quality and coverage gap.",
      },
      {
        id: 4,
        title: "Glean Connector Catalog — TU Evaluation",
        subtitle: "PDF · Glean Evaluation Packet",
        iconUrl: null,
        iconFallback: PDF_FALLBACK,
        author: "Glean Solutions Engineering",
        excerpt:
          "Native connectors confirmed for: Workday, Coupa, Jira, Confluence, Salesforce, Outlook, SharePoint, Teams. All support delta sync, full-text indexing, and permission mirroring. Audit logging of prompts, source docs, and outputs supported for SIEM integration.",
      },
    ],

    followUpQuery:
      "Turn this into a CIO-level one-pager for the architecture review",

    chatHistory: {
      today: ["OneTru AI Assist — Data Onboarding Plan..."],
      recent: [
        "45+ Source Inventory — Enterprise Apps...",
        "Gemini Pilot — Lessons Learned...",
        "Build vs Buy — Connector Analysis...",
        "OneTru AI Assist Risk Register...",
        "Executive AI Readout — CIO Prep...",
        "TU Data Platform Reference Architecture...",
      ],
    },

    showWork: {
      searchQuery:
        "oneTru AI Assist connector strategy workday coupa jira confluence remedy salesforce outlook rollout",
      searching: [
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Enterprise AI Platform — Architecture Overview...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "OneTru AI Assist — Source Systems Inventory...",
        },
        { icon: null, iconFallback: null, label: "+8 more" },
      ],
      reading: [
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "OneTru AI Assist — Source Systems Inventory...",
        },
        {
          icon: null,
          iconFallback: PDF_FALLBACK,
          label: "Glean Connector Catalog — TU Evaluation...",
        },
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "Gemini Pilot — Lessons Learned...",
        },
      ],
      synthesizing: {
        icon: CONFLUENCE_ICON,
        iconFallback: null,
        label: "OneTru AI Assist × Glean — Data Onboarding Plan",
        note: "Cross-referencing 5 primary sources across Confluence, SharePoint, and Glean docs to propose a phased connector rollout aligned to OneTru AI Assist.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 1 — IT Ops & Service Reliability
   * ═══════════════════════════════════════════════════════ */
  {
    id: "itops",
    persona: {
      title: "IT Ops & Service Reliability",
      subtitle: "IT Ops / Service Desk lead",
    },
    greeting: "Good afternoon",
    userQuery:
      "A P1 incident has been raised for high latency on our US payment APIs. Pull a unified view that summarizes current impact and affected services, related change tickets or recent deployments, and recommended triage and escalation steps for the on-call team.",

    aiResponse: `Here's a **unified P1 view** for the US payment API latency incident.

**1. Current impact**
- Remedy ticket INC‑45821 reports p95 latency > 3 seconds and sporadic timeouts for the /authorize and /capture endpoints in the US region.¹
- Monitoring data in the linked dashboard shows impact starting at 10:42 CT, primarily affecting card and loan origination flows for select partners.⁴
- No hard errors yet, but SLO burn rate indicates potential SLA breach within 45–60 minutes if unresolved.¹

**2. Related changes / potential causes**
- Linked change ticket CHG‑2379 deployed Payment Gateway v4.3 to US at 09:55 CT, including:²
  - New fraud‑scoring callout to an external service.
  - Configuration updates to retry logic on downstream credit services.
- Known Issues doc flags a prior pattern where misconfigured timeouts on the external fraud service caused similar latency spikes under load.³

**3. Recommended triage steps (from runbook)**

1. **Validate scope**
   - Confirm whether EU/APAC regions are unaffected.
   - Check if non-payment APIs on the same cluster show similar symptoms.³

2. **Quick mitigations**
   - If error rate remains low but latency is high, temporarily disable the new fraud callout via feature flag (see "v4.3 rollout" section of the runbook).²
   - If timeouts start to spike, follow "rollback to v4.2" procedure in CHG‑2379.

3. **Communication**
   - Notify On‑Call Incident Commander and update the #it‑incidents channel with the current status and mitigation path.³
   - If rollback is initiated, trigger the standard customer comms template for degraded performance (linked in the runbook).

**4. Escalation path**
- If latency remains elevated 15 minutes after disabling the fraud callout, escalate to:
  - Payments SRE lead on call.
  - Fraud Services owner (for external dependency review).
  - OneTru AI Assist team only if the issue appears to be query-routing or agent related.¹⁴

I can also draft the incident timeline and PIR outline once the incident is resolved.`,

    sources: [
      {
        id: 1,
        title: "INC‑45821 — Payment API Latency (US)",
        subtitle: "Remedy · IT Ops",
        iconUrl: null,
        iconFallback: REMEDY_FALLBACK,
        author: "IT Ops On-Call",
        excerpt:
          "INC-45821: P1 — p95 latency > 3s on /authorize and /capture endpoints, US region. Impact start: 10:42 CT. Card and loan origination flows affected for select partners. SLO burn rate indicates potential breach within 45–60 min. No hard errors reported yet.",
      },
      {
        id: 2,
        title: "CHG‑2379 — Payment Gateway v4.3 Deployment",
        subtitle: "Jira · Engineering",
        iconUrl: JIRA_ICON,
        iconFallback: null,
        author: "Payments Engineering",
        excerpt:
          "CHG-2379 deployed Payment Gateway v4.3 to US at 09:55 CT. Changes include: new fraud-scoring callout to external service, retry logic config updates on downstream credit services. Rollback procedure to v4.2 documented in change ticket.",
      },
      {
        id: 3,
        title: "API Latency Runbook — Payments",
        subtitle: "Confluence · SRE",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "SRE Team",
        excerpt:
          "Triage sequence for payment API latency: (1) confirm regional scope, (2) disable fraud callout via feature flag if error rate low, (3) initiate v4.x rollback if timeouts spike. Notify #it-incidents channel and trigger customer comms template if rollback initiated.",
      },
      {
        id: 4,
        title: "US Region Service Map",
        subtitle: "SharePoint · Architecture",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "Platform Architecture",
        excerpt:
          "US region service topology for payment cluster. Payment Gateway fronts /authorize and /capture; downstream dependencies include fraud service (external) and credit bureau adapters. Escalation contacts: Payments SRE lead, Fraud Services owner, OneTru AI Assist team for agent-routing issues.",
      },
    ],

    followUpQuery:
      "Draft the incident timeline and PIR outline for INC‑45821",

    chatHistory: {
      today: ["P1 Incident — Payment API Latency (US Region)..."],
      recent: [
        "Incident Runbook — Latency / Timeouts...",
        "Change Calendar — November Releases...",
        "Remedy Queue — Open Sev 1–2 Tickets...",
        "Asset CMDB — US Region Services...",
        "Known Issues — OneTru AI Assist Integrations...",
        "Post-Incident Review — October Outage...",
      ],
    },

    showWork: {
      searchQuery:
        "P1 payment api latency US region remedy incident jira change deployment known issues",
      searching: [
        {
          icon: null,
          iconFallback: REMEDY_FALLBACK,
          label: "Remedy Ticket — INC-45821 (Payment API Latency — US)...",
        },
        {
          icon: JIRA_ICON,
          iconFallback: null,
          label: "Jira Change — CHG-2379 Payment Gateway v4.3...",
        },
        { icon: null, iconFallback: null, label: "+7 more" },
      ],
      reading: [
        {
          icon: null,
          iconFallback: REMEDY_FALLBACK,
          label: "Remedy Ticket — INC-45821...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "API Latency Runbook — Payments...",
        },
        {
          icon: JIRA_ICON,
          iconFallback: null,
          label: "Jira Change — CHG-2379...",
        },
      ],
      synthesizing: {
        icon: CONFLUENCE_ICON,
        iconFallback: null,
        label: "P1 Incident Summary — Payment API Latency",
        note: "Cross-referencing 4 primary sources across Remedy, Jira, Confluence, and SharePoint to generate a unified P1 incident view for the on-call team.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 2 — Security, Risk & Compliance
   * ═══════════════════════════════════════════════════════ */
  {
    id: "security",
    persona: {
      title: "Security, Risk & Compliance",
      subtitle: "Security Strategy, Planning & Transformation",
    },
    greeting: "Good afternoon, Laura",
    userQuery:
      "Prepare a concise briefing on our current controls for Generative AI & OneTru AI Assist access, sensitive data classification (PCI, consumer credit, HR), and third-party AI vendors like Glean. Highlight any open high-severity gaps from the last quarter and suggest 3 concrete actions for the next AI Governance Steering Committee.",

    aiResponse: `Here's a **briefing on current AI-related controls and gaps**.

**1. Generative AI & OneTru AI Assist access**
- OneTru AI Assist is limited to employees in Enterprise, HR, and IT Ops for the current pilot, with access gated via SSO and group membership.¹
- Prompts and responses are logged for audit, but logs are stored separately from application data with a 90-day retention policy.⁴
- External LLM providers (e.g., Gemini) are configured to exclude training on TU data and are accessed only via approved gateways.¹

**2. Data classification & scope**
- Current pilot explicitly excludes PCI and consumer credit file content, focusing instead on:²
  - Enterprise tools (Jira, Confluence, Workday, Coupa, Remedy, Salesforce).
  - Internal policies, architecture docs, and runbooks.
- HR data in Workday is accessible only at an aggregated or redacted level per the classification policy.²

**3. Third-party AI vendors (Glean)**
- Security review for Glean notes:³
  - SOC 2 type controls, encryption in transit and at rest, SSO integration.
  - Permission mirroring for each source system, reducing risk of oversharing.
  - Option for regional data hosting aligned with TU's data residency requirements.
- Open questions include:
  - Finalizing data residency mapping for EU and India content.³
  - Confirming how access logs from Glean will be fed into TU's SIEM.

**4. Open high-severity gaps (last quarter)**
- Incomplete data classification tags on several legacy repositories that OneTru AI Assist may ingest in future phases.²⁴
- Lack of a formal AI usage standard for business teams (shadow pilots and ad-hoc tools).¹
- Need for centralized incident handling for AI-related data exposure events.⁴

**5. Recommended actions for the next Steering Committee**
1. **Approve a phased expansion** of OneTru AI Assist + Glean into additional systems only once classification tags reach >95% coverage on targeted repositories.²
2. **Endorse a TU-wide AI Acceptable Use Policy**, with explicit guidance on internal vs. external tools and approved patterns for customer-facing use.¹
3. **Require all approved AI vendors** (including Glean) to stream access logs into the central SIEM and define standard detection rules for anomalous access.³

I can also convert this into a 2-slide summary for the Steering Committee deck.`,

    sources: [
      {
        id: 1,
        title: "AI Risk Assessment — OneTru AI Assist",
        subtitle: "SharePoint · Security Strategy",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "Laura Delaney",
        excerpt:
          "OneTru AI Assist pilot access gated to Enterprise, HR, and IT Ops via SSO. External LLMs (Gemini) configured to exclude TU data from training. Lack of formal AI Acceptable Use Policy identified as high-severity gap — shadow pilots and ad-hoc tools proliferating across business teams.",
      },
      {
        id: 2,
        title: "Data Classification & Handling Policy v3.2",
        subtitle: "Confluence · InfoSec",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "InfoSec",
        excerpt:
          "PCI and consumer credit file content explicitly excluded from current AI pilot scope. HR data accessible at aggregated/redacted level only. Incomplete classification tags on legacy repositories flagged as high-severity gap — blocks safe expansion of OneTru AI Assist to additional source systems.",
      },
      {
        id: 3,
        title: "Vendor Security Review — Glean",
        subtitle: "SharePoint · Vendor Risk",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "Vendor Risk Management",
        excerpt:
          "Glean review confirmed: SOC 2 type controls, encryption in transit/at rest, SSO integration, permission mirroring per source. Open items: EU and India data residency mapping not finalized; access log streaming into TU SIEM not yet configured. Regional data hosting option available per TU residency requirements.",
      },
      {
        id: 4,
        title: "Security Exceptions — Q4 2025",
        subtitle: "GRC · Risk & Compliance",
        iconUrl: null,
        iconFallback: GRC_FALLBACK,
        author: "Risk & Compliance",
        excerpt:
          "Q4 exceptions include: 90-day audit log retention for AI prompts/responses stored outside standard data warehouse. No centralized incident response procedure for AI-related data exposure events. Both flagged as high-severity requiring Steering Committee action in Q1.",
      },
    ],

    followUpQuery:
      "Convert this into a 2-slide summary for the Steering Committee deck",

    chatHistory: {
      today: ["GenAI & OneTru AI Assist — Control Overview..."],
      recent: [
        "AI Risk Assessment — Draft...",
        "Data Classification Policy — Updated...",
        "Vendor Evaluation — Glean vs Others...",
        "PCI / Consumer Data Obligations Matrix...",
        "Security Exceptions — Q4 Review...",
        "Steering Committee Deck — AI & Data Governance...",
      ],
    },

    showWork: {
      searchQuery:
        "AI risk assessment oneTru AI Assist data classification PCI consumer credit HR vendor evaluation Glean exceptions Q4",
      searching: [
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "AI Risk Assessment — OneTru AI Assist...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Data Classification & Handling Policy v3.2...",
        },
        { icon: null, iconFallback: null, label: "+6 more" },
      ],
      reading: [
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "AI Risk Assessment — OneTru AI Assist...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Data Classification & Handling Policy v3.2...",
        },
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "Vendor Security Review — Glean...",
        },
      ],
      synthesizing: {
        icon: CONFLUENCE_ICON,
        iconFallback: null,
        label: "GenAI & OneTru AI Assist — Control Overview",
        note: "Cross-referencing 4 primary sources across SharePoint, Confluence, and GRC/Jira to summarize AI controls and open risks.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 3 — Solutions Consulting & Enablement
   * ═══════════════════════════════════════════════════════ */
  {
    id: "enablement",
    persona: {
      title: "Solutions Consulting & Enablement",
      subtitle: "TransUnion Commercial University / SC CoE",
    },
    greeting: "Good afternoon, Elizabeth",
    userQuery:
      "I'm onboarding a new solutions consultant supporting banking and lending. Build a 30–60–90 day ramp plan that combines Commercial University training modules, OneTru AI Assist use cases and internal playbooks, and 3–5 must-listen Gong calls and example proposals.",

    aiResponse: `Here's a **30–60–90 day ramp plan** for a new banking solutions consultant.

**1. Days 0–30 — Foundations**
- **Commercial University**
  - Complete core SC curriculum: TU value story, data products, industry overview.¹
  - Pass required assessments on data privacy, compliance, and "Information for Good" positioning.
- **Product & AI**
  - Self-guided modules on credit, fraud, and identity solutions, plus an intro to OneTru AI Assist and how SCs are expected to use it in discovery and demos.²
- **Call listening (Gong)**
  - Listen to 3 curated banking AI calls, focusing on how SCs frame TU's data advantage and how they explain OneTru AI Assist and AI governance.⁴
  - Capture 3–5 talk tracks and objections in a personal playbook.

**2. Days 31–60 — Applied Practice**
- **Shadowing & roleplays**
  - Shadow 4–6 live customer calls with a senior SC in banking / lending.²
  - Run two internal dry-runs of a OneTru AI Assist-enabled demo using this same interactive site pattern.
- **Content & proposals**
  - Review standard RFP responses and proposal templates for banking.³
  - Use Glean to build a customer-specific "call brief" for two target accounts, pulling in prior calls, proposals, and competitive intel.⁴

**3. Days 61–90 — Ownership**
- **Own portions of live calls**
  - Lead discovery for 3–5 banking accounts under a senior SC's supervision, using OneTru AI Assist to prepare and follow up.²
- **Personalized assets**
  - Build a reusable demo script and OneTru AI Assist agent configuration tailored to a priority segment (e.g., regional banks vs. fintech lenders).¹²
- **Certification**
  - Complete an internal "Banking SC Certification," including:
    - Delivering a full end-to-end demo.³
    - Handling security and AI governance questions confidently.

| Phase | Key Milestones | Gong / Proposal Resources |
|-------|---------------|--------------------------|
| Days 0–30 | Core curriculum, AI intro modules | 3 banking AI call recordings⁴ |
| Days 31–60 | Shadow calls, proposal review | 2 target-account call briefs via Glean |
| Days 61–90 | Lead discovery, Banking SC Cert | Reusable demo script + agent config |

I can also turn this into a checklist view for your LMS or a manager-facing tracker.`,

    sources: [
      {
        id: 1,
        title: "TransUnion Commercial University — SC Path",
        subtitle: "LMS · TU Commercial University",
        iconUrl: null,
        iconFallback: LMS_FALLBACK,
        author: "Elizabeth Isphording",
        excerpt:
          "Core SC curriculum path: TU value story, data products, industry overview, compliance assessments (data privacy, 'Information for Good'). Required certifications include Banking SC Certification covering end-to-end demo delivery and security/AI governance Q&A.",
      },
      {
        id: 2,
        title: "OneTru AI Assist — GTM Playbook",
        subtitle: "Confluence · Solutions Enablement",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "Corinne Davis",
        excerpt:
          "SCs expected to position OneTru AI Assist in discovery and demo stages. Recommended approach: self-guided product modules on credit, fraud, and identity, followed by 4–6 shadowed calls and two internal AI-demo dry-runs before leading live accounts. Banking SC Certification covers end-to-end demo and AI governance handling.",
      },
      {
        id: 3,
        title: "SC Onboarding — Banking Role Guide",
        subtitle: "SharePoint · SC CoE",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "SC CoE",
        excerpt:
          "Standard RFP response and proposal templates for banking and lending vertical. Competitive intel on Experian & Equifax positioning. Banking SC Certification requirements: full end-to-end demo delivery, handling AI governance and data residency objections, and completion of Commercial University core path.",
      },
      {
        id: 4,
        title: "Gong Playlist — AI & Data Solutions (Banking)",
        subtitle: "Gong · Solutions Consulting",
        iconUrl: null,
        iconFallback: GONG_FALLBACK,
        author: "Solutions Consulting",
        excerpt:
          "Curated playlist of top banking AI calls: 3 recordings focused on TU data advantage framing and OneTru AI Assist positioning. Recommended for Days 0–30 listening. Use Glean to build customer-specific call briefs by pulling prior calls, proposals, and competitive intel for target accounts in Days 31–60.",
      },
    ],

    followUpQuery:
      "Turn this into a checklist view for the LMS or a manager-facing tracker",

    chatHistory: {
      today: ["Ramp Plan — New Solutions Consultant (Banking)..."],
      recent: [
        "OneTru AI Assist — SC Enablement Plan...",
        "TU Commercial University — Core Curriculum...",
        "Banking Use-Case Playbooks...",
        "RFP / Proposal Library — Financial Services...",
        "Gong Library — Top SC Calls (AI & Data)...",
        "Competitive Intel — Experian & Equifax...",
      ],
    },

    showWork: {
      searchQuery:
        "solutions consultant ramp plan banking lending commercial university curriculum ai assist playbooks gong proposals",
      searching: [
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "SC Onboarding — Role Guide (Banking)...",
        },
        {
          icon: null,
          iconFallback: LMS_FALLBACK,
          label: "TransUnion Commercial University — Core SC Path...",
        },
        { icon: null, iconFallback: null, label: "+6 more" },
      ],
      reading: [
        {
          icon: null,
          iconFallback: LMS_FALLBACK,
          label: "TransUnion Commercial University — Core SC Path...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "OneTru AI Assist — GTM Playbook...",
        },
        {
          icon: null,
          iconFallback: GONG_FALLBACK,
          label: "Gong Playlist — AI & Data Solutions (Banking)...",
        },
      ],
      synthesizing: {
        icon: CONFLUENCE_ICON,
        iconFallback: null,
        label: "90-Day Ramp Plan — Banking Solutions Consultant",
        note: "Cross-referencing 4 primary sources across LMS, SharePoint, Gong, and Confluence to generate a 30–60–90 ramp plan.",
      },
    },
  },
];
