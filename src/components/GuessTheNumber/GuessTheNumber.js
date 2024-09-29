import React, { useState } from 'react';
import styles from './GuessTheNumber.module.css'; // Import CSS module

const GuessTheNumber = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  }

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    setAttempts(attempts + 1);
    
    if (userGuess === targetNumber) {
      setMessage(`🎉 Congratulations! You've guessed the number in ${attempts + 1} attempts!`);
    } else if (userGuess < targetNumber) {
      setMessage('⬇️ Too low! Try again.');
    } else {
      setMessage('⬆️ Too high! Try again.');
    }
    
    setGuess('');
  };

  const resetGame = () => {
    setTargetNumber(generateRandomNumber());
    setAttempts(0);
    setMessage('');
    setGuess('');
  };

  return (
    <div className={styles.guessTheNumber}>
      <h2>Guess the Number Game</h2>
      <p>Guess a number between 1 and 100:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className={styles.guessInput}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.submitButton} onClick={handleGuess}>Submit Guess</button>
        <button className={styles.resetButton} onClick={resetGame}>Reset Game</button>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default GuessTheNumber;
