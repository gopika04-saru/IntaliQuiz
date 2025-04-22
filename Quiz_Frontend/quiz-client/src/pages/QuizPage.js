import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './QuizPage.css';

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSubmitAnswer = useCallback(async () => {
    const currentQuestion = questions[currentIndex];

    const newResponse = {
      id: currentQuestion.id,
      response: selectedOption || 'No Answer',
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);
    setSelectedOption('');

    if (currentIndex === questions.length - 1) {
      try {
        const res = await fetch(`http://localhost:8080/Quiz/submit/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedResponses),
        });

        const result = await res.json();
        localStorage.setItem('score', result);
        navigate('/result');
      } catch (err) {
        console.error('Error submitting quiz:', err);
        alert('Something went wrong. Please try again.');
      }
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, id, navigate, questions, responses, selectedOption]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`http://localhost:8080/Quiz/get/${id}`);
        const data = await res.json();
        setQuestions(data);
      } catch (err) {
        console.error('Error fetching quiz questions:', err);
      }
    };

    fetchQuestions();
  }, [id]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  if (questions.length === 0) return <h2>Loading...</h2>;

  const currentQuestion = questions[currentIndex];
  const options = [
    currentQuestion.option1,
    currentQuestion.option2,
    currentQuestion.option3,
    currentQuestion.option4,
  ];

  return (
    <div className="quiz-container">
      <div className="question-counter">Question {currentIndex + 1} of {questions.length}</div>

      <h3 className="question-title">{currentQuestion.questionTitle}</h3>

      <div className="options">
        {options.map((option, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <button onClick={handleSubmitAnswer}>
        {currentIndex === questions.length - 1 ? 'Submit Quiz' : 'Submit Answer'}
      </button>
    </div>
  );
};

export default QuizPage;
