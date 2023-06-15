import './App.css';
import SearchForm from './components/SearchForm';
import People from './pages/People';
import Planets from './pages/Planets';
import Home from './pages/Home';
import Error from './pages/Error';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [selected, setSelected] = useState({})
  return (
    <div className="App">
      <SearchForm selected={selected} setSelected={setSelected} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People selected={selected} />} />
        <Route path="/planets" element={<Planets selected={selected} />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
