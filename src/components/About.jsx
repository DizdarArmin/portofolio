import "../css/About.css";
import Image from "../images/profile.jpg";
export default function About() {
  return (
    <section className="about container-fluid" id="about">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12 col-sm-3 col-md-6 align-center">
            <img className="img img-fluid profile" src={Image}></img>
          </div>
          <div className="col col-12 col-xs-12 col-sm-9 col-md-6 about-text py-4">
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              consectetur purus ut faucibus. Consequat id porta nibh venenatis
              cras sed felis eget velit. Diam vulputate ut pharetra sit amet
              aliquam. Accumsan sit amet nulla facilisi morbi tempus iaculis
              urna. Vitae tempus quam pellentesque nec nam. Dui vivamus arcu
              felis bibendum ut tristique. <br />
              <br />
              Leo vel fringilla est ullamcorper eget nulla facilisi. Vestibulum
              morbi blandit cursus risus. Tristique magna sit amet purus gravida
              quis blandit turpis. Dignissim convallis aenean et tortor at risus
              viverra adipiscing. Nunc sed blandit libero volutpat. Tellus cras
              adipiscing enim eu turpis. Tempor id eu nisl nunc mi ipsum
              faucibus vitae aliquet. Massa enim nec dui nunc mattis. Ac feugiat
              sed lectus vestibulum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
