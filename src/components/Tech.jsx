export default function Tech({ item }) {
  const { name, iconClass } = item;
  return (
    <div className="col-3 text-muted text-center">
      <i className={iconClass}></i>
      <p>{name}</p>
    </div>
  );
}
