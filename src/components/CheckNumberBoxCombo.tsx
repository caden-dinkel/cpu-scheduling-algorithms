import Checkbox, { CheckboxProps } from "./CheckBox";
import NumberBox from "./NumberBox";

interface CheckNumberBoxComboProps extends CheckboxProps {
  onValueChange: (newNumber: number) => void;
  value: number;
}

const CheckNumberBoxComboRR: React.FC<CheckNumberBoxComboProps> = ({
  label,
  id,
  checked,
  onChange,
  onValueChange,
  value,
}) => {
  return (
    <>
      <Checkbox id={id} label={label} checked={checked} onChange={onChange} />
      {checked && (
        <NumberBox
          id="RRTQ"
          label="Time Quantum - RR"
          onValueChange={onValueChange}
          value={value}
        />
      )}
    </>
  );
};

export default CheckNumberBoxComboRR;
