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
      <div className="navbar-logo">Ledlev.</div>
      <button className="burger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`navbar-links ${open ? 'active' : ''}`}>
        <li onClick={() => handleScroll('home')}>Accueil</li>
        <li onClick={() => handleScroll('projects')}>Projets</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
