import styled from 'styled-components';
import bg1 from '../assets/images/bg/bg1.png';
import mascot1 from '../assets/images/mascot/mascot1.png';
import { SectionContainer, SectionContainerBG } from './Containers';

const MascotContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    position: relative;
    top: -3.5vw;
    width: 15vw;
  }
`;

const LogoTypo = styled.div`
  position: absolute;
  width: 100%;
  top: 2vw;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-shadow: 2px 2px 3px red; */
  .primary {
    position: relative;
    left: -6vw;
    font-size: 9vw;
    font-weight: 700;
    color: #ff7e7e;
  }
  .secondary {
    position: relative;
    top: -2.4vw;
    left: 12vw;
    font-size: 3.2vw;
    letter-spacing: .27em;
    color: white;
  }
`;

function Home(props) {
	return (
    <SectionContainerBG className="home" bg={bg1} {...props}>
      <LogoTypo>
        <h1 className="primary">Sapporo</h1>
        <h2 className="secondary">snow festival</h2>
      </LogoTypo>
      <MascotContainer sectionHeight={props.sectionHeight}>
        <img src={mascot1} alt="Main mascot"/>
      </MascotContainer>
    </SectionContainerBG>
	)
}

export default Home;