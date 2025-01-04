import { HeroList } from "../../Components/Molecules/HeroList/HeroList";

//TODO mock data

const heroes = [
  {
    image: "https://via.placeholder.com/150",
    title: "Hero 1",
    subtitle: "Subtitle 1",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Hero 2",
    subtitle: "Subtitle 2",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Hero 3",
    subtitle: "Subtitle 3",
  },
];

export const Homepage = () => {
  return (
    <div>
      <HeroList heroes={heroes} />
    </div>
  );
};
