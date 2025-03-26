export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
}) => {
  return (
    <>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={{
          color: `var(--background)`,
          backgroundColor: "rgb(154, 155, 96)",
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};
export default Button;
