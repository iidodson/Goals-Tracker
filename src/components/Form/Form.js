import React from 'react';
// import "./Form.css"


function Form() {
    return(
        <form onSubmit={console.log("hi")}>
            <label className="label">
            Enter a course goal:
            </label>
            <input type="text" name="name" />
            <button>Submit</button>
        </form>
    );
}

export default Form;