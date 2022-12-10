/* eslint-disable import/order */
import React from 'react';
import CardNews from './CardNews';
import './Artikel.scss';
import showFormattedDateID from '../../utils/date-formater';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

function genereteFoto(angka) {
  return `https://source.unsplash.com/200x10${angka}?mental+health`;
}

function Artikel() {
  const [artikels, setArtikels] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getDataArtikel() {
      const request = await fetch(
        'https://api.thenewsapi.com/v1/news/all?api_token=yb4gHclNYnaFaPRM4pZmHrlj1nbKcmlZcDfADAGQ&search=kesehatan+mental'
      );

      const response = await request.json();
      setArtikels(response.data);
      setLoading(false);
    }

    getDataArtikel();
  }, []);

  return (
    <section className="artikel mt-5" id="artikel">
      <div className="container">
        <h2 className="green">Berita terbaru</h2>
        <h2>Tingkatkan Kesehatan Anda</h2>

        {loading ? (
          <div className="loading-container">
            <i>Loading Data...</i>
            <svg
              className="spinner"
              width="65px"
              height="65px"
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="path"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                cx="33"
                cy="33"
                r="30"
              />
            </svg>
          </div>
        ) : (
          <Swiper
            className="card-row p-5 mySwiper"
            slidesPerView={3}
            spaceBetween={25}
            slidesPerGroup={3}
            centeredSlides
            loop
            grabCursor
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation
            modules={[Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              950: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
          >
            {artikels.map((artikel, index) => (
              <SwiperSlide className="col-center" key={index.toString()}>
                <CardNews
                  urlToImage={artikel.image_url || genereteFoto(index)}
                  title={artikel.title}
                  url={artikel.url}
                  author={artikel.source}
                  publishedAt={showFormattedDateID(artikel.published_at)}
                  content={artikel.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Artikel;
