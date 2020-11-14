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

const Container = styled.div`
  height: 15000px;
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
    <Container>
      {/* <Snow /> */}
      <MainNav />
      <Activities sectionHeight="85vw"/>
      <Sites sectionHeight="65vw"/>
      <Outfits sectionHeight="75vw"/>
      <Home sectionHeight="75vw"/>
      <Intro sectionHeight="25vmin" data-aos="fade-up"/>
      <Present sectionHeight="25vmin" marginTop="50vmin" data-aos="fade-up" id="Present"/>
      <History />
    </Container>
  );
}

export default App;
