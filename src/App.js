// Imported from local folders and files
import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { Home } from './components/Home';
import { CharacterDetail } from './components/CharacterDetail';
import { NotFound } from './components/NotFound';

// Imported from outside resoucrs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:characterId" element={<CharacterDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
