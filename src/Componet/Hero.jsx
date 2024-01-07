const Hero = () => {
  return (
    <div className="hero">
      <div className="container-text">
        <h1 className="title hero-title">
          Bring everyone together to build better products.
        </h1>
        <p className="text text-hero">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the large team goals in view.
        </p>
        <button className="btn">Get Started</button>
      </div>

      <div className="container-img">
        <img
          className="img-fluid "
          src="assets/illustration-intro.svg"
          alt="hero-img"
        />
      </div>
    </div>
  );
};

export default Hero;
