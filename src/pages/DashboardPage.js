import React from 'react';
import DashboardMenu from '../components/DashboardMenu/DashboardMenu';
import DashboardQuotes from '../components/DashboardQuotes/DashboardQuotes';
import AuthContext from '../contexts/AuthContext';
import NavbarAuth from '../components/NavbarAuth/NavbarAuth';

export default function DashboardPage() {
  const currentUser = React.useContext(AuthContext);
  return (
    <>
      <NavbarAuth />
      <article>
        <div className="container mt-3">
          <h2>{`Halo ${currentUser.displayName}!`}</h2>
          <section className="mt-4">
            <DashboardMenu />
          </section>
          <section className="mt-3 mt-xl-5">
            <DashboardQuotes />
          </section>
        </div>
      </article>
    </>
  );
}
