import { useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { deleteHero } from "../../../Service/deleteHero";
import { getHeroesList } from "../../../Service/getHeroesList";
import Button from "../../Atoms/Button/Button";
import { DeleteFormProps } from "./DeleteForm.interface";
import styles from "./DeleteForm.module.css";

export const DeleteForm = ({ onClose, id }: DeleteFormProps) => {
  const { mutate } = useSWR("/heroes", getHeroesList);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await deleteHero(id);

      const loadingToast = toast.loading("Deletando herói...");

      if (response.status === 201 || response.status === 200) {
        await mutate();
        toast.success("Herói deletado com sucesso!");
        setIsLoading(false);
        onClose();
        toast.dismiss(loadingToast);
      } else {
        setIsLoading(false);
        toast.error("Falha ao deletar herói!");
        toast.dismiss(loadingToast);
      }
    } catch (error) {
      toast.error("Erro ao deletar herói!");
      console.error("Failed to delete hero:", error);
    }
  };

  return (
    <div className={styles.deleteFormContainer}>
      <h1>Deseja deletar o herói?</h1>
      <div className={styles.buttonsContainer}>
        <Button isLoading={isLoading} variant="secondary" onClick={onClose}>
          Não
        </Button>
        <Button isLoading={isLoading} variant="primary" onClick={handleDelete}>
          Sim
        </Button>
      </div>
    </div>
  );
};
