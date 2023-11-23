import React from 'react';

export const Navbar = () => {
  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-between">
        <div className="me-3">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-bs-toggle="minimize"
          >
            <span className="icon-menu"></span>
          </button>
        </div>
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <img src="/efianara.png" alt="logo" />
          </a>
          <h1 className="welcome-text ms-3 d-none d-lg-block">Bienvenue chez E-Fianara </h1>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-top">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/inscription">
                Inscription
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/connexion">
                Se connecter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
