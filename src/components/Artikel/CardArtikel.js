import React from 'react';

function CardArtikel({ img, title, url, source }) {
  return (
    <div className="card card-artikel">
      <img
        data-src={img}
        src="./img/blank-picture.png"
        className="card-img-top img-artikel lazyload"
        alt="foto artikel"
      />
      <div className="card-body">
        <h3 className="text-truncate" title={title}>
          <a href={url} className="text-truncate" target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <p>Source : {source}</p>
      </div>
    </div>
  );
}

export default CardArtikel;