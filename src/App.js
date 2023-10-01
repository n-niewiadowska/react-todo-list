import './App.css';
import { Tasks } from './Components/Tasks'

// The main app.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>what to do today? :3</h1>
      </header>
      <Tasks />
    </div>
  );
}

export default App;