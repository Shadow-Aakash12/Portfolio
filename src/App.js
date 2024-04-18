import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Section from './components/Section';
import Share from './components/Share';
import ScrollReveal from 'scrollreveal';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    // reset: true
  });

  sr.reveal('.logo',{delay:200, origin: 'left'});
  sr.reveal('.navbar',{delay:200, origin: 'top'});
  sr.reveal('.menu-btn',{delay:520, origin: 'right'});

  sr.reveal('.home-text span',{delay:600, origin: 'top'});
  sr.reveal('.home-text h1',{delay:680, origin: 'left'});
  sr.reveal('.home-text p',{delay:700, origin: 'right'});
  sr.reveal('.main-btn',{delay:860, origin: 'left'});

  sr.reveal('.social',{delay:950, origin: 'bottom'});

  sr.reveal('.home-img',{delay:1000, origin: 'right'});

  return (
    <div className="App">
      <video autoPlay loop muted id="myVideo">
        <source src="/Video/production_id_4990317 (1080p).mp4" type="video/mp4" />
      </video> 
      <Header/>
      <Section/>
      <Share/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
