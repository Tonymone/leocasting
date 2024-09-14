import React from 'react';
import './Card.css';

const Card = ({ Icon, title, points, buttonText, hreff }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <Icon className="icon" />
        </div>
        <h2 className="card-title">{title}</h2>
      </div>
      <ul className="card-list">
        {points.map((point, index) => (
          <li key={index} className="card-list-item">{point}</li>
        ))}
      </ul>
      <div className="card-button">
        <a href={hreff} className="btn-read-more">
          {buttonText} <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
