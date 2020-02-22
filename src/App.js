import React, {useState} from 'react';
import Form from "./components/Form/Form"
import GoalItems from "./components/GoalItems/GoalItems"
import './App.css';


function App() {
  const [courseGoals, setCourseGoals] = useState([])
  
  function addNewGoalHandler(newGoal){
    setCourseGoals(function(prevGoal){
      return prevGoal.concat(newGoal);
    })
  }

  return (
    <div className="App">
      <h1>Notes App</h1>
      <Form onAddGoal = {addNewGoalHandler}/>
      <GoalItems goal={courseGoals}/>
    </div>
  );
}

export default App;
