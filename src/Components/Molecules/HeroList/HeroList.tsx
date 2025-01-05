import { HeroItem } from "../HeroItem/HeroItem";
import { HeroListProps } from "./HeroList.interface";
import styles from "./HeroList.module.css";

export const HeroList = ({ heroes }: HeroListProps) => {
  return (
    <div className={styles.heroListContainer}>
      {heroes.map((hero) => (
        <HeroItem
          key={crypto.randomUUID()}
          image={hero.image}
          name={hero.name}
          abilities={hero.abilities}
          origin={hero.origin}
        />
      ))}
    </div>
  );
};
