import React, { useEffect, useState } from "react";
import CharacterCard from "../characterCard/CharacterCard";
import "./CharacterFilterStudents.scss";

export const CharacterFilterStudents = ({ data }) => {
  const [kFilterCharacter, setKFilterCharacter] = useState([]);
  const getCharacterFiltered = async () => {
    let url = "http://localhost:5000/characters";
    let getFetchDataFiltered = await fetch(url).then((result) => result.json());
    let filterCharacter = getFetchDataFiltered.filter(
    (item) => item.hogwartsStudent === true
    );
    setKFilterCharacter(filterCharacter);
  };
  useEffect(() => {
    getCharacterFiltered();
  }, []);

  return (
    <div className="containerCards">
      {kFilterCharacter.map((item) => (
      <CharacterCard CharacterD={item} />
      ))}
    </div>
  );
};
