import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext";
import { GithubProvider } from './contexts/GithubContext'
import { TaskProvider } from './contexts/TaskContext';

import Modal from "react-modal";
import { RoutesComponent } from "./components/RoutesComponent";

Modal.setAppElement("#root");


export function App() {

  return (
    <AuthProvider>
      <GithubProvider>
        <TaskProvider>
          <Toaster />
          <RoutesComponent />
          <GlobalStyle />
        </TaskProvider>
      </GithubProvider>
    </AuthProvider>
  );
}

export default App;
