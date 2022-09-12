import { useState } from 'react'
import { ITask } from '../../../contexts/TaskContext';
import { useTask } from '../../../hooks/useTask';
import { InfosTable } from '../../InfosTable/InfosTableTask';
import { Container } from "./styles";

interface DashboardProps {
  onOpenDeleteTaskModal: () => void;
}

export function DashboardTask({ onOpenDeleteTaskModal }: DashboardProps) {
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] =
    useState(false);
  const [taskSelected, setTaskSelected] = useState<ITask | null>(
    null
  );
  const { deleteTask } = useTask();

  function handleDeleteTask(task: ITask) {
    setTaskSelected(task);
    setIsDeleteTaskModalOpen(true);
  }

  function handleModalConfirmTask() {
    deleteTask(taskSelected?.id);
    setIsDeleteTaskModalOpen(false);
  }

  return (
    <Container>
      {/* <DeleteInventoryModal
        isOpen={isDeleteTaskModalOpen}
        onClickCancel={() => setIsDeleteInventoryModalOpen(false)}
        onClickConfirm={handleModalConfirmTask}
        title="Excluir inventario?"
        message="Tem certeza que você deseja excluir este inventario?"
      /> */}
      <InfosTable
        onOpenDeleteInventoryModal={onOpenDeleteTaskModal}
        onClickDelete={handleDeleteTask}
      />
    </Container>
  );
}