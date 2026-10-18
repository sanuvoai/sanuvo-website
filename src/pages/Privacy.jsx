import PageHero from '../components/ui/PageHero';
import { BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, SITE_URL, PRIVACY_POLICY_EFFECTIVE_DATE } from '../config/site';

// Policy text as approved by Sanuvo. Change wording only with owner approval, and update
// PRIVACY_POLICY_EFFECTIVE_DATE in src/config/site.js whenever the content changes.
export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Sanuvo Privacy Policy"
        lead={`Effective Date: ${PRIVACY_POLICY_EFFECTIVE_DATE || 'Pending publication'}`}
        compact
      />

      <section className="section" aria-label="Privacy Policy">
        <div className="container container--narrow">
          <article className="legal">
            <p>
              Sanuvo (&ldquo;Sanuvo,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
              privacy. This Privacy Policy explains how information is handled when you visit our website
              at <a href={SITE_URL}>{SITE_URL}</a>, contact us, or schedule a meeting.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Website visits</h3>
            <p>
              Our website does not contain contact forms or require visitors to create accounts. We do not
              directly collect personal information through forms on the website.
            </p>
            <p>
              Our website is hosted by Vercel, which processes technical information associated with website
              requests, such as IP addresses, browser information, and request details, to deliver and operate
              the website.
            </p>
            <h3>Information you provide voluntarily</h3>
            <p>
              When you contact us by email, telephone, or through a scheduled meeting, we may receive
              information such as your name, email address, telephone number, company name, and information you
              choose to share.
            </p>

            <h2>2. How We Use Information</h2>
            <p>We use information received through business communications to:</p>
            <ul>
              <li>Respond to inquiries about Sanuvo&rsquo;s services.</li>
              <li>Schedule and conduct discovery calls and demonstrations.</li>
              <li>Communicate with prospective clients and business contacts.</li>
              <li>Discuss potential services and business relationships.</li>
              <li>Maintain website operations and address security concerns.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>

            <h2>3. Cookies and Analytics</h2>
            <p>
              Sanuvo&rsquo;s website does not currently set tracking cookies, use browser storage for tracking, or
              run website analytics services.
            </p>
            <p>
              We do not currently use Google Analytics, advertising pixels, or behavioral tracking tools on the
              website.
            </p>
            <p>If these practices change, we will update this Privacy Policy as appropriate.</p>

            <h2>4. Third-Party Services</h2>
            <p>Our website includes links to third-party services.</p>
            <p>
              <strong>Calendly:</strong> Visitors may schedule meetings through Calendly. When you follow
              our <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">booking link<span className="sr-only"> (opens in a new tab)</span></a>,
              you leave Sanuvo&rsquo;s website and interact directly with Calendly. Information provided during
              scheduling is handled by Calendly according to its own privacy practices and may be made available
              to Sanuvo for meeting coordination.
            </p>
            <p>
              <strong>Email and telephone:</strong> Visitors may contact Sanuvo using the email address or
              telephone number displayed on the website. These communications may involve the visitor&rsquo;s
              chosen email or telecommunications provider and the services Sanuvo uses to receive communications.
            </p>
            <p>
              <strong>Website hosting:</strong> Our website is hosted by Vercel, which processes technical request
              information necessary to deliver and operate the site.
            </p>
            <p>
              For more information about third-party practices, please review the privacy policies of the relevant
              providers.
            </p>

            <h2>5. Information Sharing</h2>
            <p>Sanuvo does not sell personal information collected through website-related business inquiries.</p>
            <p>Sanuvo does not sell personal information or share personal information for targeted advertising.</p>
            <p>
              We may use service providers to support website hosting, scheduling, and business communications.
              These providers may process information as necessary to provide their services.
            </p>
            <p>
              We may also disclose information when required by applicable law or when reasonably necessary to
              protect our rights or the security of our services.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We take reasonable steps intended to protect personal information handled through our business
              communications and website operations.
            </p>
            <p>
              However, no method of internet transmission or electronic storage is completely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain business communications and related information for as long as reasonably necessary for the
              purposes described in this policy, including responding to inquiries, maintaining business records,
              and meeting applicable legal obligations.
            </p>
            <p>
              Technical information processed by our hosting provider is subject to that provider&rsquo;s applicable
              retention practices.
            </p>

            <h2>8. Privacy Requests</h2>
            <p>
              You may contact Sanuvo to ask about personal information you have provided, request corrections, or
              request deletion.
            </p>
            <p>
              We will review and respond to requests as required by applicable law. Some information may need to be
              retained for legitimate business purposes or legal obligations.
            </p>

            <h2>9. External Links</h2>
            <p>
              Our website may contain links to websites or services operated by third parties. Sanuvo is not
              responsible for the privacy practices or content of those independent websites.
            </p>

            <h2>10. Children&rsquo;s Privacy</h2>
            <p>
              Our website is intended for business and professional audiences and is not directed to children under
              the age of 13.
            </p>
            <p>We do not knowingly solicit personal information from children under 13.</p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes to our website, business operations, or
              applicable requirements.
            </p>
            <p>When we make changes, we will update the effective date displayed at the top of this page.</p>

            <h2>12. Contact Information</h2>
            <p>For questions or privacy-related requests, contact:</p>
            <address className="legal__contact">
              <strong>Sanuvo</strong><br />
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
              Phone: <a href={CONTACT_PHONE_TEL}>{CONTACT_PHONE}</a><br />
              Website: <a href={SITE_URL}>{SITE_URL}</a>
            </address>
          </article>
        </div>
      </section>
    </>
  );
}
