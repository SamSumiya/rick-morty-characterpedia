// Imported from local folders and files
// import { useCharacters } from './hooks/useCharacters';
import { FilterCharacters } from './components/FilterCharacters.jsx';
import { NavBar } from './components/NavBar.jsx';
import { Home } from './components/Home';

import './App.css';

// Imported from outside resoucrs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


 
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
