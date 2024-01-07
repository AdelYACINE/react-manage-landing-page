import { Carousel } from "@material-tailwind/react";

const Testemonios = () => {
  return (
    <div className="Testemonios">
      <h2 className="title"> What they've said</h2>

      <Carousel className="caroussel rounded-x flex ">
        <div className="card">
          <img
            className="img-fluid avatar"
            src="assets/avatar-anisha.png"
            alt="hero-img"
          />
          <h3 className=" name"> Anisha Li</h3>
          <p className="text text-testemonios">
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            veniam impedit tenetur ea temporibus voluptatum voluptate quidem sed
            ullam quo.""
          </p>
        </div>

        <div className="card">
          <img
            className="img-fluid avatar"
            src="assets/avatar-ali.png"
            alt="hero-img"
          />
          <h3 className=" name"> Ali Bravo</h3>
          <p className="text text-testemonios">
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            veniam impedit tenetur ea temporibus voluptatum voluptate quidem sed
            ullam quo.""
          </p>
        </div>

        <div className="card">
          <img
            className="img-fluid avatar"
            src="assets/avatar-richard.png"
            alt="hero-img"
          />
          <h3 className=" name"> Richard Watts</h3>
          <p className="text text-testemonios">
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            veniam impedit tenetur ea temporibus voluptatum voluptate quidem sed
            ullam quo.""
          </p>
        </div>
        <div className="card">
          <img
            className="img-fluid avatar"
            src="assets/avatar-shanai.png"
            alt="hero-img"
          />
          <h3 className=" name"> Shanai Gough</h3>
          <p className="text text-testemonios">
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            veniam impedit tenetur ea temporibus voluptatum voluptate quidem sed
            ullam quo.""
          </p>
        </div>
      </Carousel>

      <div className="testemonios-container">
        <div className="card">
          <img
            className="img-fluid avatar"
            src="assets/avatar-anisha.png"
            alt="hero-img"
          />
          <h3 className=" name"> Anisha Li</h3>
          <p className="text text-testemonios">
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            veniam impedit tenetur ea temporibus voluptatum voluptate quidem sed
            ullam quo.""
          </p>
        </div>

        <div className="card">
          <img
            className="img-fluid avatar"
            src="assets/avatar-ali.png"
            alt="hero-img"
          />
          <h3 className=" name"> Ali Bravo</h3>
          <p className="text text-testemonios">
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            veniam impedit tenetur ea temporibus voluptatum voluptate quidem sed
            ullam quo.""
          </p>
        </div>

        <div className="card">
          <img
            className="img-fluid avatar"
            src="assets/avatar-richard.png"
            alt="hero-img"
          />
          <h3 className=" name"> Richard Watts</h3>
          <p className="text text-testemonios">
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            veniam impedit tenetur ea temporibus voluptatum voluptate quidem sed
            ullam quo.""
          </p>
        </div>
      </div>

      <button className="btn">Get started</button>
    </div>
  );
};

export default Testemonios;
