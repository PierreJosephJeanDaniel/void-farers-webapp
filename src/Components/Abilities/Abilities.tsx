import React from "react";
import "./Abilities.css";
import { useDispatch } from "react-redux";
import { openPopup } from "../../Store/Popup";

interface AbilityProps {
  name: string;
  value: number;
}

interface Abilities {
  abilities: {
    [key: string]: number;
  };
}

const Ability: React.FC<AbilityProps> = ({ name, value }) => {
  const dispatch = useDispatch();
  const addedValue: string =
    value >= 0 ? `+ ${value}` : value <= 0 ? `- ${Math.abs(value)}` : "";

  const handleClick = () => {
    const message: string = `${name}`;
    const randomValue: number = Math.floor(Math.random() * 20) + 1;
    const calculatedValue: number = randomValue + value;
    dispatch(openPopup({ message: message, value: calculatedValue }));
  };

  return (
    <div className="ability" onClick={handleClick}>
      <div className="text">{name}</div>
      <div className="number">{addedValue}</div>
    </div>
  );
};

const Abilities: React.FC<Abilities> = ({ abilities }) => {
  return (
    <div className="crt">
      <h1>Abilities</h1>
      <div className="abilities">
        {Object.entries(abilities).map(([name, value]) => (
          <Ability key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Abilities;
