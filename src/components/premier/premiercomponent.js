import React from "react";
import Slider from "react-slick";

//component
import Poster from "../poster/postercomponent";
import settings from "../../config/poster_carousel_config";
import PremierImages from "../../config/temp_poster_config";

const PremierSlider = () => {
    return (
        <>
            <div className=" flex flex-col items-start py-4 mt-6" >
                <h3
                    className=" text-xl font-bold text-white ">
                    Premieres
                </h3>
                <p className=" text-sm text-white ">
                    Brand New Releases Every Friday
                </p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster{...image} isDark />
                ))}
            </Slider>
        </>
    );
}

export default PremierSlider;