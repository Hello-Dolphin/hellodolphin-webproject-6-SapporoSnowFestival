import styled from 'styled-components';
import SectionContainer from './SectionContainer';

const StyledSpan = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  color: var(--color-primary);
`;
const StyledP = styled.p`
  max-width: 720px;
  font-size: 1.125em;
  line-height: 2em;
  text-align: center;
`;
const IntroContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function Intro() {
  return (
    <IntroContainer sectionHeight="30vmin">
      <StyledP>
        <StyledSpan>เพลิดเพลิน...</StyledSpan> ไปกับประติมากรรมน้ำแข็งหิมะขนาดยักษ์<br/>และวิวเมืองซัปโปโรที่ขาวโพลนไปด้วยหิมะแสนโรแมนติก
      </StyledP>
    </IntroContainer>
  )
}

export default Intro;