import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Logo from "../assets/images/logo.png";
import Shop from "../assets/icons/Shop";
import Phone from "../assets/icons/Phone";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="header">
        <div className="header__nav__container">
          <div className="header__wrapper">
            <nav ref={navRef} className="header__nav">
              <ul className="header__nav__item">
                <li className="header__nav__link" onClick={showNavbar}>
                  <span>
                    <RiArrowRightSLine fill="#fe8300" />
                  </span>
                  <Link to="/">Home</Link>
                </li>

                <li className="header__nav__link" onClick={showNavbar}>
                  <span>
                    <RiArrowRightSLine fill="#fe8300" />
                  </span>
                  <Link to="about">About Us</Link>
                </li>

                <li className="header__nav__link" onClick={showNavbar}>
                  <span>
                    <RiArrowRightSLine fill="#fe8300" />
                  </span>
                  <Link to="blog">Blog</Link>
                </li>

                <li className="header__nav__link" onClick={showNavbar}>
                  <span>
                    <RiArrowRightSLine fill="#fe8300" />
                  </span>
                  <Link to="contact">Contacts</Link>
                </li>
              </ul>
              <ul className="header__nav__item">
                <li className="header__nav__link" onClick={showNavbar}>
                  <span>
                    <RiArrowRightSLine fill="#fe8300" />
                  </span>
                  <Link to="/">Log in</Link>
                </li>
                <li className="header__nav__link" onClick={showNavbar}>
                  <span>
                    <RiArrowRightSLine fill="#fe8300" />
                  </span>
                  <Link to="/">Create an account</Link>
                </li>
              </ul>
              <button
                className="header__nav__btn header__nav__closebtn"
                onClick={showNavbar}
              >
                <FaTimes />
              </button>
            </nav>

            <button className="header__nav__btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </div>
        </div>
        <div className="header__mobile">
          <div className="header__shop">
            <div className="header__shop__container">
              <div className="header__contact">
                <div className="header__contact__icon">
                  <Phone />
                </div>
                <div className="header__contact__text">
                  <h3>ask our experts</h3>
                  <h2>1(800) 234-5678</h2>
                </div>
              </div>
              <div className="header__card">
                <div className="header__card__icon">
                  <Shop />
                </div>
                <div className="header__card__text">
                  <h3>Cart:</h3>
                  <p>0 items</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header__container">
            <div className="header__container__wrapper">
              <div className="header__container__logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <div className="header__container__input">
                <input type="text" />
                <Button btn="Search" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
