import Tech from "./Tech";
import Container from "./Container";
import { getTechStack } from "../data/tech";

const tech = {
  title: "Tech",
  description: "Technologies that I'm comfortable with and also geting there.",
};

export default function Technologies() {
  let techStack = getTechStack();

  function MapTechnologies() {
    return techStack.map((item, i) => <Tech key={i} item={item} />);
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
