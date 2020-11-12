import styled from 'styled-components';

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.sectionHeight};
  margin-top: ${props => props.marginTop};
  ${props => props.bgColor ? `background-color: ${props.bgColor}` : ''};
`;

export default SectionContainer;