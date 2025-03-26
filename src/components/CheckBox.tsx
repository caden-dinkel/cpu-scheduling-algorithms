export interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  id,
}) => {
  return (
    <div>
      <input
        style={{ background: `var(--foreground)` }}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded peer"
      />
      <label htmlFor={id} className="peer-checked:text-blue-600">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
