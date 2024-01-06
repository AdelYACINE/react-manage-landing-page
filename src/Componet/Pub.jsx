const Pub = () => {
  return (
    <div className="pub">
      <img
        className="img-fluid pub-bg simplify-desktop"
        src="/src/assets/bg-simplify-section-desktop.svg"
        alt="hero-img"
      />

      <img
        className="img-fluid pub-bg simplify-mobile"
        src="/src/assets/bg-simplify-section-mobile.svg"
        alt="hero-img"
      />

      <div className="pub-container">
        <h2 className="title-pub responsive-text">
          Simplify how your team
          <br /> works today.
        </h2>
        <button className="btn btn-second">Get Started</button>
      </div>
    </div>
  );
};

export default Pub;
