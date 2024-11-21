import { User } from "@supabase/supabase-js";
import Globe from "../Globe/Globe";
import "./Landing.css";

interface LandingProps {
  User: User;
}

const Landing: React.FC<LandingProps> = ({ User }) => {
  console.log("User: ", User);

  return (
    <div className="landing-container">
      <Globe />
      <Globe />
    </div>
  );
};

export default Landing;
