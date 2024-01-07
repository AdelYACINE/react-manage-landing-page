import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            className="img-fluid logo-brand"
            src="assets/logo.svg"
            alt="hero-img"
          />
        </div>

        <div className="nav">
          <ul className="links">
            <li className="link">Pricing</li>
            <li className="link">Product</li>
            <li className="link">About Us</li>
            <li className="link">Carrers</li>
            <li className="link">Community</li>
          </ul>
        </div>

        <button className="btn btn-nav">Get Started</button>

        {isOpen ? (
          <svg
            className="hamburger"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="22"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              fill="#242D52"
              fillRule="evenodd"
              d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="18"
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <g fill="#242D52" fillRule="evenodd">
              <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
            </g>
          </svg>
        )}
      </div>
      {isOpen && (
        <div>
          <div className="overlay"></div>
          <div className="menu">
            <ul className="mobile-menu">
              <li className="link link-mobile">Pricing</li>
              <li className="link link-mobile">Product</li>
              <li className="link link-mobile">About Us</li>
              <li className="link link-mobile">Carrers</li>
              <li className="link link-mobile">Community</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
