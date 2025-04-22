import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateQuiz from './pages/CreateQuiz';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import AllQuestions from './pages/AllQuestions';
import AddQuestion from './pages/AddQuestion';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/create-quiz" />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/all-questions" element={<AllQuestions />} />
        <Route path="/add-question" element={<AddQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
