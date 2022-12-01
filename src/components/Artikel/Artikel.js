import React from 'react';
import CardArtikel from './CardArtikel';
import './Artikel.scss';

function genereteFoto(angka) {
  return `https://source.unsplash.com/200x10${angka}?mental+health`;
}

function Artikel() {
  const [artikels, setArtikels] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getDataArtikel() {
      const request = await fetch(
        'https://mental-health-info-api.p.rapidapi.com/news?rapidapi-key=829962c762mshd7b52cb2cc067bcp11aa32jsnbac417ddf5fa'
      );

      const response = await request.json();
      setArtikels(response);
      setLoading(false);
    }

    getDataArtikel();
  }, []);

  return (
    <section className="artikel mt-5">
      <div className="container">
        <h2 className="green">Artikel</h2>
        <h2>Tingkatkan Kesehatan Mental Anda</h2>

        {loading ? (
          <i>Loading data ...</i>
        ) : (
          <div className="row row-artikel p-5">
            {artikels.map((artikel, index) => (
              <div className="col col-center" key={index.toString()}>
                <CardArtikel
                  img={genereteFoto(index)}
                  title={artikel.title}
                  url={artikel.url}
                  source={artikel.source}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Artikel;
