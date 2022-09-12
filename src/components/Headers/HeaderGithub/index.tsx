import { Container, Content } from "./styles";
import { SignOutButton } from "../../SignOutButton";
import logoImg from '../../../assets/logo_contemplato.png'



export function HeaderGithub() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="contemplato" />
        <div>
          <SignOutButton />
        </div>
      </Content>
    </Container>
  );
}
