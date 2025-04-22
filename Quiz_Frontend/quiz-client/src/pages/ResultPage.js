import React from 'react';
import './ResultPage.css';
import tick from '../assets/tick.png';

const ResultPage = () => {
  const score = parseInt(localStorage.getItem('score'), 10) || 0;
  let message = '';
  let appreciation = '';

  if (score >= 10) {
    message = 'Excellent!';
    appreciation = 'You did an outstanding job! Keep up the great work!';
  } else if (score >= 6) {
    message = 'Great Job!';
    appreciation = 'You performed really well! Keep pushing yourself!';
  } else if (score >= 3) {
    message = 'Good Effort!';
    appreciation = 'You did well! Keep practicing and you will improve even more!';
  } else {
    message = 'Don’t Worry!';
    appreciation = 'Not bad ! Every step counts towards progress. Try again and improve!';
  }

  return (
    <div className="result-container">
      <h1 className="quiz-heading">Quiz Result</h1>
      <img src={tick} alt="Success Tick" className="tick-icon" />
      <div className="result-content">
        <h2>Your Score: {score}</h2>
        <h4>{message}</h4>
        <p>{appreciation}</p>
      </div>
    </div>
  );
};

export default ResultPage;
