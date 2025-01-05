import Button from "../../Atoms/Button/Button";
import { HeroItemProps } from "./HeroItem.interface";
import styles from "./HeroItem.module.css";

export const HeroItem = ({ name, abilities, origin, image }: HeroItemProps) => {
  return (
    <div className={styles.heroItemContainer}>
      <h1>{name}</h1>
      <h2>Abilities: {abilities}</h2>
      <h2>Origin: {origin}</h2>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.buttonsContainer}>
        <Button size="100px" variant="secondary">
          Edit
        </Button>
        <Button size="100px">Delete</Button>
      </div>
    </div>
  );
};
