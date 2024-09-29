import React from 'react';
import { Link } from 'react-router-dom';
import minionBanner from './minion.png'; // Banner image with Minions
import './HomePage.css';

const HomePage = () => {
  // Sample total plays for each game (replace with dynamic data as needed)
  const games = [
    {
      name: "Tic Tac Toe",
      imgSrc: "./tictactoe.jpg",
      totalPlays: 45, // Total plays for Tic Tac Toe
      link: "/tic-tac-toe"
    },
    {
      name: "Guess The Number",
      imgSrc: "./guessthenumber.jpg"
      ,
      totalPlays: 30, // Total plays for Guess The Number
      link: "/guess-the-number"
    },
    {
      name: "Snake Game",
      imgSrc: "./snakegame.jpg"
      ,
      totalPlays: 30, // Total plays for Guess The Number
      link: "/snake-game"
    }
  ];

  return (
    <div className="homepage"> {/* Added class "homepage" */}
      <div className="homepage-container">
        <section className="banner">
          <img src={minionBanner} alt="Minion Fun" className="banner-image" />
          <div className="banner-content">
            <h1 className="banner-title">Welcome to GameNest Arena</h1>
            <p className="banner-subtitle">Play Fun and Addictive Games with a Minions Twist!</p>
            <Link to="/" className="banner-btn">Start Playing</Link>
          </div>
        </section>

        {/* New Total Game Plays Section */}
        <div className="total-plays">
          <h3>Total Game Plays: {games.reduce((acc, game) => acc + game.totalPlays, 0)}</h3>
        </div>

        {/* Games Section */}
        <div className="games-section">
          <h2>Choose Your Game</h2>
          <div className="game-cards">
            {games.map((game, index) => (
              <Link to={game.link} className="game-card" key={index}>
                <img src={game.imgSrc} alt={game.name} />
                <h4>{game.name}</h4>
                <p>Total Plays: {game.totalPlays}</p> {/* Display total plays */}
              </Link>
            ))}
          </div>
        </div>

        {/* Minion Animation Section */}
        <div className="minion-animation">
          <img src="./minions.gif" alt="Minion Animation" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
