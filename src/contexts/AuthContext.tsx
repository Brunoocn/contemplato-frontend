import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface RegisterProps {
  user: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInProps {
  user: string;
  password: string;
}

type SignInCredentials = {
  user: string;
  password: string;
};

type RegisterCredentials = {
  user: string;
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
  clearUserParams: () => void;
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
    user,
    email,
    password,
    confirmPassword,
  }: RegisterProps) {
    let request = { user, email, password, confirmPassword };
    const res = await api.post("user/register", request);
    return res.status === 200;
  }

  async function signIn({ user, password }: SignInProps) {
    let request = { user, password };
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

  function clearUserParams() {
    localStorage.removeItem(KEYAUTH);
  }

  return (
    <AuthContext.Provider
      value={{ signIn, register, signOut, clearUserParams, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
