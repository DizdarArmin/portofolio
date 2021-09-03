export default function Tech({ item }) {
  const { name, image } = item;
  return (
    <div className="col-3 text-dark text-center">
      <div className=" card-img">
        <img src={image} />

        <h6 className="pt-1">{name}</h6>
      </div>
    </div>
  );
}
