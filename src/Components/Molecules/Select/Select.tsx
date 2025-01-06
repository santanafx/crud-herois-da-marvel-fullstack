import { useState } from "react";
import { Skeleton } from "../../Atoms/Skeleton/Skeleton";
import { Option, SelectProps } from "./Select.interface";
import styles from "./Select.module.css";

export const Select = ({
  isLoading,
  options = [],
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="40px" margin="5px 0" />
      ) : (
        <div className={styles.selectContainer}>
          {label && <label className={styles.selectLabel}>{label}</label>}
          <div className={styles.selectContainer}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${styles.selectButton} ${
                !selectedOption && styles.placeholderColor
              }`}
            >
              {selectedOption ? selectedOption.value : placeholder}
            </button>
            <div className={styles.errorMessageContainer}>
              {errorMessage && <span>{errorMessage}</span>}
            </div>
            {isOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownContent}>
                  {options.map((option) => (
                    <button
                      key={crypto.randomUUID()}
                      onClick={() => handleSelect(option)}
                      disabled={option.disabled}
                      className={`${styles.optionButton} ${
                        option.disabled
                          ? styles.optionButtonDisabled
                          : styles.optionButtonEnabled
                      }`}
                    >
                      {option.value}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
