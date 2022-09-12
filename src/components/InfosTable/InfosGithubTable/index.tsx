import { IRepository } from '../../../contexts/GithubContext';
import { useGithub } from '../../../hooks/useGithub';
import { Container } from "./styles"

import unlockImg from '../../../assets/unlock.svg';
import lockImg from '../../../assets/lock.svg';
import linkImg from '../../../assets/link.svg';

export function InfosGithubTable() {
  const { respositorys } = useGithub();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome do repositório</th>
            <th>Linguagem</th>
            <th>Private</th>
          </tr>
        </thead>
        <tbody>
          {respositorys ? (
            respositorys.map((repository: IRepository, index: number) => {
              return (
                <tr key={index}>
                  <td>{repository.name}</td>
                  <td>{repository.language}</td>
                  <td>
                    {
                      repository.private ? (
                        <img src={lockImg} alt="Repositório privado" />
                      ) : (
                        <img src={unlockImg} alt="Repositório aberto" />
                      )
                    }
                  </td>
                  <td>
                    <a href={repository.html_url} target="_blank">
                      <img src={linkImg} alt="veja o repositório" />
                    </a>
                  </td>
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