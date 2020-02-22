import React from "react";
import "./GoalItems.css"

function GoalItems(props) {

    return(
        <div>
            {props.goal.map(function (goal){
                return <p key ={goal.id} className="goalitem">{goal.text}</p>
            })}
        </div>
    );
}

export default GoalItems;