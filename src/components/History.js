import styled from 'styled-components';
import { SectionContainer } from './Containers';
import mascot2 from '../assets/images/mascot/mascot2.png';

const HistoryContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function History(props) {
  return (
    <HistoryContainer {...props}>

    </HistoryContainer>
  )
}

export default History;