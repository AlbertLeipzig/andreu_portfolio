import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <h2>Musician Name</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/recordings">Enregistraments</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contacte</Link>
        </li>
      </ul>
    </header>
  );
};
