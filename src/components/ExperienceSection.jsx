import './ExperienceSection.css';

const experiences = [
    {
      badge: 'Titre RNCP 5 obtenu',
      icon: 'fa-solid fa-graduation-cap',
      dotImage: '/assets/dots/logo_elan.png',
      title: 'Formation Développeur web Fullstack',
      company: 'ELAN Formation, Strasbourg',
      date: 'Oct. 2024 - Mai 2025'
    },
    {
      badge: 'Stage conventionné',
      icon: 'fa-solid fa-briefcase',
      dotImage: '/assets/dots/logo_digicom.png',
      title: 'Stage développement web',
      company: 'Digicom Corporation, Strasbourg',
      date: 'Mars - Mai 2025'
    },
    {
      badge: 'Certification obtenue',
      icon: 'fa-solid fa-graduation-cap',
      dotImage: '/assets/dots/logo_simplon.jpg',
      title: 'Formation Développeur web Front-end',
      company: 'SIMPLON Grand Ouest, Rennes',
      date: 'Juin 2024 - Aout 2024'
    },
    {
      badge: 'Certification obtenue',
      icon: 'fa-solid fa-graduation-cap',
      dotImage: '/assets/dots/logo_simplon.jpg',
      title: 'Formation en Conception web (Wordpress)',
      company: 'SIMPLON Grand Ouest, Rennes',
      date: 'Mars 2024 - Avril 2024'
    }
  ];
  

const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-left">
      <div className="header-line"></div>
        <h3>Expériences et formation</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      </div>

      <div className="experience-right">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot">
                <img src={exp.dotImage} alt="" />
              </div>
              <div className="timeline-content">
              <div className="content-header">
  <h4>{exp.title}</h4>
  <div className="badge">
    <i className={exp.icon}></i>
    <span>{exp.badge}</span>
  </div>
</div>

              <p>{exp.company}</p>
              <span>{exp.date}</span>
          </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
