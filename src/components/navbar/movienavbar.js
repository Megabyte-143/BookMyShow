import React from "react";
import { BiChevronRight, BiChevronLeft, BiShareAlt, BiMenu, BiChevronDown, BiSearch } from "react-icons/bi";



const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div >
                    <h3 className="text-2xl font-bold">It All Starts Here!</h3>

                </div>
                <div className="w-5 h-5">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    )
};
const NavMd = () => {
    return (
        <div className=" w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
            <div className="w-4 h-4">
                <BiSearch className="w-full h-full" />
            </div>
            <input type="search" className=" w-full focus:outline-none" placeholder="Search for Movie,Events, Plays and Activities" />
        </div>
    );
};
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 ">
                    <div className="w-44 h-12 ">
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="LoGo" className="w-full h-full" />
                    </div>
                    <div className=" w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md ">
                        <div className="w-4 h-4">
                            <BiSearch className="w-full h-full" />
                        </div>
                        <input type="search" className=" w-full focus:outline-none" placeholder="Search for Movie,Events, Plays and Activities" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-gray-900 text-xs flex items-center hover:text-white cursor-pointer">
                        Agra <BiChevronDown />
                    </span>
                    <button className="bg-red-500 p-1 rounded-md text-center text-white text-xs">
                        Sign In
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-80 backdrop-filter backdrop-blur-lg lg:relative p-2 px-4 bg-navbar-700 ">
                <div className="md:hidden">{
                    /*Mobile Screen*/
                    <NavSm />
                }</div>
                <div className="hidden lg:hidden md:block">{
                    /*Tablet Screen*/
                    <NavSm />
                }</div>
                <div className="hidden lg:flex">{
                    /* Laptop screen */
                    <NavLg />
                }</div>
            </nav>
        </>
    )

};

export default MovieNavbar;
