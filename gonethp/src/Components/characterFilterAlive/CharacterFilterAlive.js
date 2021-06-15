import React, { useEffect, useState } from "react";
import CharacterCard from "../characterCard/CharacterCard";
import "./CharacterFilterAlive.scss";

export const CharacterFilterAlive = ({ data }) => {
  const [kAliveCharacter, setKAliveCharacter] = useState([]);
  const getCharacterAlive = async () => {
    let url = "http://localhost:5000/characters";
    let getFetchDataAlive = await fetch(url).then((result) => result.json());
    let filterCharacterAlive = getFetchDataAlive.filter(
    (item) => item.alive === true
    );
    setKAliveCharacter(filterCharacterAlive);
  };
  useEffect(() => {
    getCharacterAlive();
  }, []);

  return (
    <div className="containerCards">
      {kAliveCharacter.map((item) => (
      <CharacterCard CharacterD={item} />
      ))}
    </div>
  );
};