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
    const SupabaseUlr: string = import.meta.env.VITE_SUPABASE_PROJECT_URL;
    this.supabase = createClient(SupabaseUlr, ApiKey);
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
    const {
      data: { session },
    } = await this.supabase.auth.getSession();
    const userName: string = session?.user.email ?? "";
    const userId: string = session?.user.id ?? "";
    store.dispatch(login({ userName: userName, userId: userId }));
    return session;
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
