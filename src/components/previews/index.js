import JournalEntryPreview from './JournalEntryPreview';
import ReconciliationPreview from './ReconciliationPreview';
import CashflowPreview from './CashflowPreview';
import CloseOpsPreview from './CloseOpsPreview';
import CashApplicationPreview from './CashApplicationPreview';
import ApArPreview from './ApArPreview';
import ReportingPreview from './ReportingPreview';
import AuditControlsPreview from './AuditControlsPreview';

// Preview component for each solution, keyed by solution slug.
export const PREVIEWS = {
  'journal-entry-ops':    JournalEntryPreview,
  'reconciliation-ops':   ReconciliationPreview,
  'cashflow-ops':         CashflowPreview,
  'close-ops':            CloseOpsPreview,
  'cash-application-ops': CashApplicationPreview,
  'ap-ar-ops':            ApArPreview,
  'reporting-analytics':  ReportingPreview,
  'audit-controls':       AuditControlsPreview,
};
