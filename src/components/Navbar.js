import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Logo from "../assets/images/logo.png";
import Shop from "../assets/icons/Shop";
import Phone from "../assets/icons/Phone";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header__nav__container">
          <div className="header__wrapper">
            <nav className="header__nav">
              <ul className="header__nav__item">
                <li className="header__nav__link">
                  <RiArrowRightSLine fill="#fe8300" />
                  <Link to="/">Home</Link>
                </li>

                <li className="header__nav__link">
                  <RiArrowRightSLine fill="#fe8300" />
                  <Link to="about">About Us</Link>
                </li>

                <li className="header__nav__link">
                  <RiArrowRightSLine fill="#fe8300" />
                  <Link to="blog">Blog</Link>
                </li>

                <li className="header__nav__link">
                  <RiArrowRightSLine fill="#fe8300" />
                  <Link to="contact">Contacts</Link>
                </li>
              </ul>
              <ul className="header__nav__item">
                <li className="header__nav__link">
                  <RiArrowRightSLine fill="#fe8300" />
                  <Link to="/">Log in</Link>
                </li>
                <li className="header__nav__link">
                  <RiArrowRightSLine fill="#fe8300" />
                  <Link to="/">Create an account</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
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
      </header>
    </>
  );
};

export default Navbar;
