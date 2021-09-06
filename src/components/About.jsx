// this 3 are project files but be gruped together
import "../css/About.css";
import Image from "../images/profile.jpg";
import { getInfoAboutMe } from "../data/aboutMe"; // this is a react component not a function -1

export default function About() {
  return (
    <section className="about container-fluid" id="about">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12 col-sm-6 col-md-6 align-center">
            {/* use self closing tag for img. <img/> instead of <img></img> */}
            {/* See it moves it to 1 line! */}
            <img className="img img-fluid profile" src={Image} alt="profile" />
          </div>
          <div className="col col-12 col-xs-12 col-sm-6 col-md-6 about-text py-4">
            <h2>About me</h2>
            {/* same comment as on the import at line #4 */}
            {getInfoAboutMe()}
          </div>
        </div>
      </div>
    </section>
  );
}
