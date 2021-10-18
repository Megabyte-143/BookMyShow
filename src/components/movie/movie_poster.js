import React from "react";

const MoviePoster = (props) => {
    return (
        <>
            <div className=" flex flex-col items-start gap-2 " >
                <div className="h-28 w-28 rounded-2xl  " >
                    <img
                        src={props.src} alt={props.title} className="w-full h-full rounded-full"
                    />
                </div>
                <h3
                    class={
                        `text-lg font-bold`
                    }
                >
                    {props.title}
                </h3>

            </div>
        </>
    );
}

export default MoviePoster;