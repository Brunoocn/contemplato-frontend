import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Background } from "../../components/Background";
import { InputForm } from "../../components/InputForm";
import { Title } from "../../components/Title";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

export function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function validateForm() {
    if (email && password && password && confirmPassword) {
      const data = {
        user,
        email,
        password,
        confirmPassword,
      };
      const res = await register(data);
      if (res) {
        navigate("/");
      }
    } else {
      toast.error("Está faltando algumas informações.");
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Background />
      <Title>Crie sua conta!</Title>
      <Container onSubmit={handleSubmit}>
        <InputForm
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Nome"
        />
        <InputForm
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <InputForm
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />

        <InputForm
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirme a senha"
        />

        <button type="submit" onClick={validateForm}>
          Criar
        </button>
        <p>
          Já tem uma conta? <br />
          <Link to="/">
            <span className="sign-in-link">Entre agora!</span>
          </Link>
        </p>
      </Container>
    </>
  );
}
