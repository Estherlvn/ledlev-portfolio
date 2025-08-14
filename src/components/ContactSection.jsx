import './ContactSection.css';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <div className="header-line"></div>
        <h3>Contact</h3>

        <p>
          Contactez‑moi et discutons ensemble de votre futur projet !
          <br />
          Je suis joignable également sur{" "}
          <a href="https://www.linkedin.com/in/esther-led-lev/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>.
        </p>

        <p className="thanks">Merci pour votre intérêt,</p>
        <p className="signature">Esther</p>

        <div className="socials">
          <a href="https://www.linkedin.com/in/esther-led-lev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Estherlvn" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <form className="contact-right" onSubmit={handleSubmit}>
        <label htmlFor="name">Nom:</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="8" required />

        <button type="submit" className="hero-button">Envoyer</button>
      </form>
    </section>
  );
};

export default ContactSection;
