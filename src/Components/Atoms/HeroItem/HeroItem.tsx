import { HeroItemProps } from "./HeroItem.interface";

export const HeroItem = ({ title, subtitle, image }: HeroItemProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={image} alt={title} />
    </div>
  );
};
