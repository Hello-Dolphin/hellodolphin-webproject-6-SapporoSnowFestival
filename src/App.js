import styled from 'styled-components';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import MainNav from './components/MainNav';
import Home from './components/Home';
import Snow from './components/Snow';
import Intro from './components/Intro';
import Present from './components/Present';
import History from './components/History';
import Outfits from './components/Outfits';
import Sites from './components/Sites';
import Activities from './components/Activities';
import Producer from './components/Producer';
import { throttle, debounce } from 'throttle-debounce';
import { Waypoint } from 'react-waypoint';

const setAppHeightThrottled = throttle(300, (callback) => {
  callback(`${document.body.scrollHeight}px`)
});
const jumpToSection = debounce(1, (section) => {
  let target = document.querySelector(`#${section}`);
  if (!target) return null;
  target.scrollIntoView();
})

let setCurrentSectionDebounced;

function App() {
  const [appHeight, setAppHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState("home");

  AOS.init({
    duration: 1000,
    easing: "ease-out",
    // delay: 100,
    anchorPlacement: "center-center",
  });

  useEffect(() => {
    setCurrentSectionDebounced = debounce(1, false, (section) => {
      setCurrentSection(section);
    });
    // setCurrentSectionDebounced = setCurrentSection;
  }, [])

  window.addEventListener("DOMContentLoaded", () => {
    setAppHeightThrottled(setAppHeight);
  })
  window.addEventListener("resize", () => {
    setAppHeightThrottled(setAppHeight);
    jumpToSection(currentSection);
  })

  return (
    <>
      <Snow/>
      
      <MainNav appHeight={appHeight} active={currentSection} onClick={setCurrentSection}/>

      <Home waypoint={<Waypoint onEnter={() => setCurrentSectionDebounced("home")}/>}
      id="home" sectionHeight="80vw"/>

      <Intro waypoint={<Waypoint onEnter={() => setCurrentSectionDebounced("intro")}/>}
      id="intro" sectionHeight="25vmin" marginTop="15vw" data-aos="fade-up"/>
      
      <Present waypoint={<Waypoint onEnter={() => setCurrentSectionDebounced("present")}/>}
      id="present" sectionHeight="25vmin" marginTop="50vmin" data-aos="fade-up"/>

      <History waypoint={<Waypoint onEnter={() => setCurrentSectionDebounced("history")}/>}
      id="history" sectionHeight="85vw" marginTop="40vw" paddingTop="8vw"/>
      
      <Sites waypoint={<Waypoint onEnter={() => setCurrentSectionDebounced("sites")}/>}
      id="sites" sectionHeight="min(75vw, 1150px)" marginTop="20vmin" paddingTop="10vw"/>
      
      <Activities waypoint={<Waypoint onEnter={() => setCurrentSectionDebounced("activities")}/>}
      id="activities" sectionHeight="85vw" marginTop="20vw" paddingTop="10vw"/>
            
      <Outfits waypoint={<Waypoint onEnter={() => setCurrentSectionDebounced("outfits")}/>}
      id="outfits" sectionHeight="80vw" marginTop="20vw" paddingTop="10vw"/>

      <Producer waypoint={<Waypoint onEnter={() => setCurrentSectionDebounced("producer")}/>}
      id="producer" sectionHeight="78vw" marginTop="20vw" paddingTop="12vw"/>

      {/* {console.log(currentSection)} */}
    </>
  );
}

export default App;
