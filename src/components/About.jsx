import "../css/About.css";
import Image from "../images/profile.jpg";

import { getInfoAboutMe } from "../data/aboutMe";

export default function About() {
  return (
    <section className="about container-fluid" id="about">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12 col-sm-6 col-md-6 align-center">
            <img
              className="img img-fluid profile"
              src={Image}
              alt="profile"
            ></img>
          </div>
          <div className="col col-12 col-xs-12 col-sm-6 col-md-6 about-text py-4">
            <h2>About me</h2>
            {getInfoAboutMe()}
          </div>
        </div>
      </div>
    </section>
  );
}
