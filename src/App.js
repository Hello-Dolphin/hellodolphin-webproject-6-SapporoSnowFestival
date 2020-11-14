import styled from 'styled-components';
import AOS from 'aos';
import { useEffect } from 'react';
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

const appHeight = `${document.body.scrollHeight}px`;
const Container = styled.div`
  /* height: appHeight; */
`;

function App() {
  AOS.init({
    duration: 1000,
    easing: "ease-out",
    // delay: 100,
    anchorPlacement: "center-center",
  });
  useEffect(() => {
  }, []);

  return (
    <>
      {/* <Snow /> */}
      <MainNav height={appHeight}/>
      {/* <History /> */}
      <Home sectionHeight="80vw" id="Home"/>
      <Intro sectionHeight="25vmin" data-aos="fade-up"/>
      <Present sectionHeight="25vmin" marginTop="50vmin" data-aos="fade-up" id="Present"/>
      <Sites sectionHeight="64vw" marginTop="45vmin" paddingTop="8vw" id="Sites"/>
      <Activities sectionHeight="85vw" marginTop="18vw" paddingTop="8vw" id="Activities"/>
      <Outfits sectionHeight="80vw" marginTop="18vw" paddingTop="8vw" id="Outfits"/>
    </>
  );
}

export default App;
