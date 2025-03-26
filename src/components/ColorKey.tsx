import React from "react";

interface ColorKeyItem {
  color: string;
  label: string;
}

interface ColorKeyProps {
  items: ColorKeyItem[];
}

const ColorKey: React.FC<ColorKeyProps> = ({ items }) => {
  return (
    <div className="color-key-container">
      <h4 className="font-bold">Color Key</h4>
      <div
        className="color-key-list"
        style={{ display: "flex", flexDirection: "row", gap: "20px" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="color-key-item"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: item.color,
                marginRight: "10px",
                borderRadius: "3px",
              }}
            ></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorKey;
