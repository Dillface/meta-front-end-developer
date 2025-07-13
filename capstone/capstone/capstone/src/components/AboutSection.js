import React from "react";
import sampleImage from "../assets/about.jpg"; 

const AboutSection = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px",
    backgroundColor: "#f4f4f4",
  };

  const contentStyle = {
    flex: 1,
    marginRight: "20px",
  };

  const imageContainerStyle = {
    flex: 1,
    textAlign: "right",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  };

  return (
    <section style={containerStyle} id="about">
      <div style={contentStyle}>
        <h2>About Us</h2>
        <p>
        Welcome to Little Lemon Chicago, a warm and inviting family-owned Mediterranean restaurant. 
        </p>
        <p>Our establishment combines cherished traditional recipes with a modern twist, creating a dining experience that is both nostalgic and innovative. Here, every dish is a heartfelt celebration of Mediterranean heritage—handcrafted with fresh, locally sourced ingredients and infused with the flavors passed down through generations. Whether you’re seeking a casual meal with family or an elegant evening out, Little Lemon delivers exquisite taste, genuine hospitality, and an ambiance that reflects the vibrant spirit of Chicago.</p>
      </div>
      <div style={imageContainerStyle}>
        <img src={sampleImage} alt="About" style={imgStyle} />
      </div>
    </section>
  );
};

export default AboutSection;