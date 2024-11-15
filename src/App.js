import './App.css';
import Home from './Components/Home';
import NoteState from './Contexts/Note/NoteState';

function App() {
  return (
    <div>
      <NoteState>
        <Home/>
      </NoteState>
    </div>
  );
}

export default App;
