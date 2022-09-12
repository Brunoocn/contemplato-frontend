import { Container } from "./styles";
import { InfosGithubTable } from "../../InfosTable/InfosGithubTable";

export function DashboardGihub() {

  return (
    <Container>
      <h1>Repositórios do github</h1>
      <InfosGithubTable />
    </Container>
  );
}