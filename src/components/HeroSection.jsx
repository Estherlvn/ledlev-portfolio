import './HeroSection.css';

const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroSection = () => {
  return (
    <section id="home" className='welcome'>
      <div className="hero">
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
        </div>
      </div>

      <div className='presentation'>
        <div className='p-text'>
          <p>Mon parcours en développement web est né d’une passion pour la création, enrichi au fil des formations, des rencontres et d’une volonté constante de progresser.
          Du front-end au back-end, en passant par le design, je vous invite à découvrir mes projets.</p>
        </div>

        <div className="p-button">
        <button className="hero-button" onClick={() => handleScroll('experience')}>
          Parcours
        </button>
        <button className="hero-button2" onClick={() => handleScroll('projects')}>
          Projets
        </button>
      </div>

        <svg className="arrows" viewBox="0 0 60 80" preserveAspectRatio="xMidYMid meet">
          {/* <path class="a1" d="M0 0 L30 32 L60 0"></path> */}
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
      
      </div>

    </section>
    

  );
};

export default HeroSection;





