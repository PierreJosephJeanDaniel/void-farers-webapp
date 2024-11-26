import { User } from "@supabase/supabase-js";
import Globe from "../../Components/Globe/Globe";
import "./Landing.css";
import ContinueComponent from "../../Components/ContinueComponent/ContinueComponent";
import Airlock from "../../Components/AirLock/AirLock";
import supabaseManagerInstance from "../../Managers/SupabaseManager/SupabaseManager";

interface LandingProps {
  User: User;
}

const Landing: React.FC<LandingProps> = ({ User }) => {
  console.log("User: ", User);

  const handleLogout = async () => {
    await supabaseManagerInstance.LogOut();
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        Welcome to the Landing Page
        <Airlock onClick={handleLogout} />
      </header>
      <Globe />
      <ContinueComponent />
    </div>
  );
};

export default Landing;
