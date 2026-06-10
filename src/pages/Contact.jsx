import { BriefcaseBusiness, ChevronDown, Handshake, Headphones } from 'lucide-react';

const serviceLabels = ['Label', 'Label', 'Label', 'Label'];

const contactChannels = [
  {
    icon: BriefcaseBusiness,
    title: 'Sales and Business',
    email: 'abcd1234@gmail.com',
  },
  {
    icon: Handshake,
    title: 'Partners',
    email: 'partners1234@gmail.com',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    email: 'support1234@gmail.com',
  },
];

const faqs = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  title: 'Lorem ipsum dolor sit amet consectetur.',
  text:
    'Lorem ipsum dolor sit amet consectetur. Sit fames magna nunc ornare turpis. Eget arcu mauris a cursus laoreet dolor vel. Nisl nisl et quam etiam. Nunc praesent quis bibendum elementum non lobortis. Ligula massa aliquet eget sodales aenean. Lorem egestas odio id nunc in. Luctus.',
}));

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero-inner">
          <p className="contact-pill">
            <span aria-hidden="true" />
            Get In Touch
          </p>
          <h1 id="contact-title">Contact Us</h1>
          <p>
            At FutureSphere our mission is to empower individuals and businesses through
            innovative technology solutions that enrich lives, foster growth, and drive
            positive change.
          </p>

          <form className="contact-card">
            <div className="contact-form-grid">
              <label>
                First Name
                <input type="text" name="firstName" placeholder="John" />
              </label>
              <label>
                Last Name
                <input type="text" name="lastName" placeholder="Doe" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Johndoe@gmail.com" />
              </label>
              <label>
                Subject
                <input type="text" name="subject" placeholder="Lorem" />
              </label>
            </div>

            <fieldset className="service-fieldset">
              <legend>Services</legend>
              <div className="service-chip-row">
                {serviceLabels.map((label, index) => (
                  <label className="service-chip" key={`${label}-${index}`}>
                    <input type="checkbox" name="services" value={`${label}-${index}`} />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="message-label">
              Messages
              <textarea name="message" placeholder="Type here..." rows="7" />
            </label>

            <button type="submit">Submit</button>
          </form>

          <div className="contact-channel-strip" aria-label="Contact channels">
            {contactChannels.map((channel) => (
              <article className="contact-channel" key={channel.email}>
                <span className="contact-channel-icon" aria-hidden="true">
                  <channel.icon size={22} strokeWidth={2.1} />
                </span>
                <p>{channel.title}</p>
                <a href={`mailto:${channel.email}`}>{channel.email}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-faq-section" aria-labelledby="faq-title">
        <div className="contact-faq-inner">
          <div className="contact-faq-heading">
            <p className="contact-section-kicker">FAQs</p>
            <h2 id="faq-title">Answers to some of your questions</h2>
            <span>
              Don't find the answers you were looking for? Contact us at{' '}
              <a href="mailto:cpms@gmail.com">cpms@gmail.com</a>.
            </span>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <article className="faq-card" key={faq.id}>
                <h3>{faq.title}</h3>
                <p>{faq.text}</p>
              </article>
            ))}
          </div>

          <button className="faq-view-all" type="button">
            View All
            <ChevronDown size={16} strokeWidth={2} />
          </button>
        </div>
      </section>
    </main>
  );
}
