// Imported from local folders and files
import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { Home } from './components/Home';
import { CharacetrDetail } from './components/CharacetrDetail';
import { NotFound } from './components/NotFound';

// Imported from outside resoucrs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/:characterId" element={<CharacetrDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
