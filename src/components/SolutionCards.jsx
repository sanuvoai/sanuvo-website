import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';
import { SOLUTIONS, solutionPath } from '../content/solutions';

// Grid of linked solution cards. `as` sets the heading level of each card title.
export default function SolutionCards({ solutions = SOLUTIONS, as: Heading = 'h3', columns = 4 }) {
  return (
    <ul className={`grid grid--${columns}`}>
      {solutions.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={(i % columns) * 60}>
          <Link to={solutionPath(s.slug)} className="card card--link">
            <span className="card__icon"><Icon name={s.icon} size={22} /></span>
            <Heading className="h3">{s.name}</Heading>
            <p>{s.tagline}</p>
            <span className="card__more">Learn more <Icon name="arrow" size={16} /></span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
