import { PREVIEW_DISCLAIMER } from '../../config/site';

// Window chrome for the coded dashboard previews. The preview itself is exposed to
// assistive tech as a single described image so sample rows are not read as real data.
export default function PreviewFrame({ title, description, children, className = '' }) {
  return (
    <figure className={`preview ${className}`}>
      <div className="frame" role="img" aria-label={`${description} ${PREVIEW_DISCLAIMER}`}>
        <div className="frame__bar">
          <span className="frame__dots"><i /><i /><i /></span>
          <span className="frame__title">{title}</span>
          <span className="chip chip--blue frame__tag">Illustrative</span>
        </div>
        {children}
      </div>
      <figcaption className="preview__caption">{PREVIEW_DISCLAIMER}</figcaption>
    </figure>
  );
}
