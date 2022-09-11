import { SetStateAction, useContext } from "react";
import { IRepository, RepositoryContext } from "../contexts/GithubContext";

interface RepositoryContextData {
  respositorys: IRepository[];
  repositoryIsLoading: boolean;
  setRespositorys: (props: SetStateAction<IRepository[]>) => void;
  getRepositorys: () => void;
}

export function useGithub(): RepositoryContextData {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw new Error("useGithub must be used within an TaskProvider");
  }

  return context;
}
