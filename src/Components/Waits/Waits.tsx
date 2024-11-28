import React from "react";
import "./Waits.css";
import { Ability } from "../../Screens/CharacterSelection/types";
import { useDispatch } from "react-redux";
import { openPopup } from "../../Store/Popup";

interface WaitProps {
  name: string;
  value: number;
}

interface WaitsProps {
  waits: Ability;
}

const Wait: React.FC<WaitProps> = ({ name, value }) => {
  const dispatch = useDispatch();
  const modifier: number = value - 5;
  const modifierSign: string =
    modifier === 0
      ? ""
      : modifier > 0
      ? `+ ${modifier}`
      : `- ${Math.abs(modifier)}`;

  const handleClick = () => {
    const message: string = `${name}`;
    const randomValue: number = Math.floor(Math.random() * 20) + 1;
    const calculatedValue: number = randomValue + modifier;
    dispatch(openPopup({ message: message, value: calculatedValue }));
  };
  return (
    <div className="wait" onClick={handleClick}>
      <div className="text">{name}</div>
      <div className="number">{modifierSign}</div>
    </div>
  );
};

const Waits: React.FC<WaitsProps> = ({ waits }) => {
  return (
    <div className="crt-waits">
      <h1>W.A.I.T.S</h1>
      {Object.entries(waits).map(([name, value]) => (
        <Wait key={name} name={name} value={value} />
      ))}
    </div>
  );
};

export default Waits;
