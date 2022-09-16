import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInProps {
  email: string;
  password: string;
}

type SignInCredentials = {
  email: string;
  password: string;
};

type RegisterCredentials = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<boolean>;
  register(credentials: RegisterCredentials): Promise<boolean>;
  signOut: () => void;
  isLoggedIn: boolean;
};

const KEYAUTH = "user-params";
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userParams = localStorage.getItem(KEYAUTH);

    if (userParams) {
      setIsLoggedIn(true);
      // se não logado verifica a pagina e se estiver em pagina não autorizada volta para o login
    }
  })
  async function register({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) {
    let request = { name, email, password, confirmPassword };
    const res = await api.post("/auth/register", request);
    return res.status === 200;
  }

  async function signIn({ email, password }: SignInProps) {
    let request = { email, password };
    const res = await api.post("/auth/login", request);
    if (res.status === 200) {
      localStorage.setItem(KEYAUTH, JSON.stringify(res.data));
      return true;
    }
    return false;
  }

  async function signOut() {
    localStorage.clear();
    localStorage.removeItem(KEYAUTH);
  }


  return (
    <AuthContext.Provider
      value={{ signIn, register, signOut, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
