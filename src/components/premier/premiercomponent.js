import React from "react";
import Slider from "react-slick";

//component
import Poster from "../poster/postercomponent";

const PremierSlider = () => {
    const settings = {
        infinite: true,
        autoPlay: false,
        slideToShow: 5,
        slideToScroll: 2,
        InitialSlide: 0
    };
    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt: "image",
            title: "The Balkan Line",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg",
            alt: "Conjuring",
            title: "The Conjuring:The Devil",
            subtitle: "Horror/Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg",
            alt: "Conjuring",
            title: "The Conjuring:The Devil",
            subtitle: "Horror/Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg",
            alt: "Conjuring",
            title: "The Conjuring:The Devil",
            subtitle: "Horror/Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg",
            alt: "Conjuring",
            title: "The Conjuring:The Devil",
            subtitle: "Horror/Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg",
            alt: "Conjuring",
            title: "The Conjuring:The Devil",
            subtitle: "Horror/Thriller"
        }
    ];
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