import { PREVIEW_DISCLAIMER, CONCEPT_DISCLAIMER } from '../../config/site';

// Window chrome for the coded previews. `kind` distinguishes an illustration of platform
// functionality ('product') from an illustration of what a scoped implementation could
// deliver ('concept'). The preview is exposed to assistive tech as a single described
// image so sample rows are not read as real data.
export default function PreviewFrame({ title, description, kind = 'product', caption, children, className = '' }) {
  const disclaimer = caption || (kind === 'concept' ? CONCEPT_DISCLAIMER : PREVIEW_DISCLAIMER);
  return (
    <figure className={`preview ${className}`} data-preview-kind={kind}>
      <div className="frame" role="img" aria-label={`${description} ${disclaimer}`}>
        <div className="frame__bar">
          <span className="frame__dots"><i /><i /><i /></span>
          <span className="frame__title">{title}</span>
          <span className="chip chip--blue frame__tag">{kind === 'concept' ? 'Concept' : 'Illustrative'}</span>
        </div>
        {children}
      </div>
      <figcaption className="preview__caption">{disclaimer}</figcaption>
    </figure>
  );
}
