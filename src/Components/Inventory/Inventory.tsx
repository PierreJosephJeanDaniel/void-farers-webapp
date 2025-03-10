import React from "react";
import "./Inventory.css";
import {
  ObjectProps,
  testObjec1,
  testObjec2,
} from "../../Settings/InventoryObjects";

const InvObject: React.FC<ObjectProps> = ({
  name,
  description,
  effect,
  isConsumable,
  quantity,
  rollAssist,
  rollModifier,
}) => {
  return (
    <div className="object">
      <div className="text">-- {name}</div>
      <div className="hoverbox">{description}</div>
      <div>{quantity}</div>
      {/* {effect && <div className="object-effect">{effect}</div>}
      {rollAssist && (
        <div className="object-roll-assist">Roll Assist: {rollAssist}</div>
      )}
      {rollModifier !== null && (
        <div className="object-roll-modifier">
          Roll Modifier: {rollModifier > 0 ? `+${rollModifier}` : rollModifier}
        </div>
      )}
      {isConsumable && <div className="object-consumable">Consumable</div>}
      {quantity !== null && (
        <div className="object-quantity">Quantity: {quantity}</div>
      )} */}
    </div>
  );
};

const Inventory: React.FC = () => {
  //   const objectList = useSelector((state: RootState) => state.inventory);
  const objectList = [testObjec1, testObjec2];
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
