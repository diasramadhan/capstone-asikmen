import React from 'react';

function CardNews({ urlToImage, title, url, author, publishedAt, content }) {
  return (
    <div className="card card-news">
      <div className="wrap-img">
        <img src={urlToImage} alt={('gambar', title)} className="card-img-top card-img" />
      </div>
      <div className="card-body">
        <a href={url} target="_blank" rel="noreferrer">
          <h4 className="card-title text-truncate">{title}</h4>
        </a>
        <p className="card-author">{author}</p>
        <p className="card-publish">{publishedAt}</p>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

export default CardNews;
