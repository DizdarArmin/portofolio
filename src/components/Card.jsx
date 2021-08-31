export default function Card({ item }) {
  const { name, completed, image } = item;
  return (
    <div className="col-6 col-md-4 myCard">
      <div className="">{name}</div>
    </div>
  );
}
