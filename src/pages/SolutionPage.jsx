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
            lead="The exact scope is set by your workflow assessment. These are the areas we most often configure."
          />

          <div className="grid grid--3">
            {scope.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80} className="card">
                <span className="card__icon"><Icon name="check" size={22} /></span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>

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
