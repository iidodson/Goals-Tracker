import React, {useState} from 'react';
import Form from "./components/Form/Form"
import GoalItems from "./components/GoalItems/GoalItems"
import './App.css';


function App() {
  const [courseGoals, setCourseGoals] = useState(
    [
      {
        id: 1,
        text: "My first goal"
      },
      {
        id: 2,
        text: "My second goal"
      }
    ]
  )
  
  function addNewGoalHandler(newGoal){
    setCourseGoals(function(prevGoal){
      return prevGoal.concat(newGoal);
    })
  }

  return (
    <div className="App">
      <h1>Course Goals</h1>
      <Form onAddGoal = {addNewGoalHandler}/>
      <GoalItems goal={courseGoals}/>
    </div>
  );
}

export default App;
