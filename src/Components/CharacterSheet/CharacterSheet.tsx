import React from "react";
import "./CharacterSheet.css";
import Abilities from "../Abilities/Abilities";
import Waits from "../Waits/Waits";

interface CharacterSheetProps {
  name: string;
  characterClass: string;
  level: number;
  race: string;
  alignment: string;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ name }) => {
  return (
    <div className="character-sheet">
      <div className="character-header">
        <h1 className="character-name">{name}</h1>
        <p className="character-sheet-header-text">Abilities</p>
        <p className="character-sheet-header-text">Inventory</p>
        <p className="character-sheet-header-text">Info</p>
      </div>
      <div className="sheet-body">
        <Waits />
        <Abilities />
      </div>
    </div>
  );
};

export default CharacterSheet;
