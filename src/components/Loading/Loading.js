import React from 'react';

export default function Loading() {
  return (
    <article className="position-fixed w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-primary">Sedang Memuat</h2>
      <p>Mohon tunggu</p>
    </article>
  );
}
