// Systems and data sources Sanuvo evaluates for client-specific integration or workflow
// implementation. Copy rules: names are plain text (no vendor logos); nothing here is a
// certified integration, partnership, native connector or tested compatibility. Only the
// two EXPORT_FORMATS (and CSV balance import) exist in the platform today.

export const ERP_SYSTEMS = [
  { name: 'Oracle NetSuite / Oracle ERP' },
  { name: 'SAP' },
  { name: 'Microsoft Dynamics', detail: 'Dynamics 365 and Dynamics GP' },
  { name: 'Yardi' },
];

export const DATA_SOURCES = [
  { name: 'Banking data',               icon: 'receipt',  desc: 'Bank statement files and balances, evaluated for each client.' },
  { name: 'Excel and CSV spreadsheets', icon: 'files', desc: 'Workbooks and exports from your teams, prepared as CSV.', today: 'CSV balance import is available today' },
];

export const OTHER_LEDGERS = ['QuickBooks', 'Other general ledgers'];

export const EXPORT_FORMATS = [
  { name: 'ERP-neutral CSV',        desc: 'Journal export and balance import' },
  { name: 'QuickBooks Desktop IIF', desc: 'Journal export' },
];

export const SYSTEMS_DISCLAIMER = 'Product names are trademarks of their respective owners. Listing a system does not indicate a partnership, certification, native connection, live synchronization, or tested compatibility.';
