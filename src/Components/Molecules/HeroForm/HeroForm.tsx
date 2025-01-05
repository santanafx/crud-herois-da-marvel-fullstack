import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Button from "../../Atoms/Button/Button";
import { Input } from "../../Atoms/Input/Input";
import { HeroFormProps } from "./HeroForm.interface";
import styles from "./HeroForm.module.css";

const createHeroSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  abilities: z.string().min(1, { message: "Abilities is required" }),
  origin: z.string().min(1, { message: "Origin is required" }),
  image: z.string().min(1, { message: "Image is required" }),
});

type createHeroSchemaType = z.infer<typeof createHeroSchema>;

export const HeroForm = ({ editData }: HeroFormProps) => {
  const { handleSubmit, control } = useForm<createHeroSchemaType>({
    resolver: zodResolver(createHeroSchema),
    defaultValues: {
      name: editData ? editData.name : "",
      abilities: editData ? editData.abilities : "",
      origin: editData ? editData.origin : "",
      image: editData ? editData.image : "",
    },
  });

  const handleHeroForm = (data: createHeroSchemaType) => {
    console.log(data);
  };

  return (
    <div className={styles.heroFormContainer}>
      <div className={styles.titleContainer}>
        {editData ? <h1>Editar herói</h1> : <h1>Criar herói</h1>}
      </div>
      <Input
        control={control}
        name="name"
        label="Nome"
        placeholder="Digite o nome..."
      />
      <Input
        control={control}
        name="abilities"
        label="Habilidades"
        placeholder="Digite as habilidades..."
      />
      <Input
        control={control}
        name="origin"
        label="Origem"
        placeholder="Digite a origem..."
      />
      <Input
        control={control}
        name="image"
        label="Image"
        placeholder="placeholder"
      />
      <div className={styles.buttonsContainer}>
        <Button onClick={handleSubmit(handleHeroForm)}>Salvar</Button>
      </div>
    </div>
  );
};
