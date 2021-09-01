import "../css/Projects.css";
import { getProjects } from "../data/projects";
import Card from "./Card";

export default function Projects() {
  function MapProjects() {
    let projects = getProjects();
    let mappedProject = projects.map((item, i) => <Card key={i} item={item} />);
    return mappedProject;
  }

  return (
    <section className="projects container-fluid" id="projects">
      <div className="container">
        <div className="row wrapper">
          <h2 className="col-12">Projects</h2>
        </div>

        <div className="row wrapper">
          <div className="col-12 col-md-3 projects-text">
            <p className="projects-description">
              These are the projects that I will make during my frontend course
              at Novare Potential
            </p>
          </div>
          <div className="col-12 col-md-9 row cards">{MapProjects()}</div>
        </div>
      </div>
    </section>
  );
}
