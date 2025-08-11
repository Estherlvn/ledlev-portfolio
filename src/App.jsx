import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import StackSection from './components/StackSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home" style={{ height: '100vh' }}>
      <HeroSection />
      </section>
      <StackSection />
      <ExperienceSection />
      <section id="projects" style={{ height: '100vh' }}>
      <ProjectSection />
      </section>
      <section id="contact" style={{ height: '100vh' }}>
        <h1>Contact</h1>
      </section>
    </>
  );
}

export default App;
