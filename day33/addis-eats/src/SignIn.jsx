import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function handleSignIn() {
    login();
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h1>Sign In</h1>

      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
