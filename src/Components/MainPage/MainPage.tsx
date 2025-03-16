import React from "react";
import "./MainPage.css";
import Shield from "../Shield/Shield";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import Health from "../Health/Health";
import Aegis from "../Aegis/Aegis";
import SideChat from "../SideChat/SideChat";
import {
  decreaseAegis,
  decreaseArmor,
  decreaseHp,
  increaseAegis,
  increaseArmor,
  increaseHp,
  updateCharacter,
} from "../../Store/Character";
import { setTracker } from "../../Store/ChangeTracker";

enum Category {
  HEALTH = 0,
  SHIELD = 1,
  AEGIS = 2,
}

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const maxHealth: number = useSelector(
    (state: RootState) => state.character.MaxHp
  );
  const maxShield: number = useSelector(
    (state: RootState) => state.character.MaxArmor
  );
  const maxAegis: number = useSelector(
    (state: RootState) => state.character.MaxAegis
  );

  const userName: string = useSelector(
    (state: RootState) => state.character.Name
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
      case Category.HEALTH: {
        let newHealth: number = health;
        if (value === "+" && health < maxHealth) {
          newHealth += 1;
          setHealth(newHealth);
          dispatch(increaseHp({}));
          dispatch(setTracker(true));
        } else if (value === "-" && health > 0) {
          newHealth -= 1;
          setHealth(newHealth);
          dispatch(decreaseHp({}));
          dispatch(setTracker(true));
        }
        break;
      }
      case Category.SHIELD: {
        let newShield: number = shield;
        if (value === "+" && shield < maxShield) {
          newShield += 1;
          setShield(newShield);
          dispatch(increaseArmor({}));
          dispatch(setTracker(true));
        } else if (value === "-" && shield > 0) {
          newShield -= 1;
          setShield(newShield);
          dispatch(decreaseArmor({}));
          dispatch(setTracker(true));
        }
        break;
      }

      case Category.AEGIS: {
        let newAegis: number = aegis;
        if (value === "+" && aegis < maxAegis) {
          newAegis += 1;
          setAegis(newAegis);
          dispatch(increaseAegis({}));
          dispatch(setTracker(true));
        } else if (value === "-" && aegis > 0) {
          newAegis -= 1;
          setAegis(newAegis);
          dispatch(decreaseAegis({}));
          dispatch(setTracker(true));
        }
        break;
      }
    }
  };

  const restoreAll = () => {
    setHealth(maxHealth);
    setShield(maxShield);
    setAegis(maxAegis);
    dispatch(
      updateCharacter({ Hp: maxHealth, Armor: maxShield, Aegis: maxAegis })
    );
    dispatch(setTracker(true));
  };

  return (
    <div className="main-page-container">
      <div className="main-page-subheader">
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
        <SideChat userName={userName} />
      </div>
    </div>
  );
};

export default MainPage;
