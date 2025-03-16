import React from "react";
import "./HomeHeader.css";
import { TabOptions } from "../../Settings/TabOptions";
import SaveIcon from "../SaveIcon/SaveIcon";
import {
  CharacterProps,
  ObjectProps,
} from "../../Screens/CharacterSelection/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { setTracker } from "../../Store/ChangeTracker";
import { supabaseManager } from "../../Managers/SupabaseManager/SupabaseManager";
interface HomeHeaderProps {
  name: string;
  handleClick: (tab: TabOptions) => void;
  currentTab: TabOptions;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  name,
  handleClick,
  currentTab,
}) => {
  const dispatch = useDispatch();

  const characterData: CharacterProps = useSelector(
    (state: RootState) => state.character
  );
  const inventoryData: ObjectProps[] = useSelector(
    (state: RootState) => state.inventory.objectList
  );
  const isChangesMade: boolean = useSelector(
    (state: RootState) => state.changeTracker.change
  );

  const handleSave = async () => {
    if (!isChangesMade) {
      return;
    }
    const newCharacterData: CharacterProps = {
      ...characterData,
      Inventory: inventoryData,
    };
    console.log("Saving...");
    console.log(newCharacterData);
    await supabaseManager.updateCharacter(newCharacterData);
    dispatch(setTracker(false));
  };

  return (
    <div className="header-container">
      <div className="character-header2">
        <h1 className="character-name">{name}</h1>
        <p
          className={`character-sheet-header-text ${
            currentTab === TabOptions.ABILITIES ? "selected" : ""
          }`}
          onClick={() => handleClick(TabOptions.ABILITIES)}
        >
          Abilities
        </p>
        <p
          className={`character-sheet-header-text ${
            currentTab === TabOptions.INVENTORY ? "selected" : ""
          }`}
          onClick={() => handleClick(TabOptions.INVENTORY)}
        >
          Inventory
        </p>
        <p
          className={`character-sheet-header-text ${
            currentTab === TabOptions.MAP ? "selected" : ""
          }`}
          onClick={() => handleClick(TabOptions.MAP)}
        >
          Map
        </p>
      </div>
      <div className="save-icon-container">
        <SaveIcon
          onClick={handleSave}
          className={isChangesMade ? "active" : "inactive"}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
