import React from "react";

import flagF from '../../assets/flagfavorite.jpg'

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
    x = CharacterD.hogwartsStudent;
  if (x) {
    rol="Estudiante"
  } else {
    rol="Staff"
  }

  return (
    <div className="CardMini">
      <div className="leftCard">
        <div className="character-card">
          <img src={imag} alt="photo" className="character-card-photo" />
          <div className="character-card-info">
            <p className="character-card-name">{CharacterD.name}</p>
            <div>
              <p className="character-status-alive">{statusAlive}</p>
              <p className="character-status-alive">{rol}</p>
              <img src={flagF} alt="flag" className="character-card-flag"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;