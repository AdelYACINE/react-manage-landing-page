import Hero from "./Hero";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header">
      <img
        className="img-fluid bg-header"
        src="assets/bg-tablet-pattern.svg"
        alt="hero-img"
      />

      <NavBar />

      <Hero />

      <img
        className="img-fluid bg-header-second "
        src="assets/bg-tablet-pattern.svg"
        alt="hero-img"
      />

      <img
        className="img-fluid bg-header-third "
        src="assets/bg-tablet-pattern.svg"
        alt="hero-img"
      />
    </div>
  );
};

export default Header;
