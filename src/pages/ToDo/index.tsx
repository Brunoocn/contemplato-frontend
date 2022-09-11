import { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
// import { Dashboard } from "../../components/Dashboard";
// import { NewInventoryModal } from "../../components/NewInventoryModal";


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

      {/* // <NewInventoryModal
      //   isOpen={isInventoryModalOpen}
      //   onRequestClose={handleCloseInventoryModal}
      /> */}
    </>
  );
}