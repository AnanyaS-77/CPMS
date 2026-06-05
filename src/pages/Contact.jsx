export default function Contact() {
  return (
    <main className="simple-page">
      <p className="section-kicker">Contact</p>
      <h1>Get in touch</h1>
      <form className="contact-form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="name@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="Tell us what you need" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
