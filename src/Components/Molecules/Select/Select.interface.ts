export interface Option {
  value: string;
  image: string;
  disabled?: boolean;
}

export interface SelectProps {
  isLoading: boolean;
  options: Option[];
  value: string;
  onChange: (option: Option) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  errorMessage?: string;
}
