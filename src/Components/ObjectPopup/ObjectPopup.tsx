import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import "./ObjectPopup.css";
import { closeInvPopup, consumeObject } from "../../Store/Inventory";
import { ObjectProps } from "../../Screens/CharacterSelection/types";
import { setTracker } from "../../Store/ChangeTracker";

const Popup: React.FC = () => {
  const dispatch = useDispatch();
  const { isPopupOpen, selectedObject } = useSelector(
    (state: RootState) => state.inventory
  );

  if (!isPopupOpen) {
    return null;
  }

  const handleClose = () => {
    dispatch(closeInvPopup());
  };

  const handleUse = (selectedObject: ObjectProps) => {
    dispatch(consumeObject(selectedObject));
    dispatch(closeInvPopup());
    dispatch(setTracker(true));
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <div className="title">
            {" "}
            {selectedObject?.name} ({selectedObject?.quantity})
          </div>
          <span className="close" onClick={handleClose}>
            X
          </span>
        </div>
        <div className="popup-body">
          <div className="subfield">
            <div className="body-subtitle">Description:</div>
            <div className="body-content">{selectedObject?.description}</div>
          </div>
          <div className="subfield">
            <div className="body-subtitle">Effect:</div>
            <div className="body-content">{selectedObject?.effect}</div>
          </div>
          {selectedObject?.isConsumable && (
            <div className="use-button-container">
              <div
                className="use-button"
                onClick={() => handleUse(selectedObject)}
              >
                Use
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
