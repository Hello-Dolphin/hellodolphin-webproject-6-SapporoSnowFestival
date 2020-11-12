import styled from 'styled-components';
import bg101 from '../assets/images/bg/bg1.svg';
import mascot1 from '../assets/images/mascot/mascot1.png';

const sectionHeight = "70vmax";

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
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
  top: 4.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .primary {
    position: relative;
    left: -5vw;
    font-size: 7.5vw;
    font-weight: 700;
    color: #ff7e7e;
  }
  .secondary {
    position: relative;
    top: -1.8vw;
    left: 9vw;
    font-size: 2.5vw;
    letter-spacing: .26em;
    color: white;
  }
`;

function Home() {
	return (
    <StyledDiv className="home" bg={bg101}>
      <LogoTypo>
        <h1 className="primary">Sapporo</h1>
        <h2 className="secondary">snow festival</h2>
      </LogoTypo>
      <MascotContainer>
        <img src={mascot1} alt="Main mascot"/>
      </MascotContainer>
    </StyledDiv>
	)
}

export default Home;