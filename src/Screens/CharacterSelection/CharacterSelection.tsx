import React, { useEffect, useState } from "react";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";
import { supabaseManager } from "../../Managers/SupabaseManager/SupabaseManager";

const CharacterSelection: React.FC = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const userId = useSelector((state: RootState) => state.auth.userId);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>C</h1>
      <ul>
        {characters.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSelection;
