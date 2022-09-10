import { useNavigate } from "react-router-dom";
import logoutImg from "../../assets/logout.svg";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "./styles";

export function SignOutButton() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  async function logout() {
    await signOut();
    navigate("/");
  }

  return (
    <Button onClick={logout}>
      <img src={logoutImg} alt="logout" />
    </Button>
  );
}
