import styled from 'styled-components';
import { SectionContainer } from './Containers';

const StyledSpan = styled.span`
  font-size: min(24px, 4vw);
  font-weight: bold;
  color: var(--color-primary);
`;
const StyledP = styled.p`
  max-width: 720px;
  font-size: min(18px, 3vw);
  line-height: 2em;
  text-align: center;
`;
const IntroContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function Intro(props) {
  return (
    <IntroContainer {...props}>
      <StyledP>
        <StyledSpan>เพลิดเพลิน...</StyledSpan> ไปกับประติมากรรมน้ำแข็งหิมะขนาดยักษ์<br/>และวิวเมืองซัปโปโรที่ขาวโพลนไปด้วยหิมะแสนโรแมนติก
      </StyledP>
    </IntroContainer>
  )
}

export default Intro;