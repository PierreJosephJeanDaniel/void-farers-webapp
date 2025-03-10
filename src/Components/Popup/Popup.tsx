import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { closePopup } from "../../Store/Popup";
import "./Popup.css";

const Popup: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, message, value } = useSelector(
    (state: RootState) => state.popup
  );

  const stringValue: string =
    value < 10 ? value.toString().padStart(2, "0") : value.toString();

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    dispatch(closePopup());
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <div className="title"> {message}</div>
          <span className="close" onClick={handleClose}>
            X
          </span>
        </div>
        <div className="popup-body">
          <span className="typing-effect"> ........{stringValue}</span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
