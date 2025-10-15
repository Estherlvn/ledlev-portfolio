import { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><a href="#home">LedLev.</a></div>

      <button
        className="burger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        {/* icône burger simple (accessible) */}
        <span className={`burger-icon ${open ? 'open' : ''}`} />
      </button>

      <ul className={`navbar-links ${open ? 'active' : ''}`}>
        <li onClick={() => handleScroll('home')}>Accueil</li>
        <li onClick={() => handleScroll('projects')}>Projets</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>

      {/* overlay cliquable pour fermer le menu mobile */}
      <div className={`nav-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;
