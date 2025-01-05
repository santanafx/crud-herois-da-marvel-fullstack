import { Header } from "../../Components/Organisms/Header/Header";
import { HeroList } from "../../Components/Organisms/HeroList/HeroList";
import { HomepageTemplate } from "../../Components/Template/HomepageTemplate/HomepageTemplate";

//TODO remove mock data

const heroes = [
  {
    image: "https://via.placeholder.com/150",
    name: "Hero 1",
    abilities: "Subtitle 1",
    origin: "Subtitle 1",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Hero 2",
    abilities: "Subtitle 2",
    origin: "Subtitle 2",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Hero 3",
    abilities: "Subtitle 3",
    origin: "Subtitle 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Hero 3",
    abilities: "Subtitle 3",
    origin: "Subtitle 3",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Hero 3",
    abilities: "Subtitle 3",
    origin: "Subtitle 3",
  },
];

export const Homepage = () => {
  return (
    <HomepageTemplate
      header={<Header />}
      heroList={<HeroList heroes={heroes} isLoading={false} />}
    />
  );
};
