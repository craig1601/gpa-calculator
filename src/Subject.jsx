import React from "react";

function Subject(props) {

function handleClick(){
    props.whenDelete(props.id)
}

    return(
        <div className="subject-note" style={{backgroundColor: props.style}}>
             <div>Subject: {props.subject}</div>
             <div>Marks: {props.marks} ({Math.ceil(props.marks)})</div>
              <div>Grade: {props.grade}</div>          
              <div>Credits: {props.credits}</div>
              <button className="delete" onClick={handleClick}><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}
export default Subject;