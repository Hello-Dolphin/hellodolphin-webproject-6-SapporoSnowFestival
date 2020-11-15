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

const setAppHeightThrottled = throttle(250, (callback) => {
  callback(`${document.body.scrollHeight}px`)
  // console.log('aaa"')
})
function App() {
  const [appHeight, setAppHeight] = useState(0);

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
      <MainNav height={appHeight}/>
      {/* <History /> */}
      <Home id="home" sectionHeight="80vw" />
      <Intro sectionHeight="25vmin" data-aos="fade-up"/>
      <Present id="present" sectionHeight="25vmin" marginTop="50vmin" data-aos="fade-up" />
      <Sites id="sites" sectionHeight="min(75vw, 1150px)" marginTop="45vmin" paddingTop="8vw" />
      <Activities id="activities" sectionHeight="85vw" marginTop="18vw" paddingTop="8vw" />
      <Outfits id="outfits" sectionHeight="80vw" marginTop="18vw" paddingTop="8vw" />
    </>
  );
}

export default App;
