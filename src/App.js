import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Course Goals</h1>
      <form onSubmit={console.log("hi")}>
      <label>
        Enter a course goal:
        <input type="text" name="name" />
      </label>
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
