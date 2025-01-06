import { useState } from "react";
import Button from "../../Atoms/Button/Button";
import { DeleteForm } from "../../Molecules/DeleteForm/DeleteForm";
import { HeroForm } from "../../Molecules/HeroForm/HeroForm";
import { Modal } from "../../Molecules/Modal/Modal";
import { HeroItemProps } from "./HeroItem.interface";
import styles from "./HeroItem.module.css";

export const HeroItem = ({
  name,
  abilities,
  origin,
  image,
  _id,
}: HeroItemProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <div className={styles.heroItemContainer}>
        <h1>{name}</h1>
        <h2>Habilidades: {abilities}</h2>
        <h2>Origem: {origin}</h2>
        <div className={styles.imageContainer}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            size="100px"
            variant="secondary"
            onClick={() => setIsEditModalOpen(true)}
          >
            Editar
          </Button>
          <Button size="100px" onClick={() => setIsDeleteModalOpen(true)}>
            Deletar
          </Button>
        </div>
      </div>
      {isEditModalOpen && (
        <Modal
          onClose={() => setIsEditModalOpen(false)}
          isOpen={isEditModalOpen}
        >
          <HeroForm
            editData={{ name, abilities, origin, image, _id }}
            onClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal
          onClose={() => setIsDeleteModalOpen(false)}
          isOpen={isDeleteModalOpen}
        >
          <DeleteForm onClose={() => setIsDeleteModalOpen(false)} id={_id} />
        </Modal>
      )}
    </>
  );
};
