import React from "react";
interface HeaderProps {
  label: string;
  handleGoBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ label, handleGoBack }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          position: "relative",
          backgroundColor: `var(--foreground)`,
          color: `var(--background)`,
        }}
      >
        <span
          onClick={handleGoBack}
          style={{
            fontSize: "18px",
            color: "rgb(31, 72, 116)",
            textDecoration: "underline",
            cursor: "pointer",
            transition: "color 0.3s",
            position: "absolute",
            left: 3,
          }}
        >
          Go Back
        </span>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          alignItems: "center",
          backgroundColor: `var(--foreground)`,
          borderBottom: "2px solid #ccc",
          color: `var(--background)`,
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold", margin: 0 }}>
          {label}
        </h1>
      </header>
    </div>
  );
};

export default Header;
