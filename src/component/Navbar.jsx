import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Added a 'path' property for routing
const NAV_ITEMS = [
    { name: "Home", path: "/" },
    {
        name: "Bucket",
        path: "/bucket",
        dropdown: [
            { name: "Bucket", path: "/bucket" },
            { name: "Comedy", path: "/comedy" },
            { name: "Catherine", path: "/catherine" },
        ],
    },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState("");
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState("");
    const [joinDropdown, setJoinDropdown] = useState(false);
    const [joinDropdownMobile, setJoinDropdownMobile] = useState(false);

    // Handle hover with delay for smoothness
    const handleMouseEnter = (name) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setOpenDropdown(name);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setOpenDropdown("");
        }, 200); // <-- delay before closing
        setHoverTimeout(timeout);
    };

    // ------ Desktop Nav Items ------
    const renderNavItems = () =>
        NAV_ITEMS.map((item) => (
            <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
            >
                {item.dropdown ? (
                    <>
                        <button className="flex items-center transition-colors cursor-pointer text-[#1E252B] group-hover:text-[#D62976]">
                            {item.name}
                            <svg
                                className="ml-1 w-5 h-5 text-[#1E252B] group-hover:text-[#D62976]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`absolute left-0 mt-2 w-44 bg-white rounded-xl shadow-lg z-20 transition-all duration-300 ease-in-out transform ${
                                openDropdown === item.name
                                    ? "opacity-100 translate-y-0 visible"
                                    : "opacity-0 -translate-y-2 invisible"
                            }`}
                        >
                            {item.dropdown.map((opt) => (
                                <NavLink
                                    key={opt.name}
                                    to={opt.path}
                                    onClick={() => setOpenDropdown("")}
                                    className={({ isActive }) =>
                                        `block w-full text-left px-6 py-3 cursor-pointer ${
                                            isActive
                                                ? "text-[#D62976] bg-pink-50"
                                                : "text-[#1E252B] hover:text-[#D62976] hover:bg-pink-50"
                                        }`
                                    }
                                >
                                    {opt.name}
                                </NavLink>
                            ))}
                        </div>
                    </>
                ) : (
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `transition-colors cursor-pointer ${
                                isActive
                                    ? "text-[#D62976]"
                                    : "text-[#1E252B] group-hover:text-[#D62976]"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                )}
            </li>
        ));

    // ------ Mobile Nav Items ------
    const renderMobileNavItems = () =>
        NAV_ITEMS.map((item) => (
            <li key={item.name} className="group relative">
                {item.dropdown ? (
                    <>
                        <button
                            className="font-bold text-lg flex items-center w-full justify-between text-gray-800 group-hover:text-[#D62976]"
                            onClick={() =>
                                setMobileDropdown(
                                    mobileDropdown === item.name ? "" : item.name
                                )
                            }
                        >
                            {item.name}
                            <svg
                                className="ml-1 w-5 h-5 text-gray-800 group-hover:text-[#D62976]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {mobileDropdown === item.name && (
                            <div className="bg-white rounded-xl shadow-lg mt-1">
                                {item.dropdown.map((opt) => (
                                    <NavLink
                                        key={opt.name}
                                        to={opt.path}
                                        onClick={() => {
                                            setMobileDropdown("");
                                            setMenuOpen(false);
                                        }}
                                        className={({ isActive }) =>
                                            `block w-full text-left px-6 py-3 font-semibold ${
                                                isActive
                                                    ? "text-[#D62976] bg-pink-50"
                                                    : "text-gray-800 hover:text-[#D62976] hover:bg-pink-50"
                                            }`
                                        }
                                    >
                                        {opt.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <NavLink
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            `font-bold text-lg transition-colors w-full text-left ${
                                isActive
                                    ? "text-[#D62976]"
                                    : "text-gray-800 group-hover:text-[#D62976]"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                )}
            </li>
        ));

    return (
        <nav className="w-full border-b-2 border-pink-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <NavLink to="/" className="font-['Inter'] font-black text-[25px] leading-[40px] tracking-[0] text-[#1E252B] cursor-pointer">
                            Logo
                        </NavLink>
                    </div>

                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <ul className="flex space-x-8 font-['Inter'] font-semibold text-[16px] leading-[24px] tracking-[0] cursor-pointer">
                            {renderNavItems()}
                        </ul>
                    </div>

                    <div className="hidden md:block relative z-0">
                        <button
                            className="font-['Inter'] bg-[#D62976] text-white font-bold text-xl px-8 py-4 rounded-2xl cursor-pointer flex items-center"
                            onClick={() => setJoinDropdown((v) => !v)}
                            onBlur={() => setTimeout(() => setJoinDropdown(false), 180)}
                        >
                            Join us
                            <svg className="ml-2 w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {joinDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg">
                                <NavLink to="/join/influencer" className="block px-6 py-3 text-[#1E252B] font-['Inter'] text-[16px] font-semibold hover:bg-pink-50 rounded-t-xl ">
                                    As Influencer
                                </NavLink>
                                <NavLink to="/join/brand" className="block px-6 py-3 text-[#1E252B] font-['Inter'] text-[16px] font-semibold hover:bg-pink-50 rounded-b-xl">
                                    As Brand
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white px-4 py-2 border-t border-pink-600">
                    <ul className="space-y-3">{renderMobileNavItems()}</ul>
                    <div className="relative mt-4">
                        <button
                            className="w-full bg-pink-600 text-white font-bold text-lg px-6 py-3 rounded-2xl flex items-center justify-center"
                            onClick={() => setJoinDropdownMobile((v) => !v)}
                            onBlur={() => setTimeout(() => setJoinDropdownMobile(false), 180)}
                        >
                            Join us
                            <svg className="ml-2 w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {joinDropdownMobile && (
                            <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-10">
                                <NavLink to="/join/influencer" onClick={() => setMenuOpen(false)} className="block px-6 py-3 text-pink-600 font-semibold hover:bg-pink-50 rounded-t-xl">
                                    As Influencer
                                </NavLink>
                                <NavLink to="/join/brand" onClick={() => setMenuOpen(false)} className="block px-6 py-3 text-pink-600 font-semibold hover:bg-pink-50 rounded-b-xl">
                                    As Brand
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
