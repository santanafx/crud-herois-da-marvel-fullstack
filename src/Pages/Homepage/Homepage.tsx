import useSWR from "swr";
import { Header } from "../../Components/Organisms/Header/Header";
import { HeroList } from "../../Components/Organisms/HeroList/HeroList";
import { HomepageTemplate } from "../../Components/Template/HomepageTemplate/HomepageTemplate";
import { getHeroesList } from "../../Service/getHeroesList";

export const Homepage = () => {
  const { isLoading, error, data: heroes } = useSWR("/heroes", getHeroesList);

  if (error) {
    <div>
      <h1>Falha ao obter dados!</h1>
    </div>;
  }

  return (
    <HomepageTemplate
      header={<Header />}
      heroList={
        <HeroList
          heroes={heroes || { status: 0, data: [] }}
          isLoading={isLoading}
        />
      }
    />
  );
};
