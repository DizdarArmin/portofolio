import "../css/Hero.css";
import HeroImage from "../images/hero.jpg";
export default function Hero() {
  const style = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: `cover`,
    width: `100%`,
  };
  return (
    <section id="hero" style={style}>
      <div className="hero-text text-right">
        <h1>Hi! My name is Armin</h1>
        <h3>...and I am frontend developer!</h3>
      </div>
    </section>
  );
}
