import { FlexRowContainer, FlexColumnContainer } from './Containers'
import logoWhite from '../assets/images/logo/logo-white.png';
import styled from 'styled-components';

const Image = styled.img`
  position: relative;
  top: 1vw;
  width: 7vw;
`;
const Who = styled.p`
  font-size: 1.25vw;
  font-weight: bold;
  color: white;
`;

function Footer(props) {
  return (
    <FlexRowContainer {...props}>
      <FlexColumnContainer>
        <Image src={logoWhite}/>
        <Who>เอสกิโมแหม๊น</Who>
      </FlexColumnContainer>
    </FlexRowContainer>
  )
}

export default Footer;