interface NumberBoxProps {
  value: number;
  id: string;
  label: string;
  onValueChange: (newValue: number) => void;
}

const NumberBox: React.FC<NumberBoxProps> = ({
  value,
  id,
  onValueChange,
  label,
}) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(event.target.value);
    if (newVal >= 0) {
      onValueChange(newVal);
    }
  };
  return (
    <>
      <label
        htmlFor={id}
        style={{
          color: `var(--foreground)`,
          padding: "5px",
        }}
      >
        {label}
      </label>
      <input
        style={{
          backgroundColor: `var(--foreground)`,
          color: `var(--background)`,
          width: "60px",
          border: "1px solid var(--background)",
        }}
        id={id}
        value={value}
        type="number"
        onChange={handleValueChange}
      />
    </>
  );
};
export default NumberBox;
