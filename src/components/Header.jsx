import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/recordings">Enregistraments</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};
