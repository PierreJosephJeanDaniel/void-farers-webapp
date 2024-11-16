import { Provider } from "react-redux";
import "./App.css";
import CharacterSheet from "./Components/CharacterSheet/CharacterSheet";
import Starfield from "./Components/Starfield/Starfield";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Starfield />
      <CharacterSheet name={"Bilbo Baggins"} />
    </Provider>
  );
}

export default App;
