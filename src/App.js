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
import { throttle, debounce } from 'throttle-debounce';

import { Waypoint } from 'react-waypoint';
const setAppHeightThrottled = throttle(250, (callback) => {
  callback(`${document.body.scrollHeight}px`)
  // console.log('aaa"')
})

function App() {
  const [appHeight, setAppHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState();

  AOS.init({
    duration: 1000,
    easing: "ease-out",
    // delay: 100,
    anchorPlacement: "center-center",
  });

  window.addEventListener("DOMContentLoaded", () => {
    setAppHeightThrottled(setAppHeight);
  })
  window.addEventListener("resize", () => {
    setAppHeightThrottled(setAppHeight);
  })

  return (
    <>
      <Snow/>
      <MainNav appHeight={appHeight} active={currentSection}/>
      {/* <History /> */}
      <Home waypoint={<Waypoint onEnter={() => setCurrentSection("home")}/>}
      id="home" sectionHeight="80vw"/>
      
      <Intro waypoint={<Waypoint onEnter={() => setCurrentSection("intro")}/>}
      id="intro" sectionHeight="25vmin" data-aos="fade-up"/>
      
      <Present waypoint={<Waypoint onEnter={() => setCurrentSection("present")}/>}
      id="present" sectionHeight="25vmin" marginTop="50vmin" data-aos="fade-up"/>
      
      <Sites waypoint={<Waypoint onEnter={() => setCurrentSection("sites")}/>}
      id="sites" sectionHeight="min(75vw, 1150px)" marginTop="45vmin" paddingTop="8vw"/>
      
      <Activities waypoint={<Waypoint onEnter={() => setCurrentSection("activities")}/>}
      id="activities" sectionHeight="85vw" marginTop="20vw" paddingTop="8vw"/>
            
      <Outfits waypoint={<Waypoint onEnter={() => setCurrentSection("outfits")}/>}
      id="outfits" sectionHeight="80vw" marginTop="20vw" paddingTop="8vw"/>
      {console.log(currentSection)}
    </>
  );
}

export default App;
