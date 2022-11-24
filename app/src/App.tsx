import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload Excel File</h1>
        <div className="container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="excel-file">Choose File</label>
            <input
              type="file"
              id="excel-file"
              className="form-control"
              />
          </div>
        </form>
      </div>
      </header>
    </div>
  );
}

export default App;
