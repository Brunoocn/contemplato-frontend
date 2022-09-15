import Modal from "react-modal";
import deleteImg from "../../assets/icon-delete-task.svg";

import { Container } from "./styles";

interface ConfirmTaskModalProps {
  isOpen: boolean;
  onClickCancel: () => void;
  onClickConfirm: () => void;
  title: string;
  message: string;
}

export function ConfirmTaskModal({
  isOpen,
  onClickCancel,
  onClickConfirm,
  title,
  message,
}: ConfirmTaskModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClickCancel}
      overlayClassName="react-modal-overlay"
      className="react-modal-delete-content"
    >
      <Container>
        <img src={deleteImg} alt="Delete" />
        <h1>{title}</h1>
        <p>{message}</p>
        <div>
          <button onClick={onClickCancel}>Cancelar</button>
          <button className="delete-button" onClick={onClickConfirm}>
            Confirmar
          </button>
        </div>
      </Container>
    </Modal>
  );
}