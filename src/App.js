import styled from 'styled-components';
import './App.css';
import MainNav from './components/MainNav';
import Home from './components/Home';
import Intro from './components/Intro';
import Present from './components/Present';

const Container = styled.div`
  height: 15000px;
`;

function App() {
  return (
    <Container>
      <MainNav />
      <Home />
      <Intro />
      <Present />
      <div>ABC</div>
    </Container>
  );
}

export default App;
