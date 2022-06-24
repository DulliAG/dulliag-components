import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export interface NavbarLink {
  link?: boolean;
  show: boolean;
  name: string;
  value: string;
  path: string;
}
export interface NavbarProps {
  brand: string;
  badge?: string;
  links: NavbarLink[];
}

export const Navbar: FC<NavbarProps> = ({ brand, badge, links }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const handleClick = () => {
    var navbarToggler = document.querySelector('.navbar .navbar-toggler');
    var navbarMenu = document.querySelector('.navbar .navbar-collapse');

    navbarToggler?.classList.toggle('collapsed');
    navbarMenu?.classList.toggle('show');
    toggle();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid px-0">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand fw-bold py-0" to="/">
            {brand}
          </Link>
          {badge && <span className="navbar-badge rounded">{badge}</span>}
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          {!open ? (
            <i style={{ fontSize: '1.3rem' }} className="ri-menu-line"></i>
          ) : (
            <i style={{ fontSize: '1.5rem' }} className="ri-close-line"></i>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links
              .filter(link => link.show)
              .map((link, index) => (
                <li key={index} className="nav-item">
                  {link.link ? (
                    <Link
                      id={link.name}
                      className="link nav-link"
                      to={link.path}
                      onClick={handleClick}
                    >
                      {link.value}
                    </Link>
                  ) : (
                    <a
                      id={link.name}
                      className="link nav-link"
                      href={link.path}
                      onClick={handleClick}
                    >
                      {link.value}
                    </a>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
