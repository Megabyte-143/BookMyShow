import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/entertainmentcard";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-400 ">
                    The Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>
        </>
    );
};

export default HomePage;