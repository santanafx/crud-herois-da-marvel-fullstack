import { HeroItemProps } from "../HeroItem/HeroItem.interface";

export interface HeroListProps {
  heroes: { status: number; data: HeroItemProps[] };
  isLoading: boolean;
}
