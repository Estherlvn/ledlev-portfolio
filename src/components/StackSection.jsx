import './StackSection.css';

const techStacks = {
  Langages: ['html5', 'css3', 'javascript', 'php', 'mysql'],
  Frameworks: ['tailwindcss', 'react', 'vuejs', 'laravel', 'symfony'],
  Outils: ['git', 'github', 'trello', 'figma'],
  CMS: ['wordpress']
};

const StackSection = () => {
  return (
    <section className="stack-section" id="stack">
      <div className="stack-header">
        <div className="stack-line"></div>
        <h3>Stack Technique</h3>
        <p>
          Les langages et frameworks avec lesquels je travaille le plus, ainsi que les outils du quotidien.
        </p>
      </div>

      <div className="stack-categories">
        {Object.entries(techStacks).map(([category, items]) => (
          <div key={category} className="stack-category">
            <h4>{category}</h4>
            <div className="stack-icons">
              {items.map((tech) => (
                <img
                  key={tech}
                  src={`/icons/${tech}.svg`}
                  alt={tech}
                  className="tech-icon"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
