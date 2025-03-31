import "./Home.css";
import { CharacterProps } from "@/Screens/CharacterSelection/types";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "@/Store";
import HomeHeader from "@/Components/HomeHeader/HomeHeader";
import { TabOptions } from "@/Settings/TabOptions";
import AbilityContainer from "@/Components/AbilityContainer/AbilityContainer";
import Inventory from "@/Components/Inventory/Inventory";
import MapContainer from "@/Components/MapContainer/MapContainer";
import MainPage from "@/Components/MainPage/MainPage";

const Home: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState<TabOptions>(
    TabOptions.HOME,
  );
  const character: CharacterProps = useSelector(
    (state: RootState) => state.character,
  );

  const handleClick = (tab: TabOptions) => {
    if (tab === currentTab) {
      setCurrentTab(TabOptions.HOME);
    } else {
      setCurrentTab(tab);
    }
  };

  const renderSubComponent = () => {
    switch (currentTab) {
      case TabOptions.ABILITIES:
        return <AbilityContainer />;
      case TabOptions.INVENTORY:
        return <Inventory />;
      case TabOptions.MAP:
        return <MapContainer />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="character-sheet">
      <HomeHeader
        name={character.Name}
        handleClick={handleClick}
        currentTab={currentTab}
      />
      {renderSubComponent()}
    </div>
  );
};

export default Home;
