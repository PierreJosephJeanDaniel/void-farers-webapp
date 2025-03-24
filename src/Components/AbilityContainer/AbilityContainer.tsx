import { useSelector } from "react-redux";
import Abilities from "../Abilities/Abilities";
import Waits from "../Waits/Waits";
import { RootState } from "../../Store";
import {
  CharacterProps,
  ObjectProps,
  AbilitiesList,
  WaitsList,
} from "../../Screens/CharacterSelection/types";
import "./AbilityContainer.css";
import { checkInventoryModifiers } from "../../Functions/checkInventoryModifiers";

const AbilityContainer: React.FC = () => {
  const character: CharacterProps = useSelector(
    (state: RootState) => state.character
  );
  const inventory: ObjectProps[] = useSelector(
    (state: RootState) => state.inventory.objectList
  );
  const userName: string = character.Name;
  const abilities: Record<AbilitiesList, number> = character.Abilities;
  const waits: Record<WaitsList, number> = character.Waits;
  const newWaits: Record<WaitsList, number> = checkInventoryModifiers(
    waits,
    inventory,
    "waits"
  ) as Record<WaitsList, number>;
  const newAbilities: Record<AbilitiesList, number> = checkInventoryModifiers(
    abilities,
    inventory,
    "abilities"
  ) as Record<AbilitiesList, number>;
  return (
    <div className="sheet-body">
      <Waits waits={newWaits} userName={userName} />
      <Abilities abilities={newAbilities} userName={userName} />
    </div>
  );
};

export default AbilityContainer;
