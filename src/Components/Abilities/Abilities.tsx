import React from "react";
import "./Abilities.css";

interface AbilityProps {
  name: string;
  value: string;
}

const Ability: React.FC<AbilityProps> = ({ name, value }) => {
  return (
    <div className="ability" onClick={() => alert(`${name}: ${value}`)}>
      <div className="text">{name}</div>
      <div className="number">{value}</div>
    </div>
  );
};

const Abilities: React.FC = () => {
  return (
    <div className="crt">
      <h1>Abilities</h1>
      <div className="abilities">
        <Ability name="Strength" value={""} />
        <Ability name="Dexterity" value={""} />
        <Ability name="Constitution" value={"+1"} />
        <Ability name="Intelligence" value={"+2"} />
        <Ability name="Wisdom" value={""} />
        <Ability name="Charisma" value={"-1"} />
      </div>
    </div>
  );
};

export default Abilities;
