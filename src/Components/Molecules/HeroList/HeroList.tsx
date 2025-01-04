import { HeroItem } from "../../Atoms/HeroItem/HeroItem";
import { HeroListProps } from "./HeroList.interface";

export const HeroList = ({ heroes }: HeroListProps) => {
  return (
    <div>
      {heroes.map((hero) => (
        <HeroItem
          key={crypto.randomUUID()}
          image={hero.image}
          title={hero.title}
          subtitle={hero.subtitle}
        />
      ))}
    </div>
  );
};
