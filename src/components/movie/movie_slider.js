
import React from "react";
import Slider from "react-slick";

import MoviePoster from "./movie_poster";

import settings from "../../config/movie_carousel_config";

const MovieSlider = (props)=>{

    return (
        <>
            <div className=" flex flex-col items-start py-4 mt-auto mx-auto" >
                <h3
                    className={
                        `text-2xl font-bold   
                        `
                    } >
                    {props.title}
                </h3>
                
            </div>
            <Slider {...settings}>
                {props.images.map((image) => (
                    <MoviePoster{...image}  />
                ))}
            </Slider>
        </>
    );
}

export default MovieSlider;