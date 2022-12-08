import React from 'react';

function CardNews({ urlToImage, title, url, author, publishedAt, content }) {
  return (
    <div className="card card-news">
      <div className="wrap-img">
        <img
          data-src={urlToImage}
          src="./img/blank-picture.png"
          alt={('gambar', title)}
          className="card-img-top card-img lazyload"
        />
      </div>
      <div className="card-body">
        <a href={url} target="_blank" rel="noreferrer" title={title}>
          <h4 className="card-title text-truncate">{title}</h4>
        </a>
        <p className="card-author">{author}</p>
        <p className="card-publish">{publishedAt}</p>
        <p className="card-text card-content text-truncate" title={content}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default CardNews;
