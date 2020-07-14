import React, { useState } from 'react';
import Navbar from './Navbar';
import CreateArea from "./CreateArea";
import GpaTable from "./GpaTable";
import Subject from "./Subject"
import LabCreateArea from "./LabCreateArea"

function App() {

  const [subjectList, setSubjectList] = useState([]);
  const [gpa,setGpa] = useState("");
  const [prevGpa, setPrevGpa] = useState("");
  const [inputType, setInputType] = useState(true)

  function handleGpa(){
    var cred;
    var val;
    var grd;
    var gpaCalc;
    var totCred=0;
    var totVal=0;
    subjectList.forEach(sub => {
      cred = sub.credits;
      grd = sub.grade;
      switch(grd){
        case "A+": val=10;break;
        case "A": val=9;break;
        case "B": val=8;break;
        case "C": val=7;break;
        case "D": val=6;break;
        case "E": val=5;break;
        case "F": val=0;break;
        default: val=0;
      }
      totCred+=parseInt(cred);
      totVal+=(cred*val);
      

    })
    gpaCalc=totVal/totCred;
    setGpa(gpaCalc);
  }

  function handleClick(note){
    note.endsem = 0.5*note.internals + 2.5*prevGpa;
    note.marks = parseFloat(note.internals) + parseFloat(note.endsem);
    var roundMarks = Math.ceil(note.marks);
    if(roundMarks >= 90){
      note.grade="A+";
      note.style="blue";
    }
    else if(roundMarks >=80){
      note.grade="A";
     note.style="#06a94d";
    }
    else if(roundMarks >=70){
      note.grade="B";
      note.style="#90ee90";
    }
    else if(roundMarks >=60){
      note.grade="C";
     note.style="yellow";
    }
    else if(roundMarks >=50){
      note.grade="D";
     note.style="orange";
    }
    else if(roundMarks >=40){
      note.grade="E";
      note.style="grey";
    }
    else{
      note.grade="F";
      note.style="red";
    }
    setSubjectList(prev => {
      return(
        [...prev, note]
      );
    })
  }

  function handleGpaChange(event){
    setPrevGpa(event.target.value)
  }

  function handleDelete(id){
    setSubjectList(prev => {
      return(
        subjectList.filter((note,index) => {
          return index !== id;
        })
      );
    });
  }

  function handleLabClick(note){
    var roundMarks = Math.ceil(note.marks);
    if(roundMarks >= 90){
      note.grade="A+";
      note.style="blue";
    }
    else if(roundMarks >=80){
      note.grade="A";
     note.style="#06a94d";
    }
    else if(roundMarks >=70){
      note.grade="B";
      note.style="#90ee90";
    }
    else if(roundMarks >=60){
      note.grade="C";
     note.style="yellow";
    }
    else if(roundMarks >=50){
      note.grade="D";
     note.style="orange";
    }
    else if(roundMarks >=40){
      note.grade="E";
      note.style="grey";
    }
    else{
      note.grade="F";
      note.style="red";
    }
    setSubjectList(prev => {
      return(
        [...prev, note]
      );
    })
  }

  function changeInput(){
    setInputType(!inputType);
  }

  return (
        <div>
            <Navbar />
            <div className="description top-section">
            <div className="desc">End Sem marks = 0.5 x Internals + 2.5 x Previous GPA</div>
            <div className="desc">GPA is calculated based on the following scheme</div>
                <GpaTable />
               
                {inputType && <input id="GPA" type="text" placeholder="Previous GPA" className="prev-gpa" value={prevGpa} onChange={handleGpaChange}/>}
                {inputType && <CreateArea whenClicked={handleClick}/> }
                {!inputType && <LabCreateArea whenClicked={handleLabClick}/> } 
                <p><a onClick={changeInput} className="gpa-btn">{inputType ? "Enter Lab Marks" : "Enter Subject Marks"}</a></p>       
                <div className="all-subjects">
            {subjectList.map((note,index) => {
              return <Subject whenDelete={handleDelete} key={index} id={index} subject={note.subject} grade={note.grade} credits={note.credits} marks={note.marks} style={note.style}/>
              
            })}
            </div>

            <div className="gpa-calculate">
                <div>
                  <button className="gpa-btn" onClick={handleGpa}>Calculate</button>
                </div>
                <p className="gpa">GPA: {Math.round((gpa + Number.EPSILON) * 100) / 100} </p>
            </div>
            </div>
            

            
           
        </div>    
  );
}

export default App;
