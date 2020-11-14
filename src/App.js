import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Place from './components/Place';
import Activity from './components/Activity';
import Producer from './components/Producer';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Place />
      <Activity/>
      <Producer/>
    </div>
  );
}

export default App;
