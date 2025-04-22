import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddQuestion.css';

const AddQuestion = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    questionTitle: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    rightAnswer: '',
    category: '',
    difficultylevel: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/Question/add`, formData)
      .then(() => {
        alert('Question added successfully!');
        navigate('/all-questions');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h3>Add Question</h3>
      <form onSubmit={handleSubmit}>
        {['questionTitle', 'option1', 'option2', 'option3', 'option4', 'rightAnswer'].map((field) => (
          <div className="mb-3" key={field}>
            <input
              type="text"
              className="form-control"
              name={field}
              placeholder={`Enter ${field}`}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Category Dropdown */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="oops">oops</option>
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="machine learning">machine learning</option>
          </select>
        </div>

        {/* Difficulty Dropdown */}
        <div className="mb-3">
          <label className="form-label">Difficulty Level</label>
          <select
            name="difficultylevel"
            className="form-control"
            value={formData.difficultylevel}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Difficulty --</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;
