import React from 'react';
import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendanceList from './components/AttendanceList';
import TaskTwo from './components/TaskTwo';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/list' element={<AttendanceList />} />
            <Route path='/tasktwo' element={<TaskTwo />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
