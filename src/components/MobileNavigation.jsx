import Logo from "../images/Logo.png";
import "../css/Mobile.css";
export default function MobileNavigation() {
  return (
    <nav className="mobile">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#hero" className="logo">
            <img src={Logo} alt="logo"></img>
          </a>
        </li>
        <li>
          <a href="#tech">Tech</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
