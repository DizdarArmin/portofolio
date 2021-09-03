export default function Container({
  title,
  description,
  mapping,
  bgColor,
  id,
}) {
  return (
    <section
      id={id}
      className="container-fluid"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container">
        <div className="row">
          <h2 className="col-12">{title}</h2>
        </div>

        <div className="row wrapper">
          <div className="col-12 col-md-3 projects-text">
            <p className="projects-description">{description}</p>
          </div>
          <div className="col-12 col-md-9 row">{mapping}</div>
        </div>
      </div>
    </section>
  );
}
