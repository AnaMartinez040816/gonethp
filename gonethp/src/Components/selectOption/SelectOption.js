import React from "react";
import {useHistory} from "react-router-dom";
import "./SelectOption.scss";

export const SelectOption = () => {
    let history = useHistory();
    function handdleClickStudents(){
        history.push("/students");
     } 
   function handdleClickStaff (){
    history.push("/staff");
     }
     function handdleClickAlive (){
      history.push("/alive");
       }

   return(
     <div className="buttons">
        <button className="btnfilter" onClick={handdleClickStudents}>ESTUDIANTES</button>
        <button className="btnfilter" onClick={handdleClickStaff}>STAFF</button>
        <button className="btnfilter" onClick={handdleClickAlive}>VIVOS</button>
     </div>
   )
}
