import React from "react";
import "./MainPage.css";
import Shield from "../Shield/Shield";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import Health from "../Health/Health";
import Aegis from "../Aegis/Aegis";

enum Category {
  HEALTH = 0,
  SHIELD = 1,
  AEGIS = 2,
}

const MainPage: React.FC = () => {
  const maxHealth: number = useSelector(
    (state: RootState) => state.character.MaxHp
  );
  const maxShield: number = useSelector(
    (state: RootState) => state.character.MaxArmor
  );
  const maxAegis: number = useSelector(
    (state: RootState) => state.character.MaxAegis
  );

  const [shield, setShield] = React.useState<number>(
    useSelector((state: RootState) => state.character.Armor)
  );
  const [aegis, setAegis] = React.useState<number>(
    useSelector((state: RootState) => state.character.Aegis)
  );
  const [health, setHealth] = React.useState<number>(
    useSelector((state: RootState) => state.character.Hp)
  );

  const handleClick = (category: Category, value: "+" | "-") => {
    switch (category) {
      case Category.HEALTH:
        if (value === "+" && health < maxHealth) {
          setHealth(health + 1);
        } else if (value === "-" && health > 0) {
          setHealth(health - 1);
        }
        break;
      case Category.SHIELD:
        if (value === "+" && shield < maxShield) {
          setShield(shield + 1);
        } else if (value === "-" && shield > 0) {
          setShield(shield - 1);
        }
        break;
      case Category.AEGIS:
        if (value === "+" && aegis < maxAegis) {
          setAegis(aegis + 1);
        } else if (value === "-" && aegis > 0) {
          setAegis(aegis - 1);
        }
        break;
    }
  };

  const restoreAll = () => {
    setHealth(maxHealth);
    setShield(maxShield);
    setAegis(maxAegis);
  };

  return (
    <div className="main-page-container">
      <div className="main-page-subheader">
        <div className="shield-container">
          {" "}
          <div
            className="change-button"
            onClick={() => handleClick(Category.SHIELD, "-")}
          >
            -
          </div>
          <Shield />
          <div className="subheader-text">{shield}</div>
          <div
            className="change-button"
            onClick={() => handleClick(Category.SHIELD, "+")}
          >
            +
          </div>
        </div>
        <div className="shield-container">
          {" "}
          <div
            className="change-button"
            onClick={() => handleClick(Category.HEALTH, "-")}
          >
            -
          </div>
          <Health />
          <div className="subheader-text">{health}</div>
          <div
            className="change-button"
            onClick={() => handleClick(Category.HEALTH, "+")}
          >
            +
          </div>
        </div>
        <div className="shield-container">
          {" "}
          <div
            className="change-button"
            onClick={() => handleClick(Category.AEGIS, "-")}
          >
            -
          </div>
          <Aegis />
          <div className="subheader-text">{aegis}</div>
          <div
            className="change-button"
            onClick={() => handleClick(Category.AEGIS, "+")}
          >
            +
          </div>
        </div>
        <div className="restore-container">
          <div className="restore-button" onClick={() => restoreAll()}>
            Rest
          </div>
        </div>
      </div>
      <div className="main-page-body">
        <div className="main-page-left">Drawing board in Progress</div>
        <div className="main-page-right">Chat construction in progress</div>
      </div>
    </div>
  );
};

export default MainPage;
