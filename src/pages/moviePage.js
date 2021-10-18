import React from "react";
import MovieHero from "../components/movie/movie_hero_component";
import { BiCameraMovie } from "react-icons/bi";
import MovieSlider from "../components/movie/movie_slider";

const castImages = [

    {
        src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg",
        alt: "Michelle Yeoh",
        title: "Michelle Yeoh",
        subtitle: "as Jiang Nan"
    },
    {
        src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg",
        alt: "Tony Leung Chiu-wai",
        title: "Tony Leung Chiu-wai",
        subtitle: "as Wenwu / The Mandarin"
    },
    {
        src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
        alt: "Awkwafina",
        title: "Awkwafina",
        subtitle: "as Katy"
    },
    {
        src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg",
        alt: "Simu Liu",
        title: "Simu Liu",
        subtitle: "as Shang-Chi"
    },


];

const crewImages = [

    {
        src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg",
        alt: "Destin Cretton",
        title: "Destin Cretton",
        subtitle: "Director"
    },
    {
        src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
        alt: "Kevin Feige",
        title: "Kevin Feige",
        subtitle: "Producer"
    },
    {
        src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jonathan-schwartz-1264076-01-03-2019-07-51-58.jpg",
        alt: "Jonathan Schwartz",
        title: "Jonathan Schwartz",
        subtitle: "Producer"
    },
    {
        src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/bill-pope-iein005277-24-03-2017-13-02-34.jpg",
        alt: "Bill Pope",
        title: "Bill Pope",
        subtitle: "Cinematographer"
    },
    

];
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
                        <div className="h-8 w-8 ">
                            < BiCameraMovie className="w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start" >
                            <h3 className="text-lg font-bold text-gray-900" >
                                Flimy Pass
                            </h3>
                            <p className="text-gray-600 text-sm" >
                                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container mx-auto ">
                        <MovieSlider images={castImages} title="Cast" />
                    </div>
                    <div className="container mx-auto ">
                        <MovieSlider images={crewImages} title="Crew" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default MoviePage;