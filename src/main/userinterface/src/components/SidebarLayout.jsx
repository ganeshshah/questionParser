import { Outlet } from 'react-router-dom';
import './SidebarLayout.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function SidebarLayout() {

    const location = useLocation();
    const currentRoute = location.pathname;

    const [activeMenu, setActiveMenu] = useState(currentRoute)

    const navLinks = [
        {
            id: "/",
            title: "Home",
        },
        {
            id: "/pib24x7",
            title: "PIB 24x7",
        },
        {
            id: "/rbi24x7",
            title: "RBI",
        },
        {
            id: "/spotlight_ga",
            title: "SpotLight GA",
        },

        {
            id: "/finance",
            title: "Finance",
        },
        {
            id: "/management",
            title: "Management",
        },
        {
            id: "/esi",
            title: "ESI",
        },
        {
            id: "/cloudaffairs_ga",
            title: "Cloud Affairs GA",
        },
        {
            id: "/create_mixed_test",
            title: "Create Mixed Test",
        },

        {
            id: "/add_question",
            title: "Add Question Manually",
        },
        {
            id: "/load_question_from_excel",
            title: "Load Question from excel",
        },
        {
            id: "load_questions_from_text",
            title: "Load Question from text file",
        },
        {
            id: '/revise',
            title: 'Revise Search Bar'
        },
        {
            id: "/show_analytics",
            title: "Analytics dashboard",
        },
    ];


    return (
        <div className="relative min-h-screen md:flex justify-end" data-dev-hint="container">
            <input type="checkbox" id="menu-open" className="hidden" />

            <header className="bg-gray-600 text-gray-100 flex justify-between md:hidden fixed top-0 right-0 left-0 z-40" data-dev-hint="mobile menu bar">
                <a href="/" className="block p-4 text-white font-bold whitespace-nowrap truncate">
                    MCQ App
                </a>

                <label htmlFor="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                    <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </label>
            </header>

            <aside id="sidebar" className="flex-shrink-0 min-w-[16rem] z-50 bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 fixed inset-y-0 left-0 transform  md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
                    <a href="/" className="text-white flex items-center space-x-2 px-4" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span className="text-2xl font-extrabold whitespace-nowrap truncate">MCQ App</span>
                    </a>

                    <nav data-dev-hint="main navigation">
                        {navLinks.map((item) => {
                            return <Link to={`${item.id}`} key={item.id} onClick={() => setActiveMenu(item.id)} className={`flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white ${activeMenu === item.id ? 'bg-gray-500' : ''}`}>
                                <span className="ml-6">{item.title}</span>
                            </Link>
                        })}
                    </nav>
                </div>
            </aside>

            <main id="content" className="main_content_width p-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="px-4 py-6 sm:px-0 mt-4 md:mt-0">
                        < Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SidebarLayout;