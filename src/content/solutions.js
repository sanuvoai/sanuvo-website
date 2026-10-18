// Single source of truth for the eight solution areas. Drives the nav menu, home grid,
// solutions index, solution pages, footer and page metadata.
//
// Copy rules:
// - `scope` items marked via: 'platform' must describe what the platform does today.
//   Anything else is via: 'implementation' and is described as delivered through a
//   scoped engagement, never as a ready-made feature.
// - `offering` is 'platform' when the solution's core workflow runs on the platform,
//   'implementation' when the solution as a whole is delivered through scoped work.
// - `preview` is 'product' for an illustration of platform functionality, 'concept'
//   for an illustration of what an implementation could deliver.
// - `conceptVisual` adds a further implementation-concept visual to the scope section;
//   `controlPath` adds the journal entry control-path timeline.
// - Never name specific ERPs beyond the supported file formats, certifications,
//   customer results, or timelines.

export const SOLUTIONS = [
  {
    slug: 'journal-entry-ops',
    name: 'Journal Entry Ops',
    icon: 'journal',
    offering: 'platform',
    preview: 'product',
    tagline: 'Prepare, approve, and export journal entries through one controlled workflow, with each posting confirmed by its ERP reference.',
    headline: 'Journal entries, from preparation to confirmed posting',
    intro: 'Prepare, approve, and hand off journal entries through one controlled workflow, configured around your entities, approval tiers, and export requirements.',
    problems: [
      'Entries are prepared in one file, approved in an email thread, and re-keyed for the ledger.',
      'Nobody has a single view of what is drafted, in review, approved, or posted.',
      'Support and approval history are hard to find when someone asks for them later.',
    ],
    scope: [
      { via: 'platform', title: 'Preparation and validation', desc: 'Prepare entries in a consistent structure. An entry that does not balance cannot be submitted.' },
      { via: 'platform', title: 'Recurring journals',         desc: 'Generate each period\'s recurring entries from maintained templates.' },
      { via: 'platform', title: 'Approval tiers',             desc: 'Route each entry to the approvers its tier requires, and record every decision.' },
      { via: 'platform', title: 'Segregation of duties',      desc: 'Preparers cannot approve their own entries, and approvers cannot package what they approved.' },
      { via: 'platform', title: 'Required support',           desc: 'Reference the supporting documents each journal type requires before it is submitted.' },
      { via: 'platform', title: 'ERP-ready exports',          desc: 'Export approved entries as a QuickBooks Desktop IIF file or an ERP-neutral CSV, frozen once generated.' },
      { via: 'platform', title: 'Posting confirmation',       desc: 'Entries are marked posted only when your team records the ERP reference.' },
    ],
    note: 'Exports are file-based. The CSV layout is ERP-neutral and is not certified for any specific ERP; other import formats are mapped and validated during implementation.',
    outcomes: [
      { title: 'Financial control', desc: 'Entries pass through a defined review before they leave for the ledger.' },
      { title: 'Less manual work',  desc: 'Less re-keying and chasing between preparation, approval, and posting.' },
      { title: 'Visibility',        desc: 'One queue shows what is open, who owns it, and what is waiting for the ERP.' },
    ],
    related: ['close-ops', 'audit-controls', 'reconciliation-ops'],
    controlPath: true,
  },
  {
    slug: 'reconciliation-ops',
    name: 'Reconciliation Ops',
    icon: 'match',
    offering: 'platform',
    preview: 'product',
    tagline: 'Run reconciliations as controlled close tasks, with assigned owners, independent review, and exception tracking.',
    headline: 'Reconciliations as controlled close tasks',
    intro: 'Give every reconciliation an owner and an independent reviewer, require the supporting evidence before sign-off, and track differences as exceptions until they are resolved.',
    problems: [
      'Reconciliation status lives in a spreadsheet that only one person maintains.',
      'Reviews happen by email, with no clear record of who signed off and when.',
      'Differences carry forward from period to period without an owner or a resolution.',
    ],
    scope: [
      { via: 'platform',       title: 'Assigned owners',        desc: 'Every reconciliation task has a named owner, an entity, and a due date.' },
      { via: 'platform',       title: 'Independent review',     desc: 'A different person reviews and signs off. Preparers cannot review their own work.' },
      { via: 'platform',       title: 'Evidence references',    desc: 'The required supporting evidence is referenced before a task can be submitted.' },
      { via: 'platform',       title: 'Exception tracking',     desc: 'Differences are raised as exceptions, owned, and followed to resolution.' },
      { via: 'platform',       title: 'Close readiness',        desc: 'Outstanding critical reconciliations hold back the entity\'s close.' },
      { via: 'implementation', title: 'Automated matching',     desc: 'Bank-to-GL or subledger transaction matching, delivered as a separately scoped implementation.' },
    ],
    outcomes: [
      { title: 'Financial control',      desc: 'Every reconciliation is prepared, reviewed, and signed off by different people.' },
      { title: 'Operational efficiency', desc: 'Review time goes to the differences, not to chasing status.' },
      { title: 'Visibility',             desc: 'A clear view of which reconciliations are open, in review, in exception, or complete.' },
    ],
    related: ['close-ops', 'audit-controls', 'cash-application-ops'],
    conceptVisual: 'recon-matching',
  },
  {
    slug: 'cashflow-ops',
    name: 'Cashflow Ops',
    icon: 'cash',
    offering: 'implementation',
    preview: 'concept',
    tagline: 'Cash visibility, forecasting, and scenario analysis, designed and built around your data through a scoped engagement.',
    headline: 'Cash visibility, built around your data',
    intro: 'Cashflow Ops is delivered as a scoped engagement. We assess where your cash data lives, then design and build the position, forecast, and scenario views your leadership needs.',
    problems: [
      'Cash positions are assembled by hand from bank portals and entity-level files.',
      'The forecast is out of date by the time leadership sees it.',
      'Comparing scenarios means rebuilding the spreadsheet.',
    ],
    scope: [
      { via: 'implementation', title: 'Cash data assessment', desc: 'Map where cash, receivables, and payables data lives across your banks and entities.' },
      { via: 'implementation', title: 'Cash position views',  desc: 'A consolidated view of cash across accounts and entities, built on your sources.' },
      { via: 'implementation', title: 'Forecasting',          desc: 'A forecast model built on your inflows, outflows, and timing assumptions.' },
      { via: 'implementation', title: 'Scenario analysis',    desc: 'Compare a base case with the alternatives leadership wants to test.' },
    ],
    outcomes: [
      { title: 'Visibility',       desc: 'Leadership works from one agreed picture of cash.' },
      { title: 'Less manual work', desc: 'Less time assembling positions from separate sources.' },
      { title: 'Better planning',  desc: 'Forecasts and scenarios are ready when decisions are made.' },
    ],
    related: ['ap-ar-ops', 'cash-application-ops', 'reporting-analytics'],
    conceptVisual: 'cash-forecast',
  },
  {
    slug: 'close-ops',
    name: 'CloseOps',
    icon: 'calendar',
    offering: 'platform',
    preview: 'product',
    tagline: 'Run the period close from one checklist, with owners, dependencies, sign-off, and period locks.',
    headline: 'A period close you can see and manage',
    intro: 'Move the close calendar out of spreadsheets and status meetings into one shared checklist, configured around your entities, close templates, and review steps.',
    problems: [
      'The close checklist lives in a spreadsheet that only one person fully trusts.',
      'Status is gathered through meetings and chat messages.',
      'The same tasks cause the same delays every period.',
    ],
    scope: [
      { via: 'platform', title: 'Close checklist',            desc: 'Generate each period\'s tasks for every entity from your close templates.' },
      { via: 'platform', title: 'Owners and due dates',       desc: 'Every task has an owner, a reviewer, and a place in the close calendar.' },
      { via: 'platform', title: 'Task dependencies',          desc: 'Downstream tasks wait for their prerequisites, and an exception holds back the work that depends on it.' },
      { via: 'platform', title: 'Evidence and sign-off',      desc: 'Required evidence before submission, and independent review before completion.' },
      { via: 'platform', title: 'Period locks',               desc: 'Soft close, close, and reopen each entity. Reopening needs authority and a recorded reason.' },
      { via: 'platform', title: 'Consolidated close',         desc: 'Close each entity, then the consolidated close.' },
      { via: 'platform', title: 'Close status',               desc: 'Progress, blockers, and overdue tasks by entity, compared with the prior close.' },
    ],
    outcomes: [
      { title: 'Financial control',      desc: 'Preparation and review are recorded for every close task.' },
      { title: 'Operational efficiency', desc: 'Fewer status meetings; bottlenecks are visible early.' },
      { title: 'Visibility',             desc: 'Anyone can see where the close stands, by entity.' },
    ],
    related: ['journal-entry-ops', 'reconciliation-ops', 'audit-controls'],
  },
  {
    slug: 'cash-application-ops',
    name: 'Cash Application Ops',
    icon: 'receipt',
    offering: 'implementation',
    preview: 'concept',
    tagline: 'Cash application workflows for receipts, remittances, and open invoices, delivered through a scoped implementation.',
    headline: 'Apply incoming cash with less manual matching',
    intro: 'Cash Application Ops is delivered through a scoped implementation around your receipts, remittance data, and receivables process.',
    problems: [
      'Receipts arrive without clear remittance detail and are matched by hand.',
      'Short payments and deductions get lost between teams.',
      'Unapplied cash builds up and distorts receivables.',
    ],
    scope: [
      { via: 'implementation', title: 'Receipt intake',    desc: 'Bring bank receipts and remittance information together in one place.' },
      { via: 'implementation', title: 'Invoice matching',  desc: 'Match receipts to open invoices using the rules your team applies today.' },
      { via: 'implementation', title: 'Suggested matches', desc: 'Present likely applications for a reviewer to confirm.' },
      { via: 'implementation', title: 'Short payments',    desc: 'Flag differences and deductions for follow-up.' },
      { via: 'implementation', title: 'Unapplied cash',    desc: 'Track unapplied receipts until they are resolved.' },
    ],
    outcomes: [
      { title: 'Less manual work',  desc: 'Reviewers confirm suggestions rather than searching invoice lists.' },
      { title: 'Financial control', desc: 'Unapplied and short-paid items stay visible until resolved.' },
      { title: 'Visibility',        desc: 'Receivables reflect what has actually been received.' },
    ],
    related: ['ap-ar-ops', 'cashflow-ops', 'reconciliation-ops'],
  },
  {
    slug: 'ap-ar-ops',
    name: 'AP & AR Ops',
    icon: 'swap',
    offering: 'implementation',
    preview: 'concept',
    tagline: 'Payables approvals and receivables follow-up, configured around your policies through a scoped implementation.',
    headline: 'Control over what you owe and what you are owed',
    intro: 'AP & AR Ops is delivered through a scoped implementation that brings payables approvals and receivables follow-up into one controlled process around your policies.',
    problems: [
      'Bills are approved over email with no consistent trail.',
      'Receivables follow-up depends on individual spreadsheets and memory.',
      'Nobody sees payables and receivables side by side.',
    ],
    scope: [
      { via: 'implementation', title: 'Payables approvals',    desc: 'Route bills for approval before they are released for payment.' },
      { via: 'implementation', title: 'Payment visibility',    desc: 'See what is due, when, and what is on hold.' },
      { via: 'implementation', title: 'Receivables aging',     desc: 'View open receivables by age and by customer.' },
      { via: 'implementation', title: 'Collections follow-up', desc: 'Track outreach, commitments, and next steps.' },
      { via: 'implementation', title: 'Exception handling',    desc: 'Manage disputes, holds, and mismatches to resolution.' },
    ],
    outcomes: [
      { title: 'Financial control',      desc: 'Approvals follow your policy and leave a record.' },
      { title: 'Operational efficiency', desc: 'Follow-up runs from a shared queue, not personal lists.' },
      { title: 'Visibility',             desc: 'Payables and receivables are visible together.' },
    ],
    related: ['cash-application-ops', 'cashflow-ops', 'journal-entry-ops'],
  },
  {
    slug: 'reporting-analytics',
    name: 'Reporting & Analytics',
    icon: 'bars',
    offering: 'platform',
    preview: 'concept',
    tagline: 'Budget-versus-actual variance analysis with owner explanations and review, plus reporting built to your requirements.',
    headline: 'Reporting your team does not have to rebuild every month',
    intro: 'Explain performance with budget-versus-actual variance analysis on the platform, and add the management reporting your leadership relies on through a scoped implementation.',
    problems: [
      'The reporting pack is rebuilt by hand every period.',
      'Numbers differ depending on whose spreadsheet they came from.',
      'Variance explanations start late because the data arrives late.',
    ],
    scope: [
      { via: 'platform',       title: 'Variance analysis',    desc: 'Budget-versus-actual variances by account and entity, from imported balances.' },
      { via: 'platform',       title: 'Explanation and review', desc: 'The owner explains each variance and a different person reviews it; material variances need evidence.' },
      { via: 'implementation', title: 'Management reporting', desc: 'Reporting packs for leadership and the board, built to your format.' },
      { via: 'implementation', title: 'Multi-entity views',   desc: 'Consolidated and entity-level perspectives side by side.' },
      { via: 'implementation', title: 'KPI dashboards',       desc: 'The finance measures your organization tracks, in one place.' },
    ],
    outcomes: [
      { title: 'Less manual work', desc: 'Less time assembling reports, more time explaining them.' },
      { title: 'Consistency',      desc: 'One agreed definition for each measure.' },
      { title: 'Visibility',       desc: 'Explanations are recorded and reviewed, not buried in email.' },
    ],
    related: ['close-ops', 'cashflow-ops', 'audit-controls'],
  },
  {
    slug: 'audit-controls',
    name: 'Audit & Controls',
    icon: 'approve',
    offering: 'platform',
    preview: 'product',
    tagline: 'Approval controls, segregation of duties, evidence references, audit history, and period controls enforced in the workflow.',
    headline: 'Controls enforced in the workflow, with the evidence to show it',
    intro: 'Approval tiers, segregation of duties, required evidence, and period locks are enforced as the work happens, so the record exists before anyone asks for it.',
    problems: [
      'Controls are documented in one place and performed in another.',
      'Evidence is collected in a scramble before the audit.',
      'It is hard to show who approved what, and when.',
    ],
    scope: [
      { via: 'platform', title: 'Approval controls',     desc: 'Approval tiers for journal entries, with every decision recorded.' },
      { via: 'platform', title: 'Segregation of duties', desc: 'Preparers, approvers, and reviewers are kept separate; self-approval is refused.' },
      { via: 'platform', title: 'Evidence references',   desc: 'Each supporting document is referenced to the entry, task, or variance it supports, with who attached it and when.' },
      { via: 'platform', title: 'Audit history',         desc: 'An append-only history of who did what, to which record, and when.' },
      { via: 'platform', title: 'Period controls',       desc: 'Locked periods block posting activity. Reopening needs authority and a recorded reason.' },
      { via: 'platform', title: 'Audit package',         desc: 'Export an audit package by period and entity, as a complete JSON file or CSV files by section.' },
    ],
    note: 'Evidence is referenced, not stored: documents stay in your existing document repository.',
    outcomes: [
      { title: 'Financial control',      desc: 'Controls are performed inside the workflow, not beside it.' },
      { title: 'Operational efficiency', desc: 'Less time spent assembling evidence for auditors.' },
      { title: 'Visibility',             desc: 'A current view of which items are ready, pending review, or missing evidence.' },
    ],
    related: ['journal-entry-ops', 'close-ops', 'reconciliation-ops'],
  },
];

export const solutionPath = (slug) => `/solutions/${slug}`;
export const getSolution = (slug) => SOLUTIONS.find((s) => s.slug === slug);
export const PLATFORM_SOLUTIONS = SOLUTIONS.filter((s) => s.offering === 'platform');
export const IMPLEMENTATION_SOLUTIONS = SOLUTIONS.filter((s) => s.offering === 'implementation');
