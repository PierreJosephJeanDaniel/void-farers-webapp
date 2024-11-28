import React, { useEffect, useState } from "react";
import { RootState } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { supabaseManager } from "../../Managers/SupabaseManager/SupabaseManager";
import "./CharacterSelection.css";
import Airlock from "../../Components/AirLock/AirLock";
import ReturnArrow from "../../Components/ReturnArrow/ReturnArrow";
import { useNavigate } from "react-router-dom";
import { CharacterProps } from "./types";
import { updateCharacter } from "../../Store/Character";

const CharacterSelection: React.FC = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const userId = useSelector((state: RootState) => state.auth.userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await supabaseManager.LogOut();
  };

  const handleGoBack = () => {
    navigate("/landing");
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const characterData = await supabaseManager.fetchCharacters(userId);
        setCharacters(characterData.map((char: { Name: string }) => char.Name));
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [userId]);

  const handleCharacterSelected = async (name: string) => {
    const characterInfo: CharacterProps[] =
      await supabaseManager.selectCharacter(userId, name);

    const characterPayload: CharacterProps = characterInfo[0];
    dispatch(updateCharacter(characterPayload));
    navigate("/character-sheet");
  };

  if (loading) {
    return <div className="loading-fidget">Loading...</div>;
  }

  return (
    <div className="main-container">
      <header className="landing-header">
        <ReturnArrow onClick={handleGoBack} />
        <Airlock onClick={handleLogout} />
      </header>
      <div className="title">Available characters</div>
      <div className="body">
        {characters.map((name, index) => (
          <div
            className="character"
            key={index}
            onClick={() => handleCharacterSelected(name)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;
