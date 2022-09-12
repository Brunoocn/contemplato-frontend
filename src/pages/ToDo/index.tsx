import { useState } from "react";
import { DashboardTask } from "../../components/Dashboards/DashboardTask";
import { Header } from "../../components/Headers/HeaderTask";
import { NewTaskModal } from "../../components/NewTaskModal";


export function ToDo() {

  const [isToDoModalOpen, setIsToDoModalOpen] = useState(false);
  const [isDeleteToDoModalOpen, setIsDeleteToDoModalOpen] =
    useState(false);

  function handleOpenTaskModal() {
    setIsToDoModalOpen(true);
  }

  function handleCloseTaskModal() {
    setIsToDoModalOpen(false);
  }

  function handleOpenDeleteTaskModal() {
    setIsDeleteToDoModalOpen(true);
  }

  return (
    <>
      <Header onOpenNewTaskModal={handleOpenTaskModal} />

      <DashboardTask onOpenDeleteTaskModal={handleOpenDeleteTaskModal} />

      <NewTaskModal
        isOpen={isToDoModalOpen}
        onRequestClose={handleCloseTaskModal}
      />

    </>
  );
}