import React from "react";
import {useHistory} from "react-router-dom";
// import {CharacterFilterStudents} from "../characterFilterStudents/CharacterFilterStudents";
// import {CharacterFilterStaff} from "../characterFilterStaff/CharacterFilterStaff";
import "./SelectOption.scss";

export const SelectOption = () => {
    let history = useHistory();
    function handdleClickStudents(){
        history.push("/students");
     } 
   function handdleClickStaff (){
    history.push("/staff");
     }


   return(
     <div className="buttons">
        <button className="btnfilter" onClick={handdleClickStudents}>ESTUDIANTES</button>
        <button className="btnfilter" onClick={handdleClickStaff}>STAFF</button>
     </div>
   )
}
