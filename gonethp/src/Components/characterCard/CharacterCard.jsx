import React from "react";

import "../characterCard/CharacterCard.scss";

const CharacterCard = ({ CharacterD }) => {
  let imag=CharacterD.image;
  
  let statusAlive=""
  if (CharacterD.gender === "male") {
    statusAlive="muerto"
  } else {
    statusAlive="muerta"
  }
  var x = CharacterD.alive;
  if (x) {
    if (CharacterD.gender === "male") {
      statusAlive="vivo"
    } else {
      statusAlive="viva"
    }
  }
 
  let rol=""
  var x = CharacterD.hogwartsStudent;
  if (x) {
    rol="Estudiante"
  } else {
    rol="Staff"
  }

  return (
    <div className="character-card">
        <img src={imag} alt="photo" className="character-card-photo" />
          <p className="character-card-info">{CharacterD.name}</p>
        <div className="character-status-alive">
          <p>{statusAlive}</p>
        </div>
        <p>{rol}</p>
    </div>
  );
};

export default CharacterCard;