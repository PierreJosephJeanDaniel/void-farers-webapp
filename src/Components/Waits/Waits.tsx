import React from "react";
import "./Waits.css";
import { WaitsType } from "@/Screens/CharacterSelection/types";
import { useDispatch } from "react-redux";
import { openPopup } from "@/Store/Popup";

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
  const modifier: number = value - 5;
  const modifierSign: string =
    modifier === 0
      ? ""
      : modifier > 0
        ? `+ ${modifier}`
        : `- ${Math.abs(modifier)}`;

  const handleClick = () => {
    console.log("Opening roll type selector popup for", name);
    dispatch(
      openPopup({
        message: name,
        modifier: value,
        mode: "rollTypeSelect",
        userName,
        colorId,
      }),
    );
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
