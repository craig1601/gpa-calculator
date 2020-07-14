import React from "react";

function GpaTable(props) {
    
    return(
        
            <div  className="gpa-table"> 
                <table>
                    <thead>
                        <tr>
                        <th>Grade</th>
                        <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>A+</td>
                        <td>90-100</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>80-89</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>70-79</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>60-69</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>50-59</td>
                    </tr>
                    <tr>
                        <td>E</td>
                        <td>40-49</td>
                    </tr>
                    <tr>
                        <td>F</td>
                        <td>&lt;40</td>
                    </tr>
                    </tbody>
                 </table>
            </div>
    );
}

export default GpaTable;