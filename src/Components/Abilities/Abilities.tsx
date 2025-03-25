import React from "react";
import "./Abilities.css";
import { useDispatch } from "react-redux";
import { openPopup } from "../../Store/Popup";
import { ChatRoll } from "../SideChat/SideChat";
// import { updateChat } from "../../Store/Chat";
import { AbilityType } from "../../Screens/CharacterSelection/types";
import { useSocket } from "../../Wrappers/ChatSocket/UseSocket";

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
  const socket = useSocket();
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
    await dispatch(
      openPopup({
        message: message,
        value: calculatedValue,
        critical: critical,
      })
    );
    const newRollMessage: ChatRoll = {
      author: userName,
      rollType: name,
      rollValue: calculatedValue,
      critical: critical,
      colorId: colorId,
    };
    setTimeout(() => {
      if (socket) {
        socket.emit("sendMessage", newRollMessage);
      }
    }, 1700);
  };

  return (
    <div className="ability" onClick={handleClick}>
      <div className="text">{name}</div>
      <div className="number">{addedValue}</div>
    </div>
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
