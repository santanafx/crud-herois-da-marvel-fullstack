import { Controller } from "react-hook-form";
import { InputProps } from "./Input.interface";
import styles from "./Input.module.css";

export const Input = ({ control, name, label, ...props }: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div className={styles.InputContainer}>
            <input type="text" {...props} {...field} />
            {error && <span>{error.message}</span>}
          </div>
        )}
      />
    </>
  );
};
