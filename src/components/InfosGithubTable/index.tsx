import { IRepository } from '../../contexts/GithubContext';
import { useGithub } from '../../hooks/useGithub';
import { Container } from "./styles";

export function InfosGithubTable() {
  const { respositorys } = useGithub();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome do repositório</th>
            <th>Linguagem</th>
          </tr>
        </thead>
        <tbody>
          {respositorys ? (
            respositorys.map((repository: IRepository, index: number) => {
              return (
                <tr key={index}>
                  <td>{repository.name}</td>
                  <td>{repository.language}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Nenhum repositório encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}