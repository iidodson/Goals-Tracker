import React, { useState }from 'react';
import "./Form.css"

function Form(props) {
    const [enteredText, setEnteredText] = useState("");

    function onGoalCreation(event){
        event.preventDefault();
        
        let newGoal = {
            id: Math.random(),
            text: enteredText
        }

        setEnteredText("");
    
        props.onAddGoal(newGoal);
    }

    function onTextChangeHandler(event) {
        setEnteredText(event.target.value);
    }

    return(
        <form onSubmit={onGoalCreation}>
            <label className="label">
            Enter a course goal:
            </label>
            <input type="text" value={enteredText} onChange={onTextChangeHandler} />
            <button>Submit</button>
        </form>
    );
}

export default Form;