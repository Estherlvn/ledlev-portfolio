import './ProjectSection.css';

const projects = [
  {
    title: 'Digital Sales Room - Digicom Corporation',
    year: 2025,
    techs: ['Laravel', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    description:
      "Application web de type CRM dédiée à un usage en interne pour le compte d’une entreprise de logiciels, située à Strasbourg.",
    image: '/assets/projects/dsr-picture.png',
    imageAlt: 'Aperçu Digital Sales Room',
    // github: 'https://github.com/Estherlvn/dsr',
    external: 'https://exemple.com/dsr'
  },
  {
    title: 'LocalHub - Promouvoir la scène locale',
    year: 2025,
    techs: ['Symfony', 'MySQL', 'Native CSS', 'JavaScript Vanilla'],
    description:
      'Plateforme web d’upload et de streaming musical destinée à promouvoir les artistes de la scène locale et régionale.',
    image: '/assets/projects/localhub-picture.png',
    imageAlt: 'Aperçu LocalHub',
    github: 'https://github.com/Estherlvn/LocalHub_App',
    external: 'https://exemple.com/localhub'
  },
  {
    title: 'Quiz Tech - Test de connaissance en ligne',
    year: 2024,
    techs: ['React.js', 'CSS Modules'],
    description:
      'Site web de Quiz en ligne sur le thème du développement web.',
    image: '/assets/projects/quiztech-picture.png',
    imageAlt: 'Aperçu Quiz Tech',
    github: 'https://github.com/Estherlvn/quiz-tech',
    external: 'https://exemple.com/quiztech'
  }
];

export default function ProjectSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-head">
        <h3>Projets</h3>
        <a className="see-all" href="https://github.com/ton-compte?tab=repositories" target="_blank" rel="noopener noreferrer">
          Voir tout
        </a>
      </div>

      <ul className="projects-list">
        {projects.map((p, i) => (
          <li className="project-item" key={i}>
            <div className="project-thumb">
              <img src={p.image} alt={p.imageAlt} loading="lazy" />
            </div>

            <div className="project-content">
              <div className="project-topline">
                <span className="year-badge">{p.year}</span>
                <h4 className="project-title">{p.title}</h4>
              </div>

              <div className="project-techs">
                {p.techs.map((t, idx) => (
                  <span className="tech" key={idx}>{t}{idx < p.techs.length - 1 && ' · '}</span>
                ))}
              </div>

              <p className="project-desc">{p.description}</p>

              <div className="project-links">
                {p.github && (
                  <a className="icon-link" href={p.github} target="_blank" rel="noopener noreferrer" aria-label="Voir le code sur GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                )}
                {p.external && (
                  <a className="icon-link" href={p.external} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le site dans un nouvel onglet">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}