import Logo from "../images/Logo.png";
import Navlink from "./NavLink";
import "../css/Mobile.css";

// Tip, use the word Navigation and then the device.  Example:
// NavigationDesktop
// NavigationMobile
// so they are grouped in the sidebar
export default function DesktopNavigation() {
  return (
    <nav className="navbar desktop">
      <a className="navbar-brand nav-item" href="#hero">
        <img className="logo" src={Logo}></img>
        Armin Dizdar
      </a>
      <ul className="form-inline my-2 my-lg-0">
        <Navlink to="about" name="About" />
        <Navlink to="projects" name="Projects" />
        <Navlink to="tech" name="Tech" />
        <Navlink to="contact" name="Contact" />
      </ul>
    </nav>
  );
}
