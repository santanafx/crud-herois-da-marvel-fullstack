import { ClipLoader } from "react-spinners";
import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "primary",
  size = "130px",
  isLoading,
  id,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
  };

  return (
    <>
      {isLoading ? (
        <button
          {...props}
          className={styles.buttonDisabled}
          id={id}
          style={{ minWidth: size }}
        >
          <ClipLoader
            color="#e10024"
            loading={isLoading}
            size={14}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </button>
      ) : (
        <button
          {...props}
          className={`${buttonStyles[variant]}`}
          id={id}
          style={{ minWidth: size }}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
