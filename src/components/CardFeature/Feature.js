/* eslint-disable array-callback-return */
import React from 'react';
import CardFeature from './CardFeature';
import './Feature.scss';
import dataFeatures from './dataFetures';

const features = dataFeatures();

function Feture() {
  return (
    <section className="feature">
      <div className="container">
        <h2 className="text-center py-3">Fitur Yang Kami Sediakan</h2>
        <div className="row row-feture px-3">
          {features.map((feature) => (
            <CardFeature
              key={feature.title}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feture;
