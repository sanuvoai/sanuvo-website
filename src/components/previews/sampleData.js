// Fictional sample data for the previews. None of this is customer data.

export const PERIOD = 'September 2026';

export const STATUS_TONE = {
  'Draft':                  'gray',
  'Pending approval':       'amber',
  'Changes requested':      'red',
  'Approved':               'green',
  'Exported':               'blue',
  'Complete':               'green',
  'In review':              'amber',
  'In progress':            'blue',
  'Not started':            'gray',
  'Overdue':                'red',
  'Exception':              'red',
  'Applied':                'green',
  'Suggested match':        'amber',
  'Short payment':          'red',
  'Unapplied':              'gray',
  'On hold':                'red',
  'Ready':                  'green',
  'Pending review':         'amber',
  'Missing evidence':       'red',
  'Open exception':         'red',
  'Awaiting ERP reference': 'amber',
  'Posted':                 'green',
  'Referenced':             'green',
  'Required':               'red',
};

export const JOURNAL_ENTRIES = [
  { id: 'JE-1042', desc: 'Accrued payroll, September',      entity: 'US Ops',   amount: '184,250.00', preparer: 'M. Chen',  status: 'Pending approval'  },
  { id: 'JE-1041', desc: 'Prepaid insurance amortization',  entity: 'UK Ltd',   amount: '12,400.00',  preparer: 'A. Patel', status: 'Approved'          },
  { id: 'JE-1040', desc: 'Intercompany recharge, Q3',       entity: 'Holdings', amount: '96,730.00',  preparer: 'M. Chen',  status: 'Changes requested' },
  { id: 'JE-1039', desc: 'Depreciation, fixed assets',      entity: 'US Ops',   amount: '41,118.50',  preparer: 'R. Gomez', status: 'Exported'          },
  { id: 'JE-1038', desc: 'Revenue deferral adjustment',     entity: 'CA Inc',   amount: '27,905.00',  preparer: 'A. Patel', status: 'Draft'             },
];

export const JE_FILTERS = [
  { label: 'All',       count: 24 },
  { label: 'Draft',     count: 5  },
  { label: 'In review', count: 6  },
  { label: 'Approved',  count: 9  },
  { label: 'Exported',  count: 4  },
];

// Reconciliation close tasks. Summary sums to 22: 16 complete, 3 in review, 1 in progress, 2 in exception.
export const RECON_SUMMARY = [
  { label: 'Complete',    count: 16, tone: 'green' },
  { label: 'In review',   count: 3,  tone: 'amber' },
  { label: 'In progress', count: 1,  tone: 'blue'  },
  { label: 'Exceptions',  count: 2,  tone: 'red'   },
];

export const RECON_TASKS = [
  { account: 'Cash, operating account',  entity: 'US Ops',   owner: 'R. Gomez', reviewer: 'A. Patel', evidence: 'Referenced', status: 'Complete',    note: '' },
  { account: 'AR subledger to GL',       entity: 'US Ops',   owner: 'M. Chen',  reviewer: 'R. Gomez', evidence: 'Referenced', status: 'In review',   note: '' },
  { account: 'Intercompany balances',    entity: 'Holdings', owner: 'A. Patel', reviewer: 'M. Chen',  evidence: 'Referenced', status: 'Exception',   note: 'Difference 2,450.00 open' },
  { account: 'Accrued expenses',         entity: 'UK Ltd',   owner: 'R. Gomez', reviewer: 'A. Patel', evidence: 'Required',   status: 'In progress', note: '' },
  { account: 'Prepaid expenses',         entity: 'CA Inc',   owner: 'M. Chen',  reviewer: 'A. Patel', evidence: 'Referenced', status: 'Complete',    note: '' },
];

export const ENTITY_PROGRESS = [
  { entity: 'US Ops',   pct: 82 },
  { entity: 'CA Inc',   pct: 71 },
  { entity: 'UK Ltd',   pct: 64 },
  { entity: 'Holdings', pct: 45 },
];

// Posting packages generated from approved entries.
export const POSTING_PACKAGES = [
  { id: 'PKG-0912', format: 'QuickBooks Desktop IIF', entries: 6, created: 'Sep 28', status: 'Awaiting ERP reference' },
  { id: 'PKG-0911', format: 'ERP-neutral CSV',        entries: 4, created: 'Sep 27', status: 'Awaiting ERP reference' },
  { id: 'PKG-0910', format: 'ERP-neutral CSV',        entries: 3, created: 'Sep 26', status: 'Posted'                 },
];

export const CLOSE_TASKS = [
  { task: 'Bank reconciliations',        entity: 'US Ops',   owner: 'R. Gomez', due: 'Day 2', status: 'Complete'    },
  { task: 'Accruals review',             entity: 'UK Ltd',   owner: 'A. Patel', due: 'Day 3', status: 'In review'   },
  { task: 'Intercompany eliminations',   entity: 'Holdings', owner: 'M. Chen',  due: 'Day 4', status: 'In progress' },
  { task: 'Fixed asset roll-forward',    entity: 'CA Inc',   owner: 'R. Gomez', due: 'Day 5', status: 'Not started' },
  { task: 'Flux analysis',               entity: 'US Ops',   owner: 'A. Patel', due: 'Day 3', status: 'Overdue'     },
];

export const RECEIPTS = [
  { id: 'RCPT-3301', payer: 'Customer 1042',      amount: '12,480.00', invoice: 'INV-8841',           status: 'Applied',         note: ''                },
  { id: 'RCPT-3302', payer: 'Customer 1107',      amount: '5,250.00',  invoice: 'INV-8850, INV-8852', status: 'Suggested match', note: ''                },
  { id: 'RCPT-3303', payer: 'Customer 1019',      amount: '9,900.00',  invoice: 'INV-8790',           status: 'Short payment',   note: 'Short by 100.00' },
  { id: 'RCPT-3304', payer: 'Unidentified payer', amount: '2,310.00',  invoice: '',                   status: 'Unapplied',       note: ''                },
];

// Open receivables by age, $M. Sums to 2.94.
export const AR_AGING = [
  { bucket: 'Current',    amount: 1.62 },
  { bucket: '1-30 days',  amount: 0.71 },
  { bucket: '31-60 days', amount: 0.34 },
  { bucket: '61-90 days', amount: 0.18 },
  { bucket: '90+ days',   amount: 0.09 },
];

export const BILLS = [
  { id: 'BILL-5521', vendor: 'Vendor 2204', due: 'Oct 03', amount: '18,400.00', status: 'Pending approval' },
  { id: 'BILL-5520', vendor: 'Vendor 2118', due: 'Oct 05', amount: '6,120.00',  status: 'Approved'         },
  { id: 'BILL-5517', vendor: 'Vendor 2231', due: 'Sep 30', amount: '42,900.00', status: 'On hold'          },
];

// Monthly revenue, $M.
export const REVENUE_TREND = [
  { month: 'Apr', value: 2.90 },
  { month: 'May', value: 3.00 },
  { month: 'Jun', value: 3.10 },
  { month: 'Jul', value: 3.05 },
  { month: 'Aug', value: 3.30 },
  { month: 'Sep', value: 3.42 },
];

// Operating expenses, $K. Actuals sum to 2,610; budget to 2,630.
export const BUDGET_VS_ACTUAL = [
  { dept: 'Sales',      budget: 820,  actual: 846  },
  { dept: 'Operations', budget: 1140, actual: 1095 },
  { dept: 'G&A',        budget: 410,  actual: 428  },
  { dept: 'Technology', budget: 260,  actual: 241  },
];

// Audit evidence binder items. Summary sums to 48: 40 ready, 5 pending review, 2 missing evidence, 1 open exception.
export const BINDER_SUMMARY = [
  { label: 'Ready',            count: 40, tone: 'green' },
  { label: 'Pending review',   count: 5,  tone: 'amber' },
  { label: 'Missing evidence', count: 2,  tone: 'red'   },
  { label: 'Open exception',   count: 1,  tone: 'red'   },
];

export const BINDER_ITEMS = [
  { item: 'JE-1041 approval and support',   process: 'Journal entries',    attachedBy: 'A. Patel', when: 'Sep 27', status: 'Ready'            },
  { item: 'Bank reconciliation, US Ops',    process: 'Reconciliations',    attachedBy: 'R. Gomez', when: 'Sep 26', status: 'Ready'            },
  { item: 'AR subledger to GL, US Ops',     process: 'Reconciliations',    attachedBy: 'M. Chen',  when: 'Sep 28', status: 'Pending review'   },
  { item: 'Revenue variance, CA Inc',       process: 'Variance analysis',  attachedBy: '—',        when: '—',      status: 'Missing evidence' },
  { item: 'Intercompany balances',          process: 'Reconciliations',    attachedBy: 'A. Patel', when: 'Sep 28', status: 'Open exception'   },
];

// ── Command Center (homepage). All figures reconcile across panels. ──────────────
// Close tasks by entity: 61 tasks, 42 complete (69%). Close exceptions: CA Inc 1 + Holdings 2 = 3.
export const CLOSE_BY_ENTITY = [
  { entity: 'US Ops',   complete: 18, review: 2, open: 2, exception: 0 },
  { entity: 'CA Inc',   complete: 10, review: 2, open: 1, exception: 1 },
  { entity: 'UK Ltd',   complete: 9,  review: 2, open: 3, exception: 0 },
  { entity: 'Holdings', complete: 5,  review: 1, open: 3, exception: 2 },
];

// Six entries await approval; two have waited more than three days.
export const APPROVAL_QUEUE = [
  { id: 'JE-1042', desc: 'Accrued payroll, September', amount: '184,250.00', tier: 'Tier 2', waiting: '5 days', approver: 'Controller', note: '' },
  { id: 'JE-1045', desc: 'Intercompany recharge, Q3',  amount: '96,730.00',  tier: 'Tier 2', waiting: '4 days', approver: 'Controller', note: '' },
  { id: 'JE-1046', desc: 'Prepaid software, annual',   amount: '18,600.00',  tier: 'Tier 1', waiting: '1 day',  approver: 'Accounting Manager', note: '' },
  { id: 'JE-1047', desc: 'Bonus accrual, Q3',          amount: '52,000.00',  tier: 'Tier 1', waiting: 'Today',  approver: 'Accounting Manager', note: 'Preparer A. Patel cannot approve' },
];

// Two packages await an ERP reference; debits equal credits in each.
export const PACKAGES_PANEL = [
  { id: 'PKG-0912', format: 'ERP-neutral CSV',        entries: 6, total: '1,284,520.00', status: 'Awaiting ERP reference', reference: '' },
  { id: 'PKG-0911', format: 'ERP-neutral CSV',        entries: 4, total: '312,940.00',   status: 'Awaiting ERP reference', reference: '' },
  { id: 'PKG-0910', format: 'QuickBooks Desktop IIF', entries: 3, total: '86,215.40',    status: 'Posted',                 reference: 'JRN-55790' },
];

// Four open exceptions: three close (two of them reconciliation tasks) and one variance.
// Revenue variance: actual 1,629,800.00 vs budget 1,450,000.00 = +179,800.00 (+12.4%).
export const EXCEPTIONS_FEED = [
  { type: 'Close',    entity: 'Holdings', title: 'Intercompany balances reconciliation', detail: 'Difference of 2,450.00 under investigation' },
  { type: 'Close',    entity: 'CA Inc',   title: 'Deferred revenue reconciliation',      detail: 'Difference of 1,180.00 under investigation' },
  { type: 'Close',    entity: 'Holdings', title: 'Fixed asset roll-forward',             detail: 'Schedule differs from GL by 3,920.00' },
  { type: 'Variance', entity: 'CA Inc',   title: 'Revenue vs budget: +179,800.00 (+12.4%)', detail: 'Explanation submitted, awaiting review' },
];
