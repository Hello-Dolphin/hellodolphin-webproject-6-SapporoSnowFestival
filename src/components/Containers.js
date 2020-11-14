import styled from 'styled-components';

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.sectionHeight};
  margin-top: ${props => props.marginTop};
  padding-top: ${props => props.paddingTop};
  ${props => props.bgColor ? `background-color: ${props.bgColor}` : ''};
`;
const SectionContainerBG = styled(SectionContainer)`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`;
const FlexColumnContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props.sectionWidth};
  position: ${props => props.absolute ? "absolute" : ""};
`;
const FlexRowContainer = styled(FlexColumnContainer)`
  flex-direction: row;
`;

export {
  SectionContainer,
  SectionContainerBG,
  FlexColumnContainer,
  FlexRowContainer
};