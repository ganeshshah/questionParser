import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const navLinks = [
    {
        id: "",
        title: "Home",
    },
    {
        id: "PIB24x7",
        title: "PIB24x7",
    },
    {
        id: "RBI24x7",
        title: "RBI24x7",
    },
    {
        id: "SpotlightGA",
        title: "General Awareness",
    },
    {
        id: "Finance",
        title: "Finance"
    },
    // {
    //     id: "esi",
    //     title: "esi"
    // },
    // {
    //     id: "CloudAffairsGA",
    //     title: "Cloudaffairs GA"
    // },
    // {
    //     id: "",
    //     title: "Create Mixed Test"
    // }
];

//! not in use
const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar px-8 sticky top-0 z-40 bg-emerald-400 drop-shadow-lg">
            {/* Logo */}
            <h1 className="text-3xl mb-0 text-white">Logo</h1>

            {/* Desktop Navigation */}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-black"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <Link to={`/${nav.id}`}>{nav.title}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex flex-1 justify-end items-center">

                <FontAwesomeIcon icon='fa-solid fa-bars' className="w-[28px] h-[28px] object-contain text-white" onClick={() => setToggle(!toggle)} />

                {/* Sidebar */}
                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-emerald-400 absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar z-50`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-black"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link to={`/${nav.id}`}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;