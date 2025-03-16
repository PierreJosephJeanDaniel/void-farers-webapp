import React from "react";
import "./HomeHeader.css";
import { TabOptions } from "../../Settings/TabOptions";
import SaveIcon from "../SaveIcon/SaveIcon";
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
        <SaveIcon />
      </div>
    </div>
  );
};

export default HomeHeader;
