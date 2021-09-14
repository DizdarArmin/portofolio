import Tech from "./Tech";
import Container from "./Container";
import tech from "../data/tech.json";

export default function Technologies() {
  function MapTechnologies() {
    return tech.list.map((item, i) => <Tech key={i} item={item} />);
  }

  return (
    <Container
      id="tech"
      title={tech.title}
      description={tech.description}
      mapping={MapTechnologies()}
    />
  );
}
