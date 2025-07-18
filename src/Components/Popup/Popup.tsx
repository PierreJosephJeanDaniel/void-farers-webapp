import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store";
import { ChatRoll } from "@/Components/SideChat/SideChat";
import { closePopup, openPopup } from "@/Store/Popup";
import { rollDice, RollType } from "@/Components/Roll/Roll";
import { useSocket } from "@/Wrappers/ChatSocket/UseSocket";
import "./Popup.css";

const Popup: React.FC = () => {
  const dispatch = useDispatch();
  const { socket } = useSocket();

  const {
    isOpen,
    message,
    value,
    critical,
    mode,
    modifier,
    userName,
    colorId,
  } = useSelector((state: RootState) => state.popup);

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    dispatch(closePopup());
  };

  const handleRollTypeSelect = (rollType: RollType) => {
    const { total, critical } = rollDice(modifier ?? 0, rollType);
    console.log("Rolling:", rollType, "Total:", total, "Critical:", critical);
    dispatch(
      openPopup({
        mode: "rollResult",
        message,
        value: total,
        critical,
        userName,
        colorId,
      }),
    );
    const newRollMessage: ChatRoll = {
      author: userName ?? "Unknown",
      rollType: message, // message holds ability name here
      rollValue: total,
      critical,
      colorId: colorId ?? "default",
    };

    if (socket) {
      socket.emit("sendMessage", newRollMessage);
    }
  };
  console.log("Popup mode is:", mode);
  if (mode === "rollTypeSelect") {
    return (
      <div className="popup">
        <div className="popup-content">
          <div className="popup-header">
            <div className="title">Choose roll type for {message}</div>
            <span className="close" onClick={handleClose}>
              X
            </span>
          </div>
          <div className="popup-body">
            <div className="popup-body">
              <button
                className="roll-button disadvantage"
                onClick={() => handleRollTypeSelect("disadvantage")}
              >
                Disadvantage
              </button>
              <button
                className="roll-button normal"
                onClick={() => handleRollTypeSelect("normal")}
              >
                Normal
              </button>
              <button
                className="roll-button advantage"
                onClick={() => handleRollTypeSelect("advantage")}
              >
                Advantage
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "rollResult") {
    const stringValue: string =
      (value ?? 0) < 10
        ? (value ?? 0).toString().padStart(2, "0")
        : (value ?? 0).toString();

    return (
      <div className="popup">
        <div className="popup-content">
          <div className="popup-header">
            <div className="title">{message}</div>
            <span className="close" onClick={handleClose}>
              X
            </span>
          </div>
          <div className="popup-body">
            <span className="typing-effect">
              ........
              <span
                className={
                  critical !== undefined
                    ? critical === "success"
                      ? "roll-success"
                      : "roll-fail"
                    : ""
                }
              >
                {stringValue}
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Popup;
