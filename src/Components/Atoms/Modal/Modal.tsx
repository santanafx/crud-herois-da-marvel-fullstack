import Button from "../Button/Button";
import { ModalProps } from "./Modal.interface";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.closeButton}>
          <Button size="3px" onClick={onClose}>
            X
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};
