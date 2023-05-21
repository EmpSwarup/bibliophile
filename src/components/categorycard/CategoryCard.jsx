import React from "react";
import "./categorycard.css";

const CategoryCards = ({ name, imageUrl }) => {
  return (
    <div className="category-card">
      <img className="category-img" src={imageUrl} alt={name} />
      <div className="category-title">{name}</div>
    </div>
  );
};

const CategoryCard = () => {
  const categories = [
    {
      name: "Romance",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-1.png?itok=JPijQ3xG",
    },
    {
      name: "Action",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-2.png?itok=1k5Az45m",
    },
    {
      name: "Adventure",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-3.png?itok=hyUUCWf2",
    },
    {
      name: "Fantasy",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-7.png?itok=ldRsRCOi",
    },
    {
      name: "Horror",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-9.png?itok=bxM3cfU-",
    },
  ];

  return (
    <div className="category-card-row">
      {categories.map((category, index) => (
        <CategoryCards
          key={index}
          name={category.name}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default CategoryCard;
