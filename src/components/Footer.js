import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__wrapper">
            <div className="footer__col">
              <div className="footer__col__title">
                <h3>Information</h3>
              </div>
              <ul className="footer__list">
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="home">Home</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Catalog</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="about">About us</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="blog">Blog</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Documentation</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="contact">Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <div className="footer__col__title">
                <h3>Why buy from us</h3>
              </div>
              <ul className="footer__list">
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Shipping & Returns</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Secure Shopping</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">International Shipping</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Affiliates</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Group Sales</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <div className="footer__col__title">
                <h3>Follow us</h3>
              </div>
              <ul className="footer__list">
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Facebook</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Twitter</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Google +</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">Pinterest</Link>
                </li>
                <li className="footer__link">
                  <RiArrowRightSLine fill="#fec301" />
                  <Link to="/">RSS</Link>
                </li>
              </ul>
            </div>
            <div className="footer__input">
              <div className="footer__input__title">
                <h3>Newsletter</h3>
                <form method="POST">
                  <label htmlFor="/">Subscribe to our Newsletter!</label>
                  <div className="footer__input__col">
                    <input type="text" placeholder="your@email.com" />
                    <Button btn="Sign Up" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
