import React, { useEffect, useState } from "react";

import CharacterCard from "../../Components/characterCard/CharacterCard";
import "./CharacterDisplay.scss";

export const CharacterDisplay = ({ data }) => {
  // console.log(data)
  const [kCharacter, setKCharacter] = useState([]);
  
  const getCharacter = async () => {

    let url = "http://localhost:5000/characters";
    let getFetchData = await fetch(url).then((result) => result.json());
    setKCharacter(getFetchData);
  };
  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="containerCards">
      {kCharacter.map((item) => (
      <CharacterCard CharacterD={item} />
      ))}
    </div>
  );
};
