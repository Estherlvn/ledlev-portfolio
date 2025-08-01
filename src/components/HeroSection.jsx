import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-profile">
        <img
          src="/assets/profile.jpg"
          alt="photo de profil"
          className="hero-image"
        />
      </div>
      <div className="hero-content">
        <h1>Esther,<br /> Développeuse web Fullstack</h1>
        <h2>Créative & Passionnée</h2>
        <div className="hero-button">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button>Téléchargez mon CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;