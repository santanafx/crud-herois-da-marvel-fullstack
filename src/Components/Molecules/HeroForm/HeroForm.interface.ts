export interface HeroFormProps {
  editData?: {
    name: string;
    abilities: string;
    origin: string;
    image: string;
    _id: string;
  };
  onClose: () => void;
}
