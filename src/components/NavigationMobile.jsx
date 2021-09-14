import Logo from "../images/Logo.png";
import "../css/Mobile.css";
export default function MobileNavigation() {
  return (
    <nav className="mobile">
      <ul>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="logo-img">
          <a href="#hero" className="logo">
            <img src={Logo} alt="logo"></img>
          </a>
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
