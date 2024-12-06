import './App.css';
import NoteState from './Contexts/Note/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AddNote from './Pages/AddNote';
import { AppleCardsCarouselDemo } from './Components/Aceternity Components/source/Carousel';
import About from './Pages/About';
import { NavbarDemo } from './Components/Aceternity Components/source/Navbar';
import { TracingBeamDemo } from './Components/Aceternity Components/source/TracingBeam';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <NavbarDemo/>
          <Routes>
            <Route exact path='/' element={<Signup/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/home' element={<TracingBeamDemo/>}></Route>
            <Route exact path='/addnotes' element={<AddNote/>}></Route>
            <Route exact path='/mynotes' element={<AppleCardsCarouselDemo/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
