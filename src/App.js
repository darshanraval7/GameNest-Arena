import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import GuessTheNumber from './components/GuessTheNumber/GuessTheNumber';
import TicTacToe from './components/TicTacToe/TicTacToe';
import SnakeGame from './components/SnakeGame/SnakeGame';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guess-the-number" element={<GuessTheNumber />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/snake-game" element={<SnakeGame />} />
            {/* Add more routes for additional games */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
