import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateQuiz.css';

const CreateQuiz = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [numQ, setNumQ] = useState('');
  const navigate = useNavigate();

  const startQuiz = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/Quiz/create`, null, {
        params: {
          category: category,
          numQ: numQ,
          title: title
        }
      });
      const createdQuizId = res.data;
      navigate(`/Quiz/${createdQuizId}`);
    } 
    catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-container">
      <div className="quiz-card">
        <h2>Start Knowledge Check</h2>

        <div className="mb-3">
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="oops">oops</option>
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="machine learning">machine learning</option>
          </select>
        </div>

        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ fontFamily: 'Times New Roman', fontSize: '14px' }}
        />

        <input
          type="number"
          className="form-control my-2"
          placeholder="Enter Number of Questions"
          value={numQ}
          onChange={(e) => setNumQ(e.target.value)}
          style={{ fontFamily: 'Times New Roman', fontSize: '14px' }}
        />

        <button
          className="btn btn-primary"
          onClick={startQuiz}
          disabled={!category || !title || !numQ}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default CreateQuiz;
