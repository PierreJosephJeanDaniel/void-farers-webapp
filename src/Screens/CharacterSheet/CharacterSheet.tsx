import React from "react";
import "./CharacterSheet.css";
import Abilities from "../../Components/Abilities/Abilities";
import Waits from "../../Components/Waits/Waits";

interface CharacterSheetProps {
  name: string;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ name }) => {
  const [currentTab, setCurrentTab] = React.useState("abilities");
  const handleClick = (tab: string) => {
    if (tab === currentTab) {
      setCurrentTab("home");
    } else {
      setCurrentTab(tab);
    }
  };

  return (
    <div className="character-sheet">
      <div className="character-header">
        <h1 className="character-name">{name}</h1>
        <p
          className={`character-sheet-header-text ${
            currentTab === "abilities" ? "selected" : ""
          }`}
          onClick={() => handleClick("abilities")}
        >
          Abilities
        </p>
        <p
          className={`character-sheet-header-text ${
            currentTab === "inventory" ? "selected" : ""
          }`}
          onClick={() => handleClick("inventory")}
        >
          Inventory
        </p>
        <p
          className={`character-sheet-header-text ${
            currentTab === "info" ? "selected" : ""
          }`}
          onClick={() => handleClick("info")}
        >
          Info
        </p>
      </div>
      {currentTab === "abilities" && (
        <div className="sheet-body">
          <Waits />
          <Abilities />
        </div>
      )}
    </div>
  );
};

export default CharacterSheet;
