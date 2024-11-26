import { Provider } from "react-redux";
import CharacterSheet from "./Screens/CharacterSheet/CharacterSheet";
import Starfield from "./Screens/Starfield/Starfield";
import store from "./Store";
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
import SupabaseManager from "./Managers/SupabaseManager/SupabaseManager";
import "./App.css";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    SupabaseManager.getSession().then((session) => {
      setSession(session);
    });

    const subscription = SupabaseManager.onAuthStateChange(
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
          supabaseClient={SupabaseManager.getClient()}
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
        <Starfield />
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/landing" />} />
            <Route path="/landing" element={<Landing User={session.user} />} />
            <Route
              path="/character-sheet"
              element={<CharacterSheet name={"Bilbo Baggins"} />}
            />
          </Routes>
        </Router>
        <Popup />
      </Provider>
    );
  }
}

export default App;
