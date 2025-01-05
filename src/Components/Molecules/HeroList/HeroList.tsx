import { Skeleton } from "../../Atoms/Skeleton/Skeleton";
import { HeroItem } from "../HeroItem/HeroItem";
import { HeroListProps } from "./HeroList.interface";
import styles from "./HeroList.module.css";

export const HeroList = ({ heroes, isLoading }: HeroListProps) => {
  const skeletonArray = Array.from({ length: 5 });

  return (
    <>
      {isLoading ? (
        <div className={styles.heroListContainer}>
          {skeletonArray.map(() => (
            <Skeleton key={crypto.randomUUID()} width="300px" height="360px" />
          ))}
        </div>
      ) : (
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
      )}
    </>
  );
};
