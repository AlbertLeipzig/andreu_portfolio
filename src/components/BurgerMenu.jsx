import { NavLink } from 'react-router-dom';
export const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <div className="burger-menu__line" value="1">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="burger-menu__line" value="2">
        <NavLink to="/recordings">Gravacions</NavLink>
      </div>
      <div className="burger-menu__line" value="3">
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div className="burger-menu__line" value="4">
        <NavLink to="contact">Contacte</NavLink>
      </div>
      <div className="burger-menu__line" value="4"></div>
    </div>
  );
};
