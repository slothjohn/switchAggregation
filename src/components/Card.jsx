import React from 'react';
import './CardList.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <img className="image" src={imageUrl} alt={title} />
    </div>
  );
};

const CardsList = ({ cardsData }) => {
  return (
    <div className="cards-list">
      {cardsData.map((cardData) => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </div>
  );
};

export default CardsList;