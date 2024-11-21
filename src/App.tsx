import { Provider } from "react-redux";
import "./App.css";
import CharacterSheet from "./Components/CharacterSheet/CharacterSheet";
import Starfield from "./Components/Starfield/Starfield";
import store from "./Store";
import Popup from "./Components/Popup/Popup";

function App() {
  return (
    <Provider store={store}>
      <Starfield />
      <CharacterSheet name={"Bilbo Baggins"} />
      <Popup />
    </Provider>
  );
}

export default App;
