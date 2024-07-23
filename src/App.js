import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AnnnaByrne from './components/AnnnaByrne';
import ThaySay from './components/ThaySay';
import MeetOurNannies from './components/MeetOurNannies';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Services />
      <AnnnaByrne />
      <ThaySay />
      <MeetOurNannies />
      <Contact />
      <AboutMe />
      <Footer />
    </Fragment>
  );
}

export default App;
