export default function Tech({ item }) {
  const { name, iconClass } = item;
  return (
    <div className="col-3 text-muted text-center">
      <div className="m-1">
        <i className={iconClass}></i>
        <h6>{name}</h6>
      </div>
    </div>
  );
}
