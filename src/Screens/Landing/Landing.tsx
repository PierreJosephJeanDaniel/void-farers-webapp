import Globe from "../../Components/Globe/Globe";
import "./Landing.css";
import ContinueComponent from "../../Components/ContinueComponent/ContinueComponent";
import Airlock from "../../Components/AirLock/AirLock";
import { useNavigate } from "react-router-dom";
import { supabaseManager } from "../../Managers/SupabaseManager/SupabaseManager";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabaseManager.LogOut();
  };

  const handleContinue = () => {
    navigate("/home");
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="landing-title">Ready to enter the void?</div>
        <Airlock onClick={handleLogout} />
      </header>
      <Globe />
      <ContinueComponent onClick={handleContinue} />
    </div>
  );
};

export default Landing;
