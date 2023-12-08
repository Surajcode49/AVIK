import React from 'react';
// import './Card.scss';
// import Flagimg from '../../Assets/usa.png'

const Card = ({image}) => {
  return (
    <div className="card-main">
      <img
        className="card-image"
        src={image} // Replace with your image URL
        alt="Card Image"
      />
      {/* <div className="card-content">
        <h2 className="card-title">Card Title</h2>
        <p className="card-text">
          This is a simple card component in React with SCSS styling.
        </p>
      </div> */}
    </div>
  );
};

export default Card;
