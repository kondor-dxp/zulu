import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Elements from './components/Elements';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Service from './components/Service';
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
        
        <Service 
          id="service1"
          title="Corporate Security Consulting"
          subtitle="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce vel justo et odio scelerisque convallis. In hac habitasse platea dictumst. Donec sed ligula nec libero facilisis tincidunt. Aenean ut odio ut nisi eleifend convallis. Vestibulum et ligula a nunc ultrices fermentum. Curabitur vel lorem at sapien faucibus feugiat."
          text2="Sed a eros ac lectus auctor interdum. Nam suscipit, nunc non interdum fringilla, elit ex varius orci, non pulvinar mi justo a ligula. Ut nec lacus id justo vestibulum dictum. Quisque ut justo at augue mattis feugiat. Integer id eros vel lectus vehicula pharetra. Pellentesque et nunc id odio interdum venenatis. Cras vel dui vel felis sollicitudin fringilla sit amet non urna."
          text3="Sed non odio quis libero gravida cursus ac a erat. Suspendisse potenti. Ut congue, lacus vel aliquet bibendum, nisl nunc scelerisque odio, in porttitor urna eros sed purus. Nunc auctor, purus nec posuere egestas, velit lacus vehicula odio, sit amet varius lacus orci vel orci."
          orientation="right"
          image="/images/zuluService1.jpg"
        ></Service>
        
        <Service 
          id="service2"
          title="Software Research and Development"
          subtitle="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce vel justo et odio scelerisque convallis. In hac habitasse platea dictumst. Donec sed ligula nec libero facilisis tincidunt. Aenean ut odio ut nisi eleifend convallis. Vestibulum et ligula a nunc ultrices fermentum. Curabitur vel lorem at sapien faucibus feugiat."
          text2="Sed a eros ac lectus auctor interdum. Nam suscipit, nunc non interdum fringilla, elit ex varius orci, non pulvinar mi justo a ligula. Ut nec lacus id justo vestibulum dictum. Quisque ut justo at augue mattis feugiat. Integer id eros vel lectus vehicula pharetra. Pellentesque et nunc id odio interdum venenatis. Cras vel dui vel felis sollicitudin fringilla sit amet non urna."
          text3="Sed non odio quis libero gravida cursus ac a erat. Suspendisse potenti. Ut congue, lacus vel aliquet bibendum, nisl nunc scelerisque odio, in porttitor urna eros sed purus. Nunc auctor, purus nec posuere egestas, velit lacus vehicula odio, sit amet varius lacus orci vel orci."
          orientation="left"
          image="/images/zuluService2.jpg"
        ></Service>

        <Service 
          id="service3"
          title="Travel Security"
          subtitle="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce vel justo et odio scelerisque convallis. In hac habitasse platea dictumst. Donec sed ligula nec libero facilisis tincidunt. Aenean ut odio ut nisi eleifend convallis. Vestibulum et ligula a nunc ultrices fermentum. Curabitur vel lorem at sapien faucibus feugiat."
          text2="Sed a eros ac lectus auctor interdum. Nam suscipit, nunc non interdum fringilla, elit ex varius orci, non pulvinar mi justo a ligula. Ut nec lacus id justo vestibulum dictum. Quisque ut justo at augue mattis feugiat. Integer id eros vel lectus vehicula pharetra. Pellentesque et nunc id odio interdum venenatis. Cras vel dui vel felis sollicitudin fringilla sit amet non urna."
          text3="Sed non odio quis libero gravida cursus ac a erat. Suspendisse potenti. Ut congue, lacus vel aliquet bibendum, nisl nunc scelerisque odio, in porttitor urna eros sed purus. Nunc auctor, purus nec posuere egestas, velit lacus vehicula odio, sit amet varius lacus orci vel orci."
          orientation="right"
          image="/images/zuluService3.jpg"
        ></Service>

        <Service 
          id="service4"
          title="Cyber Security"
          subtitle="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce vel justo et odio scelerisque convallis. In hac habitasse platea dictumst. Donec sed ligula nec libero facilisis tincidunt. Aenean ut odio ut nisi eleifend convallis. Vestibulum et ligula a nunc ultrices fermentum. Curabitur vel lorem at sapien faucibus feugiat."
          text2="Sed a eros ac lectus auctor interdum. Nam suscipit, nunc non interdum fringilla, elit ex varius orci, non pulvinar mi justo a ligula. Ut nec lacus id justo vestibulum dictum. Quisque ut justo at augue mattis feugiat. Integer id eros vel lectus vehicula pharetra. Pellentesque et nunc id odio interdum venenatis. Cras vel dui vel felis sollicitudin fringilla sit amet non urna."
          text3="Sed non odio quis libero gravida cursus ac a erat. Suspendisse potenti. Ut congue, lacus vel aliquet bibendum, nisl nunc scelerisque odio, in porttitor urna eros sed purus. Nunc auctor, purus nec posuere egestas, velit lacus vehicula odio, sit amet varius lacus orci vel orci."
          orientation="left"
          image="/images/zuluService4.jpg"
        ></Service>

        <Projects></Projects>
        
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <Elements></Elements>
    </>
  );
}
export default App