import './App.css';
import Home from './Pages/Home';
import NoteState from './Contexts/Note/NoteState';
import { CardHoverEffectDemo } from './Components/Aceternity Components/source/Card';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AddNote from './Pages/AddNote';

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Home/>
          <Routes>
            <Route exact path='/addnotes' element={<AddNote/>}></Route>
            <Route exact path='/mynotes' element={<CardHoverEffectDemo/>}></Route>
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
