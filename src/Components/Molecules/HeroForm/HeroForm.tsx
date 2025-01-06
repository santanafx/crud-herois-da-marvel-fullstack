import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR from "swr";
import * as z from "zod";
import { createHero } from "../../../Service/createHero";
import { getHeroesList } from "../../../Service/getHeroesList";
import { getMarvelHeroList } from "../../../Service/getMarvelHeroList";
import { updateHero } from "../../../Service/updateHero";
import Button from "../../Atoms/Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { HeroFormProps, MarvelHero } from "./HeroForm.interface";
import styles from "./HeroForm.module.css";

const createHeroSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  abilities: z.string().min(1, { message: "As habilidades são obrigatórias" }),
  origin: z.string().min(1, { message: "A origem é obrigatória" }),
});

type createHeroSchemaType = z.infer<typeof createHeroSchema>;

export const HeroForm = ({ editData, onClose }: HeroFormProps) => {
  const { mutate } = useSWR("/heroes", getHeroesList);
  const {
    data,
    error,
    isLoading: isMarvelListLoading,
  } = useSWR("/marvelHeroesList", getMarvelHeroList);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    editData?.image || null
  );
  const options = data?.data.data.results.map((result: MarvelHero) => ({
    value: result.name,
    image: `${result.thumbnail.path}.${result.thumbnail.extension}`,
  }));

  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<createHeroSchemaType>({
    resolver: zodResolver(createHeroSchema),
    defaultValues: {
      name: editData ? editData.name : "",
      abilities: editData ? editData.abilities : "",
      origin: editData ? editData.origin : "",
    },
  });

  const handleHeroForm = async (data: createHeroSchemaType) => {
    setIsLoading(true);
    try {
      let response;
      let loadingToast;
      if (editData) {
        response = await updateHero(
          editData._id,
          data.name,
          data.abilities,
          data.origin,
          selectedImage || ""
        );
        loadingToast = toast.loading("Atualizando herói...");
      } else {
        loadingToast = toast.loading("Salvando herói...");
        response = await createHero(
          data.name,
          data.abilities,
          data.origin,
          selectedImage || ""
        );
      }

      if (response.status === 201 || response.status === 200) {
        await mutate();
        toast.success("Herói salvo com sucesso!");
        setIsLoading(false);
        toast.dismiss(loadingToast);
        onClose();
      } else {
        setIsLoading(false);
        toast.error("Falha ao salvar herói!");
        toast.dismiss(loadingToast);
      }
    } catch (error) {
      toast.error("Erro ao salvar herói!");
      console.error("Failed to submit hero form:", error);
    }
  };

  if (error) {
    return (
      <div>
        <h1>Erro ao carregar lista de heróis</h1>
      </div>
    );
  }

  return (
    <div className={styles.heroFormContainer}>
      <div className={styles.titleContainer}>
        {editData ? <h1>Editar herói</h1> : <h1>Criar herói</h1>}
      </div>
      <Select
        isLoading={isMarvelListLoading}
        options={options}
        label="Heróis"
        value={
          editData ? editData.name : selectedOption ? selectedOption.value : ""
        }
        placeholder="Selecione um herói..."
        onChange={(selectedOption) => {
          setSelectedOption(selectedOption);
          setSelectedImage(selectedOption.image);
          setValue("name", selectedOption.value);
        }}
        errorMessage={errors.name?.message}
      />
      <Input
        isLoading={isMarvelListLoading}
        control={control}
        name="abilities"
        label="Habilidades"
        placeholder="Digite as habilidades..."
      />
      <Input
        isLoading={isMarvelListLoading}
        control={control}
        name="origin"
        label="Origem"
        placeholder="Digite a origem..."
      />
      <div className={styles.buttonsContainer}>
        <Button
          isLoading={isLoading || isMarvelListLoading}
          onClick={handleSubmit(handleHeroForm)}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
};
