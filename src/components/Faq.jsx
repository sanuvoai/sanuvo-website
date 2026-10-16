import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

export const HOME_FAQS = [
  {
    q: 'What is Sanuvo?',
    a: 'Sanuvo is a Financial Operations Optimization company. We offer a configurable Financial Operations Control Layer, implementation services, and custom finance workflow automation.',
  },
  {
    q: 'Who is Sanuvo for?',
    a: 'CFOs, Controllers, Finance Directors, and accounting teams, particularly those working across multiple entities, who want more control over the work that happens around their financial systems.',
  },
  {
    q: 'Does Sanuvo replace our ERP?',
    a: 'No. Sanuvo is designed for your existing financial systems. It addresses the preparation, approval, close, and evidence work that typically happens in spreadsheets and email around them.',
  },
  {
    q: 'How does Sanuvo work with our existing systems?',
    a: 'We evaluate your ERP, such as Oracle NetSuite, SAP, Microsoft Dynamics, or Yardi, along with your banking and spreadsheet data, during the workflow assessment. We then scope, map, and validate the integration or workflow your process needs. Two export formats are available today: an ERP-neutral CSV and QuickBooks Desktop IIF, both uploaded through your ledger system\'s own import process. We do not claim certified integrations, vendor partnerships, native connectors, or live synchronization.',
  },
  {
    q: 'How do we know what Sanuvo can deliver for us?',
    a: 'Journal entries, reconciliation tasks, the close, variance analysis, and audit evidence run on the platform and are configured around your organization. Cash flow, cash application, AP and AR, and management reporting are delivered through scoped implementation. We assess your workflows first and tell you which applies to each of your requirements before any scope is agreed.',
  },
  {
    q: 'What does implementation involve?',
    a: 'We start with a workflow assessment, agree the scope, configure and build around your entities, approval paths, and controls, and then keep working with you to refine the workflow once it is running.',
  },
  {
    q: 'What happens in a demo?',
    a: 'We ask about your finance workflows, walk you through the platform, and talk through which solution areas are relevant to your team. There is no obligation.',
  },
];

export default function Faq({ items = HOME_FAQS, title = 'Questions finance leaders ask us', eyebrow = 'FAQ' }) {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <SectionHeader id="faq-title" eyebrow={eyebrow} title={title} />

        <Reveal className="faq">
          {items.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                <span>{f.q}</span>
                <Icon name="chevron" size={20} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
