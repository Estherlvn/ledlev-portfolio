import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import StackSection from './components/StackSection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home" style={{ height: '100vh' }}>
      <HeroSection />
      </section>
      <StackSection />
      <section id="projects" style={{ height: '100vh' }}>
        <h1>Projets</h1>
      </section>
      <section id="contact" style={{ height: '100vh' }}>
        <h1>Contact</h1>
      </section>
    </>
  );
}

export default App;
