import "../css/About.css";
import Image from "../images/profile.jpg";
import about from "../data/about.json";

export default function About() {
  return (
    <section className="about container-fluid" id="about">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12 col-sm-6 col-md-6 align-center">
            <img className="img img-fluid profile" src={Image} alt="profile" />
          </div>
          <div className="col col-12 col-xs-12 col-sm-6 col-md-6 about-text py-4">
            <h2>About me</h2>
            <p>{about.one}</p>
            <p>{about.two}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
