import React, { useState } from "react";
import "./Abilities.css";
import { useDispatch } from "react-redux";
import { openPopup } from "@/Store/Popup";
import { ChatRoll } from "@/Components/SideChat/SideChat";
import { AbilityType } from "@/Screens/CharacterSelection/types";
import { useSocket } from "@/Wrappers/ChatSocket/UseSocket";
import { rollDice, RollType } from "@/Components/Roll/Roll";
import { RollTypeSelector } from "@/Components/RollSelector/RollSelector";

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
  const { socket } = useSocket();

  const [isSelectorOpen, setSelectorOpen] = useState(false);

  const addedValue: string =
    value > 0 ? `+ ${value}` : value < 0 ? `- ${Math.abs(value)}` : "";

  // This opens the RollTypeSelector modal
  const handleClick = () => {
    setSelectorOpen(true);
  };

 // This handles the roll after the user selects a roll type
  const handleRollTypeSelect = async (rollType: RollType) => {
    setSelectorOpen(false);

    const { total, critical } = rollDice(value, rollType);

    await dispatch(
      openPopup({
        message: name,
        value: total,
        critical,
      })
    );

    const newRollMessage: ChatRoll = {
      author: userName,
      rollType: name,
      rollValue: total,
      critical,
      colorId,
    };

    setTimeout(() => {
      if (socket) {
        socket.emit("sendMessage", newRollMessage);
      }
    }, 1700);
  };

  return (
    <>
      {/* Ability card */}
      <div className="ability" onClick={handleClick}>
        <div className="text">{name}</div>
        <div className="number">{addedValue}</div>
      </div>

      {/* Roll Type Selection Popup */}
      {isSelectorOpen && (
        <RollTypeSelector
          onSelect={handleRollTypeSelect}
          onClose={() => setSelectorOpen(false)}
        />
      )}
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
