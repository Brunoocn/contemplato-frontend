import {
  SetStateAction,
  createContext,
  useState,
  useEffect
} from "react";
import { api } from "../services/api";

export type ITask = {
  id: any;
  task: string;
  createdAt: string;
}

export type TaskInput = Omit<ITask, 'id' | 'createdAt'>

interface TaskContextData {
  tasks: ITask[];
  tasksIsLoading: boolean;
  setTasks: (props: SetStateAction<ITask[]>) => void;
  getTasks: () => void;
  deleteTask: (taskId: number) => void;
  createTask: (taskInput: TaskInput) => void;
}

export const TaskContext = createContext({} as TaskContextData);

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksIsLoading, setTasksIsLoading] = useState(false);

  function getTasks() {
    api.get<ITask[]>("/tasks").then((response) => {
      setTasks(response.data);
      setTasksIsLoading(false);
    })
  }

  async function deleteTask(taskId: number) {
    if (taskId === undefined) {
      return;
    }

    await api.delete(`/tasks/${taskId}`).then(() => {
      getTasks();
    })
  }

  async function createTask(taskInput: TaskInput) {
    await api.post('/tasks', {
      ...taskInput,
      createdAt: new Date()
    })
    getTasks();
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        tasksIsLoading,
        getTasks,
        deleteTask,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}