import "../css/Projects.css";
import projects from "../data/projects.json";

import Container from "./Container";
import Card from "./Card";

export default function Projects({ setModalData }) {
  function MapProjects() {
    return projects.list.map((item, i) => (
      <Card key={i} item={item} setModalData={setModalData} />
    ));
  }

  return (
    <Container
      id="projects"
      bgColor="#eeeeee"
      title={projects.title}
      description={projects.description}
      mapping={MapProjects()}
    />
  );
}
