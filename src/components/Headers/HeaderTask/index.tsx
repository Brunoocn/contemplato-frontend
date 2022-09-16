import { Container, Content } from "./styles";
import { SignOutButton } from "../../SignOutButton";
import logoImg from '../../../assets/logo_contemplato.png'
import { Link } from "react-router-dom";

interface HeaderProps {
  onOpenNewTaskModal: () => void;
}

export function Header({ onOpenNewTaskModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <ul>
          <li>
            <Link to='/todo'>tasks</Link>
          </li>
          <li>
            <Link to='/github'>github</Link>
          </li>
        </ul>
        <div>
          <button type="button" onClick={onOpenNewTaskModal}>
            Cadastrar task
          </button>
          <SignOutButton />
        </div>
      </Content>
    </Container>
  );
}
