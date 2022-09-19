import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInProps {
  name: string;
  password: string;
}

type SignInCredentials = {
  name: string;
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
  const [userParams, setUserParams] = useState()

  useEffect(() => {
    const up = localStorage.getItem(KEYAUTH)
    if (up) {
      setUserParams(JSON.parse(up))
    }

    if (userParams) {
      setIsLoggedIn(true);
      // se não logado verifica a pagina e se estiver em pagina não autorizada volta para o login
    }
  }, [])
  async function register({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) {
    let request = { name, email, password, confirmPassword };
    const res = await api.post("/auth/register", request);
    if (res.status === 200) {
      res.status = 200
      return true
    }
    else {
      res.status = 400
      return false
    }
  }

  async function signIn({ name, password }: SignInProps) {
    let request = { name, password };
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
