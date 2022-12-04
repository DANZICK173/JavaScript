import { Routes, Route } from 'react-router-dom';
import './App.css';

import Start from './Components/Start/Start.component';
import Game from './Components/MainGame/Game/Game.component';

function App() {
  return (
    <Routes>
        <Route index element={<Start />} />
        <Route path="/Game" element={<Game />} />
    </Routes>
  );
}

export default App;

