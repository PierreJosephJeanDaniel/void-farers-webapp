import { Provider } from "react-redux";
import CharacterSheet from "./Screens/CharacterSheet/CharacterSheet";
import Starfield from "./Screens/Starfield/Starfield";
import store, { persistor } from "./Store";
import Popup from "./Components/Popup/Popup";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Landing from "./Screens/Landing/Landing";
import "./App.css";
import CharacterSelection from "./Screens/CharacterSelection/CharacterSelection";
import { supabaseManager } from "./Managers/SupabaseManager/SupabaseManager";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseManager.getSession().then((session) => {
      setSession(session);
    });

    const subscription = supabaseManager.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="auth-container">
        <Auth
          supabaseClient={supabaseManager.getClient()}
          appearance={{
            theme: ThemeSupa,
          }}
          providers={[]}
        />
      </div>
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Starfield />
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/landing" />} />
              <Route path="/landing" element={<Landing />} />
              <Route
                path="/character-selection"
                element={<CharacterSelection />}
              />

              <Route
                path="/character-sheet"
                element={<CharacterSheet name={"Bilbo Baggins"} />}
              />
            </Routes>
          </Router>
          <Popup />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
