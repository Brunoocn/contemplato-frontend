import { ReactNode, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";
import { Github } from "../../pages/Github";
import { ToDo } from "../../pages/ToDo";


type PrivateProps = {
  children: ReactNode;
};

export function RoutesComponent() {
  const Private = ({ children }: PrivateProps) => {
    const { isLoggedIn } = useAuth();
    
    console.log(isLoggedIn)
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
          <Route path="/todo" element={<Private><ToDo /></Private>} />
          <Route path="/criarconta" element={<SignUp />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}