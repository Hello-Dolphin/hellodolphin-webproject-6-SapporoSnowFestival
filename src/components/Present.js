import styled from 'styled-components';
import { FlexColumnContainer } from './Containers';

const Heading = styled.h1`
  font-size: min(72px, 12vw);
  color: var(--color-primary);
  font-weight: bold;
`;
const SubHeading = styled.h1`
  position: relative;
  top: -.2em;
  font-size: min(48px, 8vw);
  color: white;
  letter-spacing: .15 em;
  font-weight: bold;
`;

function Present(props) {
  return (
    <FlexColumnContainer {...props}>
      {props.waypoint}
      <Heading>เอสกิโมแหม๊น</Heading>
      <SubHeading>Present</SubHeading>
    </FlexColumnContainer>
  )
}

export default Present;