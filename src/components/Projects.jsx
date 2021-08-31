import "../css/Projects.css";
import Image from "../images/hero.jpeg";
import { getProjects } from "../data";
import Card from "./Card";

export default function Projects() {
  function MapProjects() {
    let projects = getProjects();
    let mappedProject = projects.map((item) => <Card item={item} />);
    return mappedProject;
  }

  return (
    <section className="projects container-fluid" id="projects">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-3">
            <h2>Projects</h2>
            <p>Some text here....</p>
          </div>
          <div className="col-12 col-md-9 row align-center">
            {MapProjects()}
          </div>
        </div>
      </div>
    </section>
  );
}
