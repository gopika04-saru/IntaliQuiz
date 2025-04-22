import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      
      {/* Left side: Logo + QuizApp */}
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img 
          src={logo} 
          alt="Quiz Logo"
          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }}
        />
        <span className="ms-2">QuizApp</span>
      </Link>

      {/* Right side: Navigation Links + Button */}
      <div className="d-flex align-items-center">
        <ul className="navbar-nav flex-row align-items-center me-3">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/create-quiz">Home</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/all-questions">All Questions</Link>
          </li>
        </ul>
        <Link to="/add-question">
          <button className="btn add-question-btn">Add Question</button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
