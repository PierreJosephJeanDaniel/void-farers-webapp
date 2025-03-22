import React from "react";
import "./Abilities.css";
import { useDispatch } from "react-redux";
import { openPopup } from "../../Store/Popup";
import { ChatRoll } from "../SideChat/SideChat";
import { updateChat } from "../../Store/Chat";
import { AbilityType } from "../../Screens/CharacterSelection/types";

interface AbilityProps {
  name: string;
  value: number;
  userName: string;
}

interface Abilities {
  abilities: AbilityType;
  userName: string;
}

const Ability: React.FC<AbilityProps> = ({ name, value, userName }) => {
  const dispatch = useDispatch();
  const addedValue: string =
    value > 0 ? `+ ${value}` : value < 0 ? `- ${Math.abs(value)}` : "";

  const handleClick = async () => {
    const message: string = `${name}`;
    let critical: undefined | "success" | "fail" = undefined;
    const randomValue: number = Math.floor(Math.random() * 20) + 1;
    if (randomValue === 20) {
      critical = "success";
    }
    if (randomValue === 1) {
      critical = "fail";
    }
    const calculatedValue: number = randomValue + value;
    await dispatch(openPopup({ message: message, value: calculatedValue }));
    const newRollMessage: ChatRoll = {
      author: userName,
      rollType: name,
      rollValue: calculatedValue,
      critical: critical,
    };
    await dispatch(updateChat(newRollMessage));
  };

  return (
    <div className="ability" onClick={handleClick}>
      <div className="text">{name}</div>
      <div className="number">{addedValue}</div>
    </div>
  );
};

const Abilities: React.FC<Abilities> = ({ abilities, userName }) => {
  return (
    <div className="crt">
      <h1>Abilities</h1>
      <div className="abilities">
        {Object.entries(abilities).map(([name, value]) => (
          <Ability key={name} name={name} value={value} userName={userName} />
        ))}
      </div>
    </div>
  );
};

export default Abilities;
