import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Newsletters</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Subscribe NewsLetters</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
