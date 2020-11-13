import styled from 'styled-components';
import SectionContainer from './SectionContainer';
// import Mascot1 from '../assets/images/mascot1.png';
// import Mascot2 from '../assets/images/mascot2.png';
import { useState } from 'react';

const HistoryContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: var(--color-primary);
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: none;
`;

function History(props) {
  return (
    <HistoryContainer {...props}>
      <Button>
        1
      </Button>
    </HistoryContainer>
  )
}

export default History;