import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext";

import Modal from "react-modal";
import { RoutesComponent } from "./components/RoutesComponent";

Modal.setAppElement("#root");


export function App() {

  return (
    <AuthProvider>
      <Toaster />
      <RoutesComponent />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
