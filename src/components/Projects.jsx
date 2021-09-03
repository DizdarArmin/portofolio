import "../css/Projects.css";
import { getProjects } from "../data/projects";

import Container from "./Container";
import Card from "./Card";

const project = {
  title: "Projects",
  description:
    "These are the projects that I will make during my frontend course at Novare Potential",
};

export default function Projects({ setModalData }) {
  let projects = getProjects();

  function MapProjects() {
    return projects.map((item, i) => (
      <Card key={i} item={item} setModalData={setModalData} />
    ));
  }

  return (
    <Container
      id="projects"
      bgColor="#eeeeee"
      title={project.title}
      description={project.description}
      mapping={MapProjects()}
    />
  );
}
