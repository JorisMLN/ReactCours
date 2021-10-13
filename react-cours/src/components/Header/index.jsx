import { Link } from 'react-router-dom';
import '../../App.css';

function Header() {
  return (
    <nav className="navBar">
      <div>
        <Link to="/"> Accueil </Link>
        <Link to="/survey"> Questionnaire </Link>
      </div>
    </nav>
  );
}

export default Header;
