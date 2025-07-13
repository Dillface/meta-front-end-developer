import React from "react";
import "../index.css";

const Card = ({ title, description, imageSrc, price }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        borderRadius: "1em",
        borderBlockColor:"yellowgreen",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        overflow: "hidden",
        width: "275px",
        height: "435px",
      }}
    >
      <div style={{ width: "100%", height: "150px", overflow: "hidden" }}>
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ padding: "1rem", flex: 1, overflowY: "auto" }}>
        <h4 style={{ color: "#36454F", marginBottom: "0.5rem" }}>{title}</h4>
        <p style={{ fontSize: "0.875rem", color: "#36454F" }}>{description}</p>
        <p style={{ fontSize: "0.875rem", color: "#36454F", marginBottom: "0.1rem" }}>
          <strong>£{price}</strong>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <button>
          Order now
        </button>
      </div>
    </div>
  );
};

export default Card;