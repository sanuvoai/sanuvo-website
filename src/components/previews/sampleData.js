// Fictional sample data for the dashboard previews. None of this is customer data.

export const PERIOD = 'September 2026';

export const STATUS_TONE = {
  'Draft':             'gray',
  'Pending approval':  'amber',
  'Changes requested': 'red',
  'Approved':          'green',
  'Exported':          'blue',
  'Matched':           'green',
  'Potential match':   'amber',
  'Unmatched':         'gray',
  'Exception':         'red',
  'Complete':          'green',
  'In review':         'amber',
  'In progress':       'blue',
  'Not started':       'gray',
  'Overdue':           'red',
  'Applied':           'green',
  'Suggested match':   'amber',
  'Short payment':     'red',
  'Unapplied':         'gray',
  'On hold':           'red',
  'Performed':         'green',
  'Due':               'amber',
  'Evidence missing':  'red',
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

export const RECON_SUMMARY = [
  { label: 'Matched',           count: 312, tone: 'green' },
  { label: 'Potential matches', count: 18,  tone: 'amber' },
  { label: 'Unmatched',         count: 9,   tone: 'gray'  },
  { label: 'Exceptions',        count: 4,   tone: 'red'   },
];

export const RECON_ROWS = [
  { date: '09/28', bank: 'ACH vendor payment',  bankAmt: '-8,420.00', gl: '2000 · AP payment',   glAmt: '-8,420.00', status: 'Matched',         note: ''                 },
  { date: '09/27', bank: 'Wire deposit',        bankAmt: '25,000.00', gl: '1200 · AR receipt',   glAmt: '25,000.00', status: 'Matched',         note: ''                 },
  { date: '09/27', bank: 'Card settlement',     bankAmt: '3,187.45',  gl: '1200 · AR receipts',  glAmt: '3,190.00',  status: 'Potential match', note: 'Difference 2.55'  },
  { date: '09/26', bank: 'Bank service fee',    bankAmt: '-45.00',    gl: 'No GL entry found',   glAmt: '',          status: 'Unmatched',       note: ''                 },
  { date: '09/25', bank: 'Check #2291',         bankAmt: '-1,250.00', gl: '2000 · AP payment',   glAmt: '-1,520.00', status: 'Exception',       note: 'Amount mismatch'  },
];

export const ENTITY_PROGRESS = [
  { entity: 'US Ops',   pct: 82 },
  { entity: 'CA Inc',   pct: 71 },
  { entity: 'UK Ltd',   pct: 64 },
  { entity: 'Holdings', pct: 45 },
];

// Cash balance in $M. Index 0-4 are the last five weekly actuals (index 4 = today);
// the forecasts start from today and run 13 weeks forward.
export const CASH_ACTUAL   = [4.35, 4.52, 4.41, 4.68, 4.82];
export const CASH_BASE     = [4.82, 4.70, 4.55, 4.61, 4.38, 4.20, 4.05, 3.96, 4.22, 4.51, 4.74, 4.95, 5.12, 5.31];
export const CASH_DOWNSIDE = [4.82, 4.62, 4.40, 4.36, 4.08, 3.84, 3.62, 3.48, 3.63, 3.82, 3.95, 4.06, 4.15, 4.24];

export const CLOSE_TASKS = [
  { task: 'Bank reconciliations',        entity: 'US Ops',   owner: 'R. Gomez', due: 'Day 2', status: 'Complete'    },
  { task: 'Accruals review',             entity: 'UK Ltd',   owner: 'A. Patel', due: 'Day 3', status: 'In review'   },
  { task: 'Intercompany eliminations',   entity: 'Holdings', owner: 'M. Chen',  due: 'Day 4', status: 'In progress' },
  { task: 'Fixed asset roll-forward',    entity: 'CA Inc',   owner: 'R. Gomez', due: 'Day 5', status: 'Not started' },
  { task: 'Flux analysis',               entity: 'US Ops',   owner: 'A. Patel', due: 'Day 3', status: 'Overdue'     },
];

export const RECEIPTS = [
  { id: 'RCPT-3301', payer: 'Customer 1042',     amount: '12,480.00', invoice: 'INV-8841',            status: 'Applied',         note: ''                 },
  { id: 'RCPT-3302', payer: 'Customer 1107',     amount: '5,250.00',  invoice: 'INV-8850, INV-8852',  status: 'Suggested match', note: ''                 },
  { id: 'RCPT-3303', payer: 'Customer 1019',     amount: '9,900.00',  invoice: 'INV-8790',            status: 'Short payment',   note: 'Short by 100.00'  },
  { id: 'RCPT-3304', payer: 'Unidentified payer', amount: '2,310.00', invoice: '',                    status: 'Unapplied',       note: ''                 },
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

export const CONTROLS_LOG = [
  { id: 'JE-01',  control: 'Journal entry approval',     area: 'Close',     owner: 'M. Chen',  last: 'Sep 28', status: 'Performed'        },
  { id: 'REC-03', control: 'Bank reconciliation review', area: 'Treasury',  owner: 'R. Gomez', last: 'Sep 27', status: 'Performed'        },
  { id: 'AP-02',  control: 'Vendor change review',       area: 'Payables',  owner: 'A. Patel', last: 'Sep 20', status: 'Evidence missing' },
  { id: 'ACC-05', control: 'User access review',         area: 'Systems',   owner: 'M. Chen',  last: 'Jun 30', status: 'Due'              },
];
