import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function LabCreateArea(props){

    const [note, setNote] = useState({
        subject: "",
        credits: "",
        grade: "",
        internals: "",
        style: "",
        endsem: "",
        marks: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        event.preventDefault();
        setNote(prev => {
            return{
                ...prev,
                [name]: value
            };
        })
    }

    function handleClick(event){
        props.whenClicked(note);
        event.preventDefault();
        setNote({
            subject: "",
        credits: "",
        grade: "",
        marks: ""
        });
    }

    return(
        <div className="create-area">

        <form>
<div><input type="text" placeholder="Lab Name" className="subject basic" name="subject" onChange={handleChange} value={note.subject}/></div>
        <div>
        <input placeholder="Marks" className="marks basic" name="marks" onChange={handleChange} value={note.marks}></input>
        <input type="text" placeholder="Credits" className="credits basic" name="credits" onChange={handleChange} value={note.credits}/>
        </div>
        

        <button onClick={handleClick}>
            <AddIcon />
        </button>

        </form>
        </div>
    )
}

export default LabCreateArea;