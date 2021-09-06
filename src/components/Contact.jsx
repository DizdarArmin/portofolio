export default function Contact() {
  // This component if fine, but you could use pure CSS to achieve the same effect withouth making nested divs.
  return (
    <section
      id="contact"
      className="container-fluid"
      style={{ backgroundColor: "#eeeeee" }}
    >
      <div className="container">
        <div className="row">
          <h2 className="col-12">Contact</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            Here is my contact information if you are interested in starting a
            collaboration.
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <i className="fas fa-envelope m-1"></i>

              <a className="text-dark" href="mailto:armin.dizdar@gmail.com">
                armin.dizdar@gmail.com
              </a>
            </div>
            <div className="row text-dark">
              <i className="fas fa-phone-square m-1"></i>
              <a className="text-dark" href="tel:+46720097143">
                Call 072 009 7143
              </a>
            </div>
            <div className="row text-dark">
              <i className="fas fa-map-marker-alt m-1"></i>
              <a
                className="text-dark"
                href="http://maps.google.com/?q=Stockholm, Sweden"
              >
                Stockholm, Sweden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
