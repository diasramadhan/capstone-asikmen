/* eslint-disable max-len */
import React from 'react';
import { Container } from 'react-bootstrap';
import './About.scss';

function About() {
  return (
    <Container className="__container_content" fluid>

      <div>
        <h3 className="text-center about_title">About App</h3>
        <p className="about_text_justify">
          Kesehatan mental merupakan hal penting bagi setiap orang, pemicu kesehatan mental yang buruk seseorang dapat disebabkan dari keadaan lingkungan sosial ataupun keluarga yang buruk. Berdasarkan penelitian yang dilakukan oleh University of Queensland dan Johns Hopkins Bloomberg School of Public Health menemukan bahwa 1 dari 20 (sekitar 5.5% yaitu 2,45 juta) remaja di Indonesia terdiagnosis memiliki gangguan mental.
          Lalu bagaimana masyarakat dapat mengetahui dan menjaga kondisi kesehatan mental mereka? untuk menjawab pertanyaan tersebut tim kami membuat aplikasi ASIKMEN yang akan mendiagnosis kesehatan mental pengguna menggunakan sistem CBT dan memberikan pencegahan juga solusi terhadap gangguan mental yang terdeteksi.
        </p>
      </div>

      <div>
        <h3 className="text-center about_title">About Us</h3>
        <p className="about_text">Kami adalah mahasiswa yang saat ini sedang mengikuti kegiatan kampus merdeka  mengambil program studi independen  di dicoding dengan learning path Front-End React.</p>
      </div>

    </Container>
  );
}

export default About;
