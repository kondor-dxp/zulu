import './App.css';
import About from './components/Abous';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Elements from './components/Elements';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Stats from './components/Stats';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Hero></Hero>
        <Features></Features>
        <Stats></Stats>
        <CTA></CTA>
        <About></About>
        <Skills></Skills>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <Elements></Elements>
    </>
  );
}
export default App