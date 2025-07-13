import React from "react";
import Card from "./Card";

const projects = [
  {
    title: "Greek Salad",
    price: 8.00,
    description:
      "Fresh tomatoes, cucumbers, red onion, Kalamata olives, and feta cheese, dressed with extra virgin olive oil and oregano.",
    getImageSrc: () => require(("../assets/greek salad.jpg")),
  },
  {
    title: "Mezze Platter",
    price: 15.00,
    description:
      "A selection of hummus, tzatziki, baba ganoush, olives, pita bread, and dolmades.",
    getImageSrc: () => require(("../assets/mezze.jpg")),
  },
  {
    title: "Moussaka",
    price: 12.50,
    description:
      "Baked eggplant layered with minced lamb, tomatoes, and a creamy béchamel sauce.",
    getImageSrc: () => require(("../assets/moussaka.jpg")),
  },
];

const Specials = () => {
  return (
      <div style={{ paddingTop: "80px" }}>
      <h2
        id="projects-section"
        style={{
          margin: "0",
          padding: "40px",
          // textAlign:"left",
          paddingLeft:"390px"
        }}
      >
        This Months Specials
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "60px",
          width: "100%",
          margin: "auto",
          paddingBottom: "32px",
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            price={project.price}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </div>
      </div>  );
};

export default Specials;