import { Container, Content } from "./styles";
import { SignOutButton } from "../../SignOutButton";
import logoImg from '../../../assets/logo_contemplato.png'

interface HeaderProps {
  onOpenNewTaskModal: () => void;
}

export function Header({ onOpenNewTaskModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="contemplato" />
        <div>
          <button type="button" onClick={onOpenNewTaskModal}>
            Cadastrar inventario
          </button>
          <SignOutButton />
        </div>
      </Content>
    </Container>
  );
}
