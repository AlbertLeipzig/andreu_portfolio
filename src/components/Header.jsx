import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu';
export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header>
      {isHome ? <h2>Musician Name</h2> : <div></div>}
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Home
              <div className="navlink-underline"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/recordings">
              Enregistraments<div className="navlink-underline"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              Blog<div className="navlink-underline"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contacte<div className="navlink-underline"></div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
};
