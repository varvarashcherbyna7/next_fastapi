import { Dispatch, SetStateAction } from 'react';
import styles from './CustomInput.module.css';

export interface ICustomInput {
  value: string;
  type: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const CustomInput: React.FC<ICustomInput> = ({
  value,
  type,
  placeholder,
  setValue,
}) => {
  return (
    <input
      className={`${styles.asmForm__input} ${styles.validate}`}
      type={type}
      name={value}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
