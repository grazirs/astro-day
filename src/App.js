
import './App.css';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>My First React Project</Title>
        <Subtitle>Astronomy Picture of the Day</Subtitle>
        <Card/>
      </header>
    </div>
  );
}

export default App;
