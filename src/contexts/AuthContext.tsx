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
  getUserParams: () => { email: string };
  clearUserParams: () => void;
  getUserEmail: () => string | null;
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
    }

    // se não logado verifica a pagina e se estiver em pagina não autorizada volta para o login
  }, []);
  async function register({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) {
    let request = { name, email, password, confirmPassword };
    const res = await api.post("user/register", request);
    return res.status === 200;
  }

  async function signIn({ email, password }: SignInProps) {
    let request = { email, password };
    const res = await api.post("token", request);
    if (res.status === 200) {
      localStorage.setItem(KEYAUTH, JSON.stringify(res.data.data));
      return true;
    }
    return false;
  }

  async function signOut() {
    localStorage.clear();
    localStorage.removeItem(KEYAUTH);
  }

  function getUserParams() {
    const userParams = localStorage.getItem(KEYAUTH);
    if (userParams) return JSON.parse(userParams);
  }

  function clearUserParams() {
    localStorage.removeItem(KEYAUTH);
  }

  function getUserEmail() {
    const userParams = getUserParams();
    if (userParams === null) return null;
    return userParams.email;

  }

  return (
    <AuthContext.Provider
      value={{ signIn, register, signOut, getUserParams, clearUserParams, getUserEmail, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
