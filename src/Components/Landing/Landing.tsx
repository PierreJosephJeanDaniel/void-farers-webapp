import { User } from "@supabase/supabase-js";
import Globe from "../Globe/Globe";

interface LandingProps {
  User: User;
}

const Landing: React.FC<LandingProps> = ({ User }) => {
  console.log("User: ", User);

  return (
    <div>
      <Globe />
    </div>
  );
};

export default Landing;
