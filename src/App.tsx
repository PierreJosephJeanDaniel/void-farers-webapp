import { Provider } from "react-redux";
import "./App.css";
import CharacterSheet from "./Components/CharacterSheet/CharacterSheet";
import Starfield from "./Components/Starfield/Starfield";
import store from "./Store";
import Popup from "./Components/Popup/Popup";
import { useEffect, useState } from "react";
import { Session, createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

// Variables have to be prefixed with VITE_ to be accessible in the client side (https://vite.dev/guide/env-and-mode.html#env-files)

const ApiKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SupabaseUlr: string = import.meta.env.VITE_SUPABASE_PROJECT_URL;

const supabase = createClient(SupabaseUlr, ApiKey);

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return (
      <Provider store={store}>
        <Starfield />
        <CharacterSheet name={"Bilbo Baggins"} />
        <Popup />
      </Provider>
    );
  }
}

export default App;
