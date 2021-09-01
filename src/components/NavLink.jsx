export default function Navlink({ to, name }) {
  return (
    <li className="nav-item">
      <a href={"#" + to}>{name}</a>
    </li>
  );
}
