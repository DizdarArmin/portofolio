// I dont think this component is neccesary, you could have make a loop inside the Desktop navigation and be done with it
// after all you dont use on Mobile navigation
export default function Navlink({ to, name }) {
  return (
    <li className="nav-item">
      <a href={"#" + to}>{name}</a>
    </li>
  );
}
