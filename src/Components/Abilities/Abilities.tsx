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
        <Ability name="Inspiration" value={""} />
        <Ability name="Psychic" value={""} />
        <Ability name="Infiltration" value={"+1"} />
        <Ability name="Reparation" value={"+2"} />
        <Ability name="Zero G" value={""} />
        <Ability name="Dodging" value={"-1"} />
        <Ability name="Engine Operating" value={"-1"} />
        <Ability name="Sprinting" value={"+2"} />
      </div>
    </div>
  );
};

export default Abilities;
