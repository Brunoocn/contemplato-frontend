import { Container, Content } from "./styles";
import { SignOutButton } from "../../SignOutButton";
import logoImg from '../../../assets/logo_contemplato.png'
import { Link } from "react-router-dom";



export function HeaderGithub() {
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
          <SignOutButton />
        </div>
      </Content>
    </Container>
  );
}
