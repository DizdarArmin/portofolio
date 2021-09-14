export default function Card({ item, setModalData }) {
  const { name, image, isLocked } = item;

  function onClick() {
    if (!isLocked) {
      setModalData(item);
    }
  }
  return (
    <div className=" col-6 col-md-4 myCard" onClick={() => onClick()}>
      <div className="image-wrapper d-flex justify-content-center align-items-center ">
        {isLocked && <label className="coming-soon">COMING SOON</label>}
        <img src={image} className="img img-fluid card-img " alt="project" />
      </div>
      <p className="">{name}</p>
    </div>
  );
}
