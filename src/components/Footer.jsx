import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/esther-led-lev/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Estherlvn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Ledlev. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
