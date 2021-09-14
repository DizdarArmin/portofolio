import Logo from "../images/Logo.png";
import "../css/Mobile.css";

export default function DesktopNavigation() {
  return (
    <nav className="navbar desktop">
      <a className="navbar-brand nav-item" href="#hero">
        <img className="logo" src={Logo}></img>
        Armin Dizdar
      </a>
      <ul className="form-inline my-2 my-lg-0">
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#tech">Tech</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
