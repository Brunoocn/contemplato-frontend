import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTask } from "../../hooks/useTask";


import closeImg from "../../assets/close.svg";

import { Container } from "./styles";
interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({
  isOpen,
  onRequestClose,
}: NewTaskModalProps) {
  const { createTask } = useTask()

  const [task, setTask] = useState("");


  async function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    await createTask({
      task,
    });
    setTask("");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTask}>
        <h2>Cadastrar task</h2>
        <input
          placeholder="Task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}