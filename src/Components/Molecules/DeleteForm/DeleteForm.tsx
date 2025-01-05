import Button from "../../Atoms/Button/Button";
import { DeleteFormProps } from "./DeleteForm.interface";
import styles from "./DeleteForm.module.css";

export const DeleteForm = ({ onClose }: DeleteFormProps) => {
  return (
    <div className={styles.deleteFormContainer}>
      <h1>Deseja deletar o herói?</h1>
      <div className={styles.buttonsContainer}>
        <Button variant="secondary" onClick={onClose}>
          Não
        </Button>
        <Button variant="primary">Sim</Button>
      </div>
    </div>
  );
};
