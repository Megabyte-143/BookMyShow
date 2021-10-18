import React from "react";
import Slider from "react-slick";

import MoviePoster from "../poster/postercomponent";

import settings from "../../config/poster_carousel_config";

const PosterSlider = (props) => {

    return (
        <>
            <div className=" flex flex-col items-start py-4 mt-auto mx-auto" >
                <h3
                    className={
                        `text-2xl font-bold   ${props.isDark ? "text-white" : "text-black"
                        }`
                    } >
                    {props.title}
                </h3>
                <p className={
                    `text-sm   ${props.isDark ? "text-white" : "text-black"
                    }`
                }>
                    {props.subtitle}
                </p>
            </div>
            <Slider {...settings}>
                {props.images.map((image) => (
                    <MoviePoster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </>
    );

}

export default PosterSlider;