import { useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import SolutionCards from '../components/SolutionCards';
import DeliveryModel from '../components/DeliveryModel';
import CtaBand from '../components/CtaBand';
import { PREVIEWS } from '../components/previews';
import { getSolution } from '../content/solutions';
import NotFound from './NotFound';

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = getSolution(slug);
  if (!solution) return <NotFound />;

  const { name, headline, intro, problems, scope, note, outcomes, related } = solution;
  const Preview = PREVIEWS[slug];
  const platformScope = scope.filter((s) => s.via === 'platform');
  const implementationScope = scope.filter((s) => s.via !== 'platform');

  return (
    <>
      <PageHero
        eyebrow={`Solutions / ${name}`}
        eyebrowTo="/solutions"
        title={headline}
        lead={intro}
        secondary={{ label: 'All solutions', to: '/solutions' }}
      />

      <section className="solution" aria-labelledby="challenge-title">
        <div className="container solution__grid">
          <Reveal className="solution__copy">
            <p className="eyebrow">The challenge</p>
            <h2 className="h2 h2--sm" id="challenge-title">Where finance teams get stuck</h2>
            <ul className="features">
              {problems.map((p) => (
                <li key={p}>
                  <span className="features__check features__check--muted"><Icon name="flag" size={13} /></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="solution__preview">
            <Preview />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="scope-title">
        <div className="container">
          <SectionHeader
            id="scope-title"
            eyebrow="Scope"
            title={`What a ${name} engagement can cover`}
            lead={platformScope.length
              ? 'The exact scope is set by your workflow assessment.'
              : `${name} is delivered through a scoped implementation. The exact scope is set by your workflow assessment.`}
          />

          {[
            { key: 'platform', items: platformScope, title: 'In the platform', desc: 'Configured around your entities, approvers, and controls.' },
            { key: 'implementation', items: implementationScope, title: 'Through scoped implementation', desc: 'Designed and built for your organization, with the work defined and agreed before it starts.' },
          ].filter((g) => g.items.length).map((group) => (
            <div key={group.key} className="scope-group">
              {platformScope.length > 0 && implementationScope.length > 0 && (
                <div className="scope-group__head">
                  <h3 className="scope-group__title">{group.title}</h3>
                  <p className="scope-group__desc">{group.desc}</p>
                </div>
              )}
              <div className="grid grid--3">
                {group.items.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 3) * 80} className={`card${group.key === 'implementation' ? ' card--scoped' : ''}`}>
                    <span className="card__icon"><Icon name={group.key === 'implementation' ? 'sliders' : 'check'} size={22} /></span>
                    <h3 className="h3">{s.title}</h3>
                    <p>{s.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          {note && <p className="scope-note">{note}</p>}
        </div>
      </section>

      <section className="section" aria-labelledby="outcomes-title">
        <div className="container">
          <SectionHeader
            id="outcomes-title"
            eyebrow="Outcomes"
            title="What it is designed to improve"
          />

          <div className="grid grid--3">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} delay={i * 80} className="card card--role">
                <p className="card__kicker">{o.title}</p>
                <p className="card__statement">{o.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DeliveryModel subject={name} />

      <section className="section" aria-labelledby="related-title">
        <div className="container">
          <SectionHeader id="related-title" eyebrow="Related solutions" title={`Often configured alongside ${name}`} />
          <SolutionCards solutions={related.map(getSolution)} columns={3} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
