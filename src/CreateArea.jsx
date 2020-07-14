import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

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
        internals: ""
        });
    }
    return(
        <div className="create-area">

        <form>
<div><input type="text" placeholder="Subject" className="subject basic" name="subject" onChange={handleChange} value={note.subject}/></div>
        <div>
        <input placeholder="Internals" className="marks basic" name="internals" onChange={handleChange} value={note.internals}></input>
        <input type="text" placeholder="Credits" className="credits basic" name="credits" onChange={handleChange} value={note.credits}/>
        </div>
        

        <button onClick={handleClick}>
            <AddIcon />
        </button>

        </form>
        </div>
    )
}

export default CreateArea;