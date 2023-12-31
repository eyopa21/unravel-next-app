import ThemeSwitcher from "./DarkMode/ThemeSwitcher";


const Nav = () => {
return ( <div>
    <nav className="fixed z-30 w-full  dark:bg-gray-900 bg-gray-50">
        <div className="py-3 px-3 lg:px-5 lg:pl-3">
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center">
                    <button id="toggleSidebar"
                        className="hidden p-2 mr-4 text-gray-600 dark:text-gray-100 rounded cursor-pointer lg:inline hover:text-gray-900 dark:hover:text-gray-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <button id="toggleSidebarMobile"
                        className="p-2 mr-2 text-gray-600 dark:text-gray-100 rounded cursor-pointer lg:hidden hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100">
                        <svg  className="w-6 h-6" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                       
                    </button>
                    <div className="text-md font-semibold flex items-center lg:mr-1.5">

                        <div className="ml-3 relative  block">
                            <div>
                                <button
                                   
                                    type="button"
                                    className=" flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300">

                                    LOGO
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div >
                
                    <ThemeSwitcher/>
                </div>
                </div>
                   </div>
    </nav>
</div>
);
}

export default Nav;