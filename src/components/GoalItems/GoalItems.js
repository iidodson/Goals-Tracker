import React from "react";
import "./GoalItems.css"

function GoalItems(props) {

    return(
        <div className="goals">
            {props.goal.map(function (goal){
                return ( 
                    <div key ={goal.id} className="notes-item">
                        <span className="dot"></span>
                        <p  className="goalitem">{goal.text}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default GoalItems;