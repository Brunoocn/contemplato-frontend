import deleteImg from "../../assets/delete.svg";
import editImg from "../../assets/edit.svg";
import { ITask } from "../../contexts/TaskContext";
import { useTask } from "../../hooks/useTask";
import { Container } from "./styles";

interface TableProps {
  onOpenDeleteInventoryModal: () => void;
  onClickDelete: (task: ITask) => void;
}

export function InfosTable({ onClickDelete }: TableProps) {
  const { tasks } = useTask();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks ? (
            tasks.map((task: ITask, index: number) => {
              return (
                <tr key={index}>
                  <td>{task.task}</td>
                  <td className="icon-td">
                    <button>
                      <img src={editImg} alt="Editar task" />
                    </button>
                    <button
                      onClick={() => {
                        onClickDelete(task);
                      }}
                    >
                      <img src={deleteImg} alt="Deletar task" />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Nenhuma task encontrada encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}