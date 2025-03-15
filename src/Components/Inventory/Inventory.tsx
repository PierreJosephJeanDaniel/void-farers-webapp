import React from "react";
import "./Inventory.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { openInvPopup, selectObject } from "../../Store/Inventory";
import { ObjectProps } from "../../Screens/CharacterSelection/types";

const InvObject: React.FC<ObjectProps> = ({
  name,
  description,
  effect,
  isConsumable,
  quantity,
  rollAssist,
  rollModifier,
}) => {
  const newObject = {
    name: name,
    description: description,
    effect: effect,
    isConsumable: isConsumable,
    quantity: quantity,
    rollAssist: rollAssist,
    rollModifier: rollModifier,
  };

  const dispatch = useDispatch();

  const handleClick = (object: ObjectProps) => {
    dispatch(selectObject(object));
    dispatch(openInvPopup());
  };
  return (
    <div className="object">
      <div className="text" onClick={() => handleClick(newObject)}>
        -- {name}
      </div>
      <div className="hoverbox">{description}</div>
      <div>{quantity}</div>
    </div>
  );
};

const Inventory: React.FC = () => {
  const objectList: ObjectProps[] = useSelector(
    (state: RootState) => state.inventory.objectList
  );
  return (
    <div className="inventory-container">
      <div className="crt-inventory">
        {Object.entries(objectList).map(([key, value]) => (
          <InvObject
            key={key}
            name={value.name}
            description={value.description}
            effect={value.effect}
            isConsumable={value.isConsumable}
            quantity={value.quantity}
            rollAssist={value.rollAssist}
            rollModifier={value.rollModifier}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
