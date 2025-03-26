import Checkbox, { CheckboxProps } from "./CheckBox";
import NumberBox from "./NumberBox";

interface CheckNumberBoxComboMLFQProps extends CheckboxProps {
  onTimeQuantumChange: (newNumber: number) => void;
  onBoostTimeChange: (newNumber: number) => void;
  timeQuantum: number;
  boostTime: number;
}

const CheckNumberBoxComboMLFQ: React.FC<CheckNumberBoxComboMLFQProps> = ({
  label,
  id,
  checked,
  onChange,
  onBoostTimeChange,
  onTimeQuantumChange,
  timeQuantum,
  boostTime,
}) => {
  return (
    <>
      <Checkbox id={id} label={label} checked={checked} onChange={onChange} />
      {checked && (
        <>
          <NumberBox
            id="MLFQTQ"
            label="Time Quantum - MLFQ"
            onValueChange={onTimeQuantumChange}
            value={timeQuantum}
          />
          <NumberBox
            id="MLFQBT"
            label="Boost Time - MLFQ"
            onValueChange={onBoostTimeChange}
            value={boostTime}
          />
        </>
      )}
    </>
  );
};

export default CheckNumberBoxComboMLFQ;
