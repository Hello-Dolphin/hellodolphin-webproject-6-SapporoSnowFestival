import styled from 'styled-components';
import { SectionContainer } from './Containers';

const PresentContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h1`
  font-size: min(72px, 12vw);
  color: var(--color-primary);
`;
const SubHeading = styled.h1`
  position: relative;
  top: -.2em;
  font-size: min(48px, 8vw);
  color: white;
  letter-spacing: .15 em;
`;

function Present(props) {
  return (
    <PresentContainer {...props}>
      <Heading>เอสกิโมแหม๊น</Heading>
      <SubHeading>Present</SubHeading>
    </PresentContainer>
  )
}

export default Present;