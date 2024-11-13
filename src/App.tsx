import "./App.css";
import CharacterSheet from "./Components/CharacterSheet/CharacterSheet";
import Starfield from "./Components/Starfield/Starfield";

function App() {
  return (
    <>
      <Starfield />
      <CharacterSheet name={"Bilbo Baggins"} />
    </>
  );
}

export default App;
