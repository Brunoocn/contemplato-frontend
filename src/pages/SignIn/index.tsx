import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Background } from "../../components/Background";
import { InputForm } from "../../components/InputForm";
import { Title } from "../../components/Title";
import { Container } from "./styles";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

export function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function validateForm() {
    if (name && password) {
      const data = {
        name,
        password,
      };
      const res = await signIn(data);
      if (res) {
        navigate("/todo");
      }
    } else {
      toast.error("Está faltando algumas informações ou as informações estão incorretas.");
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Background />
      <Title>Entre com sua conta!</Title>
      <Container onSubmit={handleSubmit}>
        <InputForm
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <InputForm
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />

        <button type="submit" onClick={validateForm}>
          Entrar
        </button>
        <p>
          Não tem uma conta? <br />
          <Link to="/criarconta">
            <span className="sign-in-link">Registre-se agora!</span>
          </Link>
        </p>
      </Container>
    </>
  );
}
