import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllQuestions.css';

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    
    if (searchCategory.trim() === '') {

      console.log(`http://localhost:8080/Question/allQuestions`);
       
      axios.get(`http://localhost:8080/Question/allQuestions`)
        .then(res => setQuestions(res.data))
        .catch(err => console.error(err));
    } else {
      axios.get(`http://localhost:8080/Question/category/${searchCategory.toLowerCase()}`)
        .then(res => setQuestions(res.data))
        .catch(err => console.error(err));
    }
  }, [searchCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCategory(category);
  };

  return (
    <div className="container mt-4">
      <h3>All Questions</h3>

      <form className="d-flex mb-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by category ( java, python, oops, meachine learning)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      {questions.length === 0 && <p>No questions found for category "{searchCategory}"</p>}

      {questions.map((q, idx) => (
        <div key={idx} className="card my-2">
          <div className="card-body">
            <h5>{q.questionTitle}</h5>
            <ul>
              <li>{q.option1}</li>
              <li>{q.option2}</li>
              <li>{q.option3}</li>
              <li>{q.option4}</li>
            </ul>
            <p><strong>Category:</strong> {q.category}</p>
            <p><strong>Difficulty:</strong> {q.difficultylevel}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllQuestions;
