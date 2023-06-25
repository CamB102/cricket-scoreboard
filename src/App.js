
import ScoreBoard from './ScoreBoard';
import './style.css';

function App() {
  return (
    <div className="App">
      <ScoreBoard className="leftTeam" name="Red" />
      <ScoreBoard className="rightTeam" name="Blue"/>
      <button>Add a new scoreboard</button>
     </div>

  );
}

export default App;
