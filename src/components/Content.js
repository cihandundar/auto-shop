import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import ContentCard from "./ContentCard";

const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content__container">
          <ul className="content__item">
            <li className="content__item__link">
              <Link to="/">Brake Discs</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Bumpers & Components</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Calipers</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Carpet Kits</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Components</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Exhaust Tips</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Floor Mats & Liners</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Grilles & Components</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Hand Brakes</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Mirrors & Components</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Seats, Seat Covers</Link>
              <RiArrowRightSLine />
            </li>
            <li className="content__item__link">
              <Link to="/">Shocks, Struts</Link>
              <RiArrowRightSLine />
            </li>
          </ul>
          <div className="content__bestseller">
            <ContentCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
