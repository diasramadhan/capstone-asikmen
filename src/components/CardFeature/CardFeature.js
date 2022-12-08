import React from 'react';

function CardFeature({ title, img, description }) {
  return (
    <div className="col card-feature">
      <div className="feature-title mb-2">
        <img src={img} alt="icon feture tes kesehatan" />
        <h3>{title}</h3>
      </div>

      <div className="feature-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardFeature;
