import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";
import SkillPage from "./components/SkillsPage";
import Works from "./components/Works";
import { Element } from 'react-scroll';

import { useTheme } from "./ThemeContext";
import { useEffect, useState } from "react";
import ScrollUpIcon from "./utility/ScrollUpIcon";


function App() {

  const { darkMode } = useTheme();
  const [scrollToTop,setScrollToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if(window.scrollY > 50){
        setScrollToTop(true);
      } 
      else{
        setScrollToTop(false);
      }
    };

    window.addEventListener('scroll',toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  },[])

  return (

    <div className={`${darkMode ? 'light-mode' : 'dark-mode'}`}>
      <Navbar />
      <Element name='frontpage'>
        <FrontPage />

      </Element>
      <Element name='aboutpage'>
        <AboutPage />

      </Element>
      <Element name='skillpage'>
        <SkillPage />

      </Element>
      <Element name='qualificationpage'>
        <Qualification />

      </Element>
      <Element name='workpage'>
        <Works />

      </Element>
      <Element name='contactpage'>
        <Contact />

      </Element>
      <Element>
        <Footer />

      </Element>
      {scrollToTop && <ScrollUpIcon/>}
    </div>
  );
}

export default App;
