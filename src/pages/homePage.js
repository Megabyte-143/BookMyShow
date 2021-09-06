import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/entertainmentcard";
import PremierSlider from "../components/premier/premiercomponent";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-400 ">
                        The Best of Entertainment
                    </h1>
                    <EntertainmentCardSlider />
                </div>
                <div className="bg-navbar-200 py-10  px-7">
                    <div className="container mx-auto px-4">
                        <div className="flex">
                            <img
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Rupay"
                                className="w-full h-full"
                            />
                        </div>
                        <PremierSlider />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;