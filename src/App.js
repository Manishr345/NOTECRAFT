import './App.css';
import Home from './Pages/Home';
import NoteState from './Contexts/Note/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AddNote from './Pages/AddNote';
import { AppleCardsCarouselDemo } from './Components/Aceternity Components/source/Carousel';

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/addnotes' element={<AddNote/>}></Route>
            <Route exact path='/mynotes' element={<AppleCardsCarouselDemo/>}></Route>
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
