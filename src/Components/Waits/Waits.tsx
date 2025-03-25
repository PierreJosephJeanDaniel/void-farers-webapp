import React from "react";
import "./Waits.css";
import { WaitsType } from "../../Screens/CharacterSelection/types";
import { useDispatch } from "react-redux";
import { openPopup } from "../../Store/Popup";
import { ChatRoll } from "../SideChat/SideChat";
import { useSocket } from "../../Wrappers/ChatSocket/UseSocket";

interface WaitProps {
  name: string;
  value: number;
  userName: string;
  colorId: string;
}

interface WaitsProps {
  waits: WaitsType;
  userName: string;
  colorId: string;
}

const Wait: React.FC<WaitProps> = ({ name, value, userName, colorId }) => {
  const dispatch = useDispatch();
  const { socket } = useSocket();
  const modifier: number = value - 5;
  const modifierSign: string =
    modifier === 0
      ? ""
      : modifier > 0
      ? `+ ${modifier}`
      : `- ${Math.abs(modifier)}`;

  const handleClick = async () => {
    const message: string = `${name}`;
    let critical: undefined | "success" | "fail" = undefined;
    const randomValue: number = Math.floor(Math.random() * 20) + 1;
    if (randomValue === 20) {
      critical = "success";
    } else if (randomValue === 1) {
      critical = "fail";
    }
    const calculatedValue: number = randomValue + modifier;
    dispatch(
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
    <div className="wait" onClick={handleClick}>
      <div className="text">{name}</div>
      <div className="number">{modifierSign}</div>
    </div>
  );
};

const Waits: React.FC<WaitsProps> = ({ waits, userName, colorId }) => {
  return (
    <div className="crt-waits">
      <h1>W.A.I.T.S</h1>
      {Object.entries(waits).map(([name, value]) => (
        <Wait
          key={name}
          name={name}
          value={value as number}
          userName={userName}
          colorId={colorId}
        />
      ))}
    </div>
  );
};

export default Waits;
