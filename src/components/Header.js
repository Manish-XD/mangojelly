import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <div className="header__container">
        <Link to="/" className="header__link">
            <h1 className="header__heading">Mango Jelly</h1>
            <img src="/logo.png" alt="logo" className="header__logo"/>
        </Link>
    </div>
  )
}

export default Header;