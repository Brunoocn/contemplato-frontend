import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";

type PrivateProps = {
  children: ReactNode;
};

export function RoutesComponent() {
  const Private = ({ children }: PrivateProps) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
      return <Navigate to="/" />
    }

    return (
      <>
        {children}
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          {/* <Route path="/dashboard" element={<Private><Home /></Private>} /> */}
          <Route path="/criarconta" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}