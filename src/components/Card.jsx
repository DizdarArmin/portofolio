import Modal from "./Modal";
export default function Card({ item, setModalData }) {
  const { name, image, isLocked } = item;

  // Click is lowercase and in case it creates conflict, name it onClick()
  function Click() {
    // no comments in production
    if (isLocked) {
      console.log("item is locked");
    } else {
      setModalData(item);
      console.log("item is not locked");
    }
  }
  return (
    <div className=" col-6 col-md-4 myCard" onClick={() => Click()}>
      <div className="image-wrapper d-flex justify-content-center align-items-center ">
        {isLocked && <label className="coming-soon">COMING SOON</label>}
        {/* self closing img tag */}
        <img src={image} className="img img-fluid card-img " alt="project" />
      </div>
      <p className="">{name}</p>
    </div>
  );
}
