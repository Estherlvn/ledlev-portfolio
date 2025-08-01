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
        <h1>
          Esther,<br />
          Développeuse web&nbsp;&nbsp;
           <span className="hand-underline">Fullstack</span>
        </h1>
        <h2>Créative & Passionnée</h2>
        <div className="button-section">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className='hero-button'>Mon CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;