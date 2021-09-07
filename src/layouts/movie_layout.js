import React from "react";

//Components
import NavBar from "../components/navbar/navbar.component";


const MovieLayout = (props) => {
    return (
        <>
            <NavBar />
            {props.children}
        </>
    );
};

export default MovieLayout;
