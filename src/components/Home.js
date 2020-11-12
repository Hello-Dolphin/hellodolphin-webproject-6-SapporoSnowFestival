import styled from 'styled-components';
import bg101 from '../assets/images/bg/bg1.svg';
import mascot1 from '../assets/images/mascot/mascot1.png';
const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 70vmax;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -30vw;
`;

function Home(props) {
	return (
    <StyledDiv className="home" bg={bg101}>
      {/* <img src={mascot1} alt="Main mascot"/> */}
    </StyledDiv>
	)
}

export default Home;