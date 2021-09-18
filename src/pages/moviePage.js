import React from "react";
import MovieHero from "../components/movie/movie_hero_component";
import { BiCameraMovie } from "react-icons/bi";

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_T9Bwq7mgevBsej",
        amount: 500 * 100,
        description: "Movie Purchase on Rental",
        name: "Book My Show Clone",
        currecy: "INR",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: { color: "#c4242d" }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
}
const MoviePage = () => {
    return (
        <>
            <MovieHero />
            <div className="my-12 container  mx-auto px-4 lg:w-1/2 lg:ml-60 ">
                <div className=" flex flex-col items-start gap-3" >
                    <h2 className="text-2xl font-bold text-gray-800 " >
                        About the Movie
                    </h2>
                    <p>
                        Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.
                    </p>
                </div>
                <div className="my-4" >
                    <hr></hr>
                </div>
                <div className="gap-2 " >
                    <h1 className="text-2xl font-bold text-gray-800 " >
                        Applicable Offers
                    </h1>
                    <div className="flex items-start gap-2 bg-yellow-100 border-2 border-yellow-400 border-dashed rounded-md p-3 w-96" >
                        <div className="h-8 w-8 ">< BiCameraMovie className="w-full h-full" /></div>
                        <div className="flex flex-col items-start" >
                            <h3 className="text-lg font-bold text-gray-900" >
                                Flimy Pass
                            </h3>
                            <p className="text-gray-600 text-sm" >Offer over here</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick= {launchRazorPay} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </div>
        </>
    );
};

export default MoviePage;