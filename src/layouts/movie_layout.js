import React from "react";

//Components
import MovieNavBar from "../components/navbar/movienavbar";


const MovieLayout = (props) => {
    return (
        <>
            <MovieNavBar />
            {props.children}
        </>
    );
};

export default MovieLayout;
