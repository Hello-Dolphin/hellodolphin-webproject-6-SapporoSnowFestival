import './App.css';
import MainNav from './components/MainNav';
import Home from './components/Home';
import styled from 'styled-components';

const Container = styled.div`
  height: 15000px;
`;

function App() {
  return (
    <Container>
      <MainNav />
      <Home />
    </Container>
  );
}

export default App;
