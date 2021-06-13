import './App.scss';
import { Logomobile }      from './Components/logomobile/Logomobile';
import { CharacterDisplay} from  './Components/characterDisplay/CharacterDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>holy</h1>     
        </div>
      </header>
      {/* <Logomobile /> */}
      <CharacterDisplay />

    </div>
  );
}  

export default App;
