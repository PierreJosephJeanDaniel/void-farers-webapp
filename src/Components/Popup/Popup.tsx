import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { closePopup } from "../../Store/Popup";
import "./Popup.css";

const Popup: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, message } = useSelector((state: RootState) => state.popup);

  if (!isOpen) {
    console.log("Popup is closed");
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
          <span className="typing-effect"> .................20</span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
