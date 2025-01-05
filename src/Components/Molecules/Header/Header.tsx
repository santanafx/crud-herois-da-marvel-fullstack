import { useState } from "react";
import Button from "../../Atoms/Button/Button";
import { Modal } from "../../Atoms/Modal/Modal";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <h1>Desafio: Criação de um CRUD de Novos Heróis da Marvel</h1>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Create Hero
        </Button>
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
          <h1>teste</h1>
        </Modal>
      )}
    </>
  );
};
