import { useState } from 'react'
import { ITask } from '../../../contexts/TaskContext';
import { useTask } from '../../../hooks/useTask';
import { InfosTable } from '../../InfosTable/InfosTableTask';
import { Container } from "./styles";
import { ConfirmTaskModal } from '../../ConfirmModal'

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
      <ConfirmTaskModal
        isOpen={isDeleteTaskModalOpen}
        onClickCancel={() => setIsDeleteTaskModalOpen(false)}
        onClickConfirm={handleModalConfirmTask}
        title="Excluir task?"
        message="Tem certeza que você deseja excluir esta task?"
      />
      <InfosTable
        onOpenDeleteTaskModal={onOpenDeleteTaskModal}
        onClickDelete={handleDeleteTask}
      />
    </Container>
  );
}