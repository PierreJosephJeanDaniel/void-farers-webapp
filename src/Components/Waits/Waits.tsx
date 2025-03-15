import React from "react";
import "./Waits.css";
import { Ability } from "../../Screens/CharacterSelection/types";
import { useDispatch } from "react-redux";
import { openPopup } from "../../Store/Popup";
import { updateChat } from "../../Store/Chat";
import { ChatRoll } from "../SideChat/SideChat";

interface WaitProps {
  name: string;
  value: number;
  userName: string;
}

interface WaitsProps {
  waits: Ability;
  userName: string;
}

const Wait: React.FC<WaitProps> = ({ name, value, userName }) => {
  const dispatch = useDispatch();
  const modifier: number = value - 5;
  const modifierSign: string =
    modifier === 0
      ? ""
      : modifier > 0
      ? `+ ${modifier}`
      : `- ${Math.abs(modifier)}`;

  const handleClick = async () => {
    const message: string = `${name}`;
    const randomValue: number = Math.floor(Math.random() * 20) + 1;
    const calculatedValue: number = randomValue + modifier;
    await dispatch(openPopup({ message: message, value: calculatedValue }));
    const newRollMessage: ChatRoll = {
      author: userName,
      rollType: name,
      rollValue: calculatedValue,
    };
    await dispatch(updateChat(newRollMessage));
  };
  return (
    <div className="wait" onClick={handleClick}>
      <div className="text">{name}</div>
      <div className="number">{modifierSign}</div>
    </div>
  );
};

const Waits: React.FC<WaitsProps> = ({ waits, userName }) => {
  return (
    <div className="crt-waits">
      <h1>W.A.I.T.S</h1>
      {Object.entries(waits).map(([name, value]) => (
        <Wait key={name} name={name} value={value} userName={userName} />
      ))}
    </div>
  );
};

export default Waits;
