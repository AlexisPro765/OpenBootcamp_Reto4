import logo from './logo.svg';
import './App.css';
import { FiguraComponent } from './components/FiguraComponent';

function App() {
  return (
    <div className="App" style={{ height: '100vh', display: 'flex', alignItems: 'center'}}>
                <FiguraComponent style={{'border-style': 'solid'}} />
        
    </div>
  );
}

export default App;
