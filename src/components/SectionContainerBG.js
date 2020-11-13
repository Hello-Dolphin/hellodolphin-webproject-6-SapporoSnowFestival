import styled from 'styled-components';
import SectionContainer from './SectionContainer';

const SectionContainerBG = styled(SectionContainer)`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export default SectionContainerBG;