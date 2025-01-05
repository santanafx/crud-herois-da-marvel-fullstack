import { useState } from "react";
import Button from "../../Atoms/Button/Button";
import { HeroForm } from "../../Molecules/HeroForm/HeroForm";
import { Modal } from "../../Molecules/Modal/Modal";
import styles from "./Header.module.css";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <h1>Desafio: Criação de um CRUD de Novos Heróis da Marvel</h1>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Criar herói
        </Button>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
          <HeroForm />
        </Modal>
      )}
    </>
  );
};
