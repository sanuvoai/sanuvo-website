import JournalEntryPreview from './JournalEntryPreview';
import ReconciliationPreview from './ReconciliationPreview';
import CashflowConcept from './CashflowConcept';
import CloseOpsPreview from './CloseOpsPreview';
import CashApplicationPreview from './CashApplicationPreview';
import ApArPreview from './ApArPreview';
import ReportingPreview from './ReportingPreview';
import AuditControlsPreview from './AuditControlsPreview';
import ReconMatchingConcept from './ReconMatchingConcept';
import CashForecastConcept from './CashForecastConcept';

// Preview component for each solution, keyed by solution slug.
export const PREVIEWS = {
  'journal-entry-ops':    JournalEntryPreview,
  'reconciliation-ops':   ReconciliationPreview,
  'cashflow-ops':         CashflowConcept,
  'close-ops':            CloseOpsPreview,
  'cash-application-ops': CashApplicationPreview,
  'ap-ar-ops':            ApArPreview,
  'reporting-analytics':  ReportingPreview,
  'audit-controls':       AuditControlsPreview,
};

// Additional implementation-concept visuals, shown inside a solution's scoped-implementation scope.
export const CONCEPT_VISUALS = {
  'recon-matching': { title: 'Automated matching, as a scoped implementation', Component: ReconMatchingConcept },
  'cash-forecast':  { title: 'A 13-week forecast, as a scoped implementation', Component: CashForecastConcept },
};
