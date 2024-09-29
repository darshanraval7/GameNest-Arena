import React, { useState, useEffect, useRef } from "react";
import "./SnakeGame.css"; // Use the same CSS style as other games

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) });
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(200);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  
  const canvasRef = useRef(null);

  // Move the snake
  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1); // Increase score when food is eaten
      setFood({
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      });
    } else {
      newSnake.pop();
    }

    if (checkCollision(head, newSnake)) {
      setGameOver(true);
      return;
    }

    setSnake(newSnake);
  };

  // Check if snake collides with itself or walls
  const checkCollision = (head, body) => {
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) return true; // Wall collision
    for (let i = 1; i < body.length; i++) {
      if (head.x === body[i].x && head.y === body[i].y) return true; // Self collision
    }
    return false;
  };

  // Handle key input for direction change
  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37: // Left
        if (direction.x !== 1) setDirection({ x: -1, y: 0 });
        break;
      case 38: // Up
        if (direction.y !== 1) setDirection({ x: 0, y: -1 });
        break;
      case 39: // Right
        if (direction.x !== -1) setDirection({ x: 1, y: 0 });
        break;
      case 40: // Down
        if (direction.y !== -1) setDirection({ x: 0, y: 1 });
        break;
      default:
        break;
    }
  };

  // Game loop
  useEffect(() => {
    if (gameOver) return;
    const gameInterval = setInterval(moveSnake, speed);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(gameInterval);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, direction, gameOver]);

  // Reset game
  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 0, y: 0 });
    setGameOver(false);
    setFood({ x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) });
    setScore(0);
  };

  return (
    <div className="snake-game-container">
      <div className="score-board">
        <h2>Score: {score}</h2>
        {gameOver && <h2>Game Over! <button onClick={resetGame}>Restart</button></h2>}
      </div>
      <div className="game-board">
        {Array.from({ length: 20 }).map((_, y) => (
          <div key={y} className="row">
            {Array.from({ length: 20 }).map((_, x) => (
              <div
                key={x}
                className={`cell ${snake.some(s => s.x === x && s.y === y) ? "snake" : ""} ${
                  food.x === x && food.y === y ? "food" : ""
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnakeGame;
