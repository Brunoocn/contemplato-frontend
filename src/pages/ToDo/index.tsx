import { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
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

      <Dashboard onOpenDeleteTaskModal={handleOpenDeleteTaskModal} />

      <NewTaskModal
        isOpen={isToDoModalOpen}
        onRequestClose={handleCloseTaskModal}
      />

    </>
  );
}