import { SetStateAction, useContext } from "react";
import { ITask, TaskContext, TaskInput } from "../contexts/TaskContext";

interface TaskContextData {
  tasks: ITask[];
  tasksIsLoading: boolean;
  setTasks: (props: SetStateAction<ITask[]>) => void;
  getTasks: () => void;
  deleteTask: (taskId: number) => void;
  createTask: (taskInput: TaskInput) => void;
}

export function useTask(): TaskContextData {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within an TaskProvider");
  }

  return context;
}
