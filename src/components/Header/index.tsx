import { Container, Content } from "./styles";

import { SignOutButton } from "../SignOutButton";

interface HeaderProps {
  onOpenNewTaskModal: () => void;
}

export function Header({ onOpenNewTaskModal }: HeaderProps) {
  return (
    <Container>
      <Content>

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
