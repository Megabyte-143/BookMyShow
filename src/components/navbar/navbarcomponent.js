import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div >
                    <h3 className="text-2xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-900 text-xs flex items-center">
                        Agra <BiChevronRight />
                    </span>
                </div>
                <div className="w-5 h-5">
                    <BsSearch className="w-full h-full" />
                </div>
            </div>
        </>
    )
};
const NavMd = () => {
    return (
        <div className=" w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
            <div className="w-4 h-4">
                <BsSearch className="w-full h-full" />
            </div>
            <input type="search" className=" w-full focus:outline-none" placeholder="Search for Movie,Events, Plays and Activities" />
        </div>
    );
};
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-4 ">
                    <div className="w-40 h-12 ">
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="LoGo" className="w-full h-full" />
                    </div>
                    <div className=" w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md h-9">
                        <div className="w-4 h-4">
                            <BsSearch className="w-full h-full" />
                        </div>
                        <input type="search" className=" w-full focus:outline-none" placeholder="Search for Movie,Events, Plays and Activities" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-gray-900 text-xs flex items-center hover:text-white cursor-pointer">
                        Agra <FiChevronDown />
                    </span>
                    <button className="bg-red-500 p-1 rounded-md text-center text-white text-xs">
                        Sign In
                    </button>
                    <GiHamburgerMenu />
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="bg-navbar-600 p-2 px-4">
                <div className="md:hidden">{
                    /*Mobile Screen*/
                    <NavSm />
                }</div>
                <div className="hidden lg:hidden md:flex">{
                    /*Tablet Screen*/
                    <NavMd />
                }</div>
                <div className="hidden lg:flex">{
                    /* Laptop screen */
                    <NavLg />
                }</div>
            </nav>
        </>
    )

};

export default Navbar;
