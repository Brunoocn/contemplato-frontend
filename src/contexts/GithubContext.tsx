import { createContext, SetStateAction, useEffect, useState } from 'react'
import { apiGithub as api } from '../services/github';

export type IRepository = {
  name: string;
  private: boolean;
  language: string;
  html_url: string;
}

interface RepositoryContextData {
  respositorys: IRepository[];
  repositoryIsLoading: boolean;
  setRespositorys: (props: SetStateAction<IRepository[]>) => void;
  getRepositorys: () => void;
}

export const RepositoryContext = createContext({} as RepositoryContextData)

export const GithubProvider: React.FC = ({ children }) => {
  const [respositorys, setRespositorys] = useState<IRepository[]>([]);
  const [repositoryIsLoading, setRepositoryIsLoading] = useState(true);

  function getRepositorys() {
    api.get<IRepository[]>("/users/Brunoocn/repos").then((response) => {
      setRespositorys(response.data);
      setRepositoryIsLoading(false);
    })
  }

  useEffect(() => {
    getRepositorys();
  }, [])

  return (
    <RepositoryContext.Provider value={{ respositorys, setRespositorys, repositoryIsLoading, getRepositorys }}>
      {children}
    </RepositoryContext.Provider>
  )
}
