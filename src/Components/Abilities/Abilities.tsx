import React, { useState } from "react";
import "./Abilities.css";
import { useDispatch } from "react-redux";
import { openPopup } from "@/Store/Popup";
import { AbilityType } from "@/Screens/CharacterSelection/types";

interface AbilityProps {
  name: string;
  value: number;
  userName: string;
  colorId: string;
}

interface Abilities {
  abilities: AbilityType;
  userName: string;
  colorId: string;
}

const Ability: React.FC<AbilityProps> = ({
  name,
  value,
  userName,
  colorId,
}) => {
  const dispatch = useDispatch();

  const addedValue: string =
    value > 0 ? `+ ${value}` : value < 0 ? `- ${Math.abs(value)}` : "";

  // This opens the RollTypeSelector modal
  const handleClick = () => {
  console.log("Opening roll type selector popup for", name);
  dispatch(
    openPopup({
      message: name,
      modifier: value,
      mode: "rollTypeSelect",
      userName,
      colorId,
    })
  );
};

  return (
    <>
      {/* Ability card */}
      <div className="ability" onClick={handleClick}>
        <div className="text">{name}</div>
        <div className="number">{addedValue}</div>
      </div>
    </>
  );
};

const Abilities: React.FC<Abilities> = ({ abilities, userName, colorId }) => {
  return (
    <div className="crt">
      <h1>Abilities</h1>
      <div className="abilities">
        {Object.entries(abilities).map(([name, value]) => (
          <Ability
            key={name}
            name={name}
            value={value}
            userName={userName}
            colorId={colorId}
          />
        ))}
      </div>
    </div>
  );
};

export default Abilities;
