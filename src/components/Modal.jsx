import ReactDom from "react-dom";
import "../css/Modal.css";

export default function Modal({ modalItem, modalState }) {
  const { name, description, skills, image, hosting, repository } = modalItem;
  const [showModal, setShowModal] = modalState;
  if (!showModal) return null;

  return ReactDom.createPortal(
    <div className="overlay-style">
      <div className="modal-style row">
        <i
          onClick={() => setShowModal(!showModal)}
          className="fas fa-times fa-2x"
        ></i>
        <div className="col-12 col-md-6">
          <img className="img img-fluid modal-image" src={image}></img>
        </div>

        <div className="col-12 col-md-6 modal-text">
          <h3>{name}</h3>
          <br />
          <p>{description}</p>

          <div className="row">
            {skills.map((skill) => (
              <div className="pill">{skill}</div>
            ))}
          </div>
          <br />

          <a
            href={hosting}
            className=" btn btn-dark mb-2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-globe fa-2x"></i>
            Visit website/app
          </a>

          <a
            href={repository}
            className="btn btn-outline-dark"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github fa-2x"></i>
            Git repository
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
