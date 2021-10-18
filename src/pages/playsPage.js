// import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlaysPoster from "../components/poster/plays_poster";
import PlaysFliter from "../components/plays_filters/plays_filter";
const PlaysPage = () => {
    // const [popularPlays, setpopularMovies] = useState([]);

    // useEffect(() => {
    //     const requestPopularPlays = async () => {
    //         const getPopularPlays = await axios.get('/movie/popular');
    //         setpopularMovies(getPopularPlays.data.results);

    //     };
    //     console.log(requestPopularPlays);
    //     requestPopularPlays();
    // }, []);
    return (
        <>
            <div className="container mx-2 px-2 w-full bg-gray-100 center" >
                <div className=" w-full lg:flex lg:flex-row-reverse " >

                    <div className="w-8/12" >
                        <h2 className="text-2xl font-bold mb-4" >Plays in Agra</h2>
                        <div className="flex flex-wrap" >
                            {/* <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <Poster
                                    src={popularPlays}
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div> */}
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <PlaysPoster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00314534-zjzubzamfs-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <PlaysPoster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00314534-zjzubzamfs-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <PlaysPoster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00314534-zjzubzamfs-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <PlaysPoster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00314534-zjzubzamfs-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <PlaysPoster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00314534-zjzubzamfs-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div>
                            {/* <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <Poster
                                    src={popularPlays}
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div> */}
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <PlaysPoster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00314534-zjzubzamfs-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <PlaysPoster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00314534-zjzubzamfs-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4" >
                                <PlaysPoster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00314534-zjzubzamfs-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil Rs 300"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 mr-7 "   >
                        <h2 className="text-2xl font-bold mb-4" >Filters</h2>
                        <PlaysFliter title="Date" tags={["Today", "Tomorrow", "Weekend"]} />
                        <PlaysFliter title="Language" tags={["Hindi", "English", "Tamil"]} />
                        <PlaysFliter title="Categories" tags={["Theatre"]} />
                        <PlaysFliter title="More Filters" tags={["Online Streming"]} />
                        <PlaysFliter title="Price" tags={["0", "100-500", "501-1000"]} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default PlaysPage;