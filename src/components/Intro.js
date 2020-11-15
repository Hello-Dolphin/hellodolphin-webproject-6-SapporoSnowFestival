import styled from 'styled-components';
import { FlexRowContainer } from './Containers';

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
  color: white;
`;

function Intro(props) {
  return (
    <FlexRowContainer {...props}>
      {props.waypoint}
      <StyledP>
        <StyledSpan>เพลิดเพลิน...</StyledSpan> ไปกับประติมากรรมน้ำแข็งหิมะขนาดยักษ์<br/>และวิวเมืองซัปโปโรที่ขาวโพลนไปด้วยหิมะแสนโรแมนติก
      </StyledP>
    </FlexRowContainer>
  )
}

export default Intro;