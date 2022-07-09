import React from "react";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
// card - image
import halo from "../assets/images/halo.png";
import brakes from "../assets/images/brakes.png";
import suspension from "../assets/images/suspension.png";
import custom from "../assets/images/custom.png";
import exhaust from "../assets/images/exhaust.png";
import air from "../assets/images/air.png";
import spoiler from "../assets/images/spoiler.png";
import body from "../assets/images/body.png";
import grille from "../assets/images/grille.png";
import audio from "../assets/images/audio.png";
// brands - image
import sparco from "../assets/images/sparco.png";
import kenwood from "../assets/images/kenwood.png";
import nifty from "../assets/images/nifty.png";
import goodyear from "../assets/images/goodyear.png";
import momo from "../assets/images/momo.png";
import injen from "../assets/images/injen.png";
import alpin from "../assets/images/alpin.png";
import pioneer from "../assets/images/pioneer.png";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main">
        <Navigation />
        <div className="main__content">
          <Slider />
          <div className="card__wrapper">
            <Card title_1="HALO" title_2="HEADLIGHTS" card_img={halo} />
            <Card title_1="HAND" title_2="BRAKES" card_img={brakes} />
            <Card
              title_1="SUSPENSION"
              title_2="SYSTEMS"
              card_img={suspension}
            />
            <Card title_1="CUSTOM" title_2="WHEELS" card_img={custom} />
            <Card title_1="EXHAUST" title_2="SYSTEMS" card_img={exhaust} />
            <Card title_1="AIR" title_2="INTAKES" card_img={air} />
            <Card title_1="CAR" title_2="SPOILERS" card_img={spoiler} />
            <Card title_1="BODY" title_2="KITS" card_img={body} />
            <Card title_1="GRILLE" title_2="GUARDS" card_img={grille} />
            <Card title_1="AUDIO" title_2="SYSTEMS" card_img={audio} />
          </div>
          <div className="brand">
            <Brands brand_img={sparco} brand_text="Sparco" />
            <Brands brand_img={kenwood} brand_text="Kenwood" />
            <Brands brand_img={nifty} brand_text="Nifty" />
            <Brands brand_img={goodyear} brand_text="Good Year" />
            <Brands brand_img={momo} brand_text="Momo Italy" />
            <Brands brand_img={injen} brand_text="Injen Technology" />
            <Brands brand_img={alpin} brand_text="Alpine" />
            <Brands brand_img={pioneer} brand_text="Pioneer" />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
