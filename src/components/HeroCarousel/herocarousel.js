import React from "react";
import HeroSlider from "react-slick";

//Import Component
import { NextArrow, PrevArrow } from "./arrowcomponent";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousal = () => {
    const settingslg = {
        arrow: true,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "200px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const settings = {
        arrow: true,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const images = [
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1428&q=80",
        "https://images.unsplash.com/photo-1630018548696-e1f671020900?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1629907912711-9845e6e762a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
        "https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]

    return (
        <>
            <div className="lg:hidden py-3">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-20 h-64">
                                <img src={image} alt="testing" className="w-full h-full px-1 rounded-md " />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block  py-3">
                <HeroSlider {...settingslg}>
                    {
                        images.map((image) => (
                            <div className="w-20 h-96">
                                <img src={image} alt="testing" className="w-full h-full px-2  rounded-md " />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

        </>
    );
};

export default HeroCarousal;
