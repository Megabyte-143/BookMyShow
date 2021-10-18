import React from "react";
import { FaHeart } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi"

const launchRazorPay = () => {
    let options = {

        key: process.env.REACT_APP_API_KEY,
        amount: 500 * 100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase On Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done");
        },
        theme: { color: "#c4242d" }
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
}

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden">
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />
            </div>

            <div className="hidden md:block lg:hidden">
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />
            </div>

            <div className="relative hidden lg:block" style={{ height: "36rem" }}>

                <div className="absolute h-full w-full z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
                />

                <div className="absolute z-30 w-64 h-96 left-16 top-10">
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                        alt="poster"
                        className="h-full w-full rounded-xl"
                    />
                </div>

                <div className="absolute z-30 w-96 h-96 left-80 top-10 px-4 flex flex-col">
                    <h1 className="text-white font-bold text-4xl" >Shang-Chi and the Legend of the Ten Rings</h1>
                    <div className="py-4 " >


                        <div className="w-96 p-4 h-20 bg-gray-600 rounded-xl my-4 items-center justify-center" >
                            <div >
                                <div className="flex gap-5 cursor-pointer">
                                    <FaHeart className="text-red-500 text-4xl" />
                                    <p className=" font-bold text-2xl">91%</p>
                                    <p className="mt-1 text-lg flex">32.3K ratings<BiChevronRight className="mt-2 text-2xl " /></p>
                                </div>
                                <div className=" bg-white w-24 flex-row " >
                                    <button>
                                        Rate Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-56  bg-white" >
                            2D,MX4D,3D,IMAX 2D,4DX
                        </div>
                        <div className="my-2 w-96  bg-white" >
                            English,Hindi,Tamil,Kannada,Telugu,Malayalam
                        </div>
                        <div className="my-2 w-full  text-white" >
                            2h 12m • Action,Adventure,Fantasy • UA • 3 Sep,2021
                        </div>
                    </div>
                    <div>
                        <div>
                            <button onClick={launchRazorPay} class="bg-red-500 hover:bg-red text-white font-bold py-2 px-4 rounded-lg w-64 h-12">
                                Book Tickets
                            </button>
                        </div>
                    </div>
                </div>

                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                    className="w-full h-full"
                />
            </div>
        </>
    );
}

export default MovieHero;