
import './App.css';
import Graph from './components/graphic/Graph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
    
        <Graph
          nombrePlanta="plant1"
          nombreSensor="2000"
          
        />
        <Graph
          nombrePlanta="plant1"
          nombreSensor="60"
          
        />
      </header>
    </div>
  );
}

export default App;
