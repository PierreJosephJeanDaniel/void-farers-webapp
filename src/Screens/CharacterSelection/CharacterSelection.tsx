import React, { useEffect, useState } from "react";
import SupabaseManager from "../../Managers/SupabaseManager/SupabaseManager";

const CharacterSelection: React.FC = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const user = SupabaseManager.getClient().auth.user();
        if (user) {
          const characterData = await SupabaseManager.fetchCharacters(user.id);
          setCharacters(
            characterData.map((char: { name: string }) => char.name)
          );
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Character Selection</h1>
      <ul>
        {characters.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSelection;
