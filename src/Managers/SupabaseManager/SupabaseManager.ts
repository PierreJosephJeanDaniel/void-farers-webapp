import { createClient, SupabaseClient, Session } from "@supabase/supabase-js";
import store from "../../Store";
import { login } from "../../Store/Auth";
import { CharacterProps } from "../../Screens/CharacterSelection/types";

class SupabaseManager {
  public static instance: SupabaseManager;
  public supabase: SupabaseClient;

  public constructor() {
    // Variables have to be prefixed with VITE_ to be accessible in the client side (https://vite.dev/guide/env-and-mode.html#env-files)
    const ApiKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;
    const SupabaseUrl: string = import.meta.env.VITE_SUPABASE_PROJECT_URL;
    this.supabase = createClient(SupabaseUrl, ApiKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storage: {
          getItem: (key) => {
            try {
              return localStorage.getItem(key);
            } catch (error) {
              console.warn("Local storage access error:", error);
              return null;
            }
          },
          setItem: (key, value) => {
            try {
              localStorage.setItem(key, value);
            } catch (error) {
              console.warn("Local storage write error:", error);
            }
          },
          removeItem: (key) => {
            try {
              localStorage.removeItem(key);
            } catch (error) {
              console.warn("Local storage remove error:", error);
            }
          },
        },
      },
    });
  }

  public async signIn(email: string, password: string) {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Sign in error:", error);
        throw error;
      }

      if (!data.user || !data.session) {
        console.warn("Sign in successful but incomplete data returned");
        return null;
      }

      const userName: string = data.user?.email ?? "";
      const userId: string = data.user?.id ?? "";

      // Add this data to Redux store regardless of session storage
      store.dispatch(login({ userName, userId }));

      return data.session;
    } catch (err) {
      console.error("Sign in failed:", err);
      throw err;
    }
  }

  public async checkAndRestoreSession() {
    const session: Session | null = await this.getSession();

    if (!session || !session.user) {
      const auth = store.getState().auth;

      if (auth.userName && auth.userId) {
        console.warn("Found auth data in store but not in session");
      } else {
        console.warn("No authentication data found");
      }
    }

    return session;
  }

  public static get(): SupabaseManager {
    if (!SupabaseManager.instance) {
      SupabaseManager.instance = new SupabaseManager();
    }
    return SupabaseManager.instance;
  }

  public getClient(): SupabaseClient {
    return this.supabase;
  }

  public async LogOut(): Promise<void> {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    }
  }

  public async getSession(): Promise<Session | null> {
    try {
      const {
        data: { session },
      } = await this.supabase.auth.getSession();

      console.log("Raw session data:", session);

      if (!session) {
        console.warn("No session found");
        return null;
      }

      if (!session.user) {
        console.warn("Session found but no user data");
        return session;
      }

      const userName: string = session.user.email ?? "";
      const userId: string = session.user.id ?? "";

      console.log("User info:", {
        email: session.user.email,
        id: session.user.id,
        userName,
        userId,
      });

      if (!userName || !userId) {
        console.warn("User data incomplete:", { userName, userId });
      }

      store.dispatch(login({ userName, userId }));
      return session;
    } catch (error) {
      console.error("Error getting session:", error);
      return null;
    }
  }
  public onAuthStateChange(
    callback: (event: string, session: Session | null) => void
  ) {
    const {
      data: { subscription },
    } = this.supabase.auth.onAuthStateChange(callback);
    return subscription;
  }

  public async fetchCharacters(userId: string) {
    const { data: Characters, error } = await this.supabase
      .from("Characters")
      .select("Name")
      .eq("User", userId);

    if (error) throw error;
    return Characters;
  }

  public async selectCharacter(userId: string, name: string) {
    const { data: character, error } = await this.supabase
      .from("Characters")
      .select("*")
      .eq("User", userId)
      .eq("Name", name);

    if (error) throw error;
    return character as CharacterProps[];
  }

  public async updateCharacter(character: CharacterProps) {
    const { data: Characters, error } = await this.supabase
      .from("Characters")
      .update({
        Hp: character.Hp,
        Armor: character.Armor,
        Aegis: character.Aegis,
      })
      .eq("Name", character.Name)
      .eq("User", character.User)
      .select();

    if (error) throw error;
    return Characters;
  }
}

export const supabaseManager = new SupabaseManager();
