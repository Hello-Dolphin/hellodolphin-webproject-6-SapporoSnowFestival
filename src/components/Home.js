import styled from 'styled-components';
import bg101 from '../assets/images/bg/bg1.svg';
import mascot1 from '../assets/images/mascot/mascot1.png';
import SectionContainer from './SectionContainer';

const sectionHeight = "70vmax";

const HomeContainer = styled(SectionContainer)`
  height: ${sectionHeight};
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -30vw;
`;

const MascotContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${sectionHeight};
  & img {
    position: relative;
    top: -3.5vmax;
    width: 15vmax;
  }
`;

const LogoTypo = styled.div`
  position: absolute;
  width: 100%;
  top: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

function Home() {
	return (
    <HomeContainer className="home" bg={bg101}>
      <LogoTypo>
        <h1 className="primary">Sapporo</h1>
        <h2 className="secondary">snow festival</h2>
      </LogoTypo>
      <MascotContainer>
        <img src={mascot1} alt="Main mascot"/>
      </MascotContainer>
    </HomeContainer>
	)
}

export default Home;