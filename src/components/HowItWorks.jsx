import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

const STEPS = [
  {
    num: '01',
    title: 'Assess',
    desc: 'We walk through how journal entries, reconciliations, and cash reporting run today, and identify where the time and risk sit.',
  },
  {
    num: '02',
    title: 'Configure',
    desc: 'We configure Sanuvo around your entities, approval paths, and export requirements, rather than asking you to bend your process to the tool.',
  },
  {
    num: '03',
    title: 'Operate',
    desc: 'Your team runs the workflow in Sanuvo, with a shared view of what is open, who owns it, and what is ready to hand off.',
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'We review how the workflow is performing with you and keep refining it as your entities, team, and close calendar change.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section--alt" aria-labelledby="how-title">
      <div className="container">
        <SectionHeader
          id="how-title"
          eyebrow="How it works"
          title="From workflow assessment to implementation"
          lead="We assess how your finance workflows run today, then determine the appropriate scope: platform functionality, configuration, or custom implementation."
        />

        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.num} delay={i * 80} className="step">
              <span className="step__num">{s.num}</span>
              <h3 className="h3">{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </ol>

        <p className="section-link">
          <Link to="/implementation">How implementation works <Icon name="arrow" size={16} /></Link>
        </p>
      </div>
    </section>
  );
}
