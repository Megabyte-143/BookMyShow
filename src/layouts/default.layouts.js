import React from "react";

//Components
import NavBar from "../components/navbar/navbarcomponent";
import HeroCarousal from "../components/HeroCarousel/herocarousel";

const DefaultLayout = (props) => {
  return (
    <>
    <NavBar/>
    <HeroCarousal/>
    {props.children}
    </>
  );
};

export default DefaultLayout;
