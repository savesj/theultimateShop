import React from "react";

function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center">Reviews</h3>
              <h1 className="display-6 text-center mb-4">
                <b>What our Costumers think matters.</b>
              </h1>
            </div>
          </div>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="fw-bold mb-4">Testimonials</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">Teresa May</h5>
                  <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill-half-alt fa-sm text-info"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="bi bi-quote pe-2"></i>Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Quod eos id officiis hic
                    tenetur quae quaerat ad velit ab hic tenetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">Maggie McLoan</h5>
                  <h6 className="font-weight-bold my-3">
                    Photographer at Studio LA
                  </h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="bi bi-quote pe-2"></i>Autem, totam debitis
                    suscipit saepe sapiente magnam officiis quaerat
                    necessitatibus odio assumenda perferendis labore laboriosam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">Alexa Horwitz</h5>
                  <h6 className="font-weight-bold my-3">
                    Front-end Developer in NY
                  </h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill fa-sm text-info"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="bi bi-quote pe-2"></i>Cras sit amet nibh
                    libero, in gravida nulla metus scelerisque ante sollicitudin
                    commodo cras purus odio, vestibulum in tempus viverra
                    turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default About;
