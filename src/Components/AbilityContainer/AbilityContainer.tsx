import { useSelector } from "react-redux";
import Abilities from "../Abilities/Abilities";
import Waits from "../Waits/Waits";
import { RootState } from "../../Store";
import {
  Ability,
  CharacterProps,
} from "../../Screens/CharacterSelection/types";
import "./AbilityContainer.css";

const AbilityContainer: React.FC = () => {
  const character: CharacterProps = useSelector(
    (state: RootState) => state.character
  );

  const abilities: Ability = character.Abilities;
  const waits: Ability = character.Waits;
  return (
    <div className="sheet-body">
      <Waits waits={waits} />
      <Abilities abilities={abilities} />
    </div>
  );
};

export default AbilityContainer;
