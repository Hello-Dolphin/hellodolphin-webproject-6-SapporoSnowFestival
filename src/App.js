import './App.css';
import MainNav from './components/MainNav';
import Home from './components/Home';
import styled from 'styled-components';
import Story from './components/Story';

const Container = styled.div`
  height: 15000px;
`;

function App() {
  return (
    <Container>
      <MainNav />
      {/* <Home />  */}
      <Story />
    </Container>
  );
}

export default App;
