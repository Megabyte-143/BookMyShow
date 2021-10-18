import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Import Component
import { NextArrow, PrevArrow } from "./arrowcomponent";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {

        const requestNowPlayingMovies = async () => {
            const getMovies = await axios.get("/movie/now_playing");
            console.log(
                getMovies
            );
            setImages(getMovies.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingslg = {
        arrow: true,
        autoplay: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "200px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const settings = {
        arrow: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className="lg:hidden py-3">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-20 h-64">
                                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                    alt="testing" className="w-full h-full px-1 rounded-md " />
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
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full px-2  rounded-md " />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

        </>
    );
};

export default HeroCarousal;
