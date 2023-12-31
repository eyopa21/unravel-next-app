import Link from "next/link"

const Sidebar = () => {

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
return ( <div>
    <div
        className="w-0 lg:w-24 transition-all duration-[.5s] flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full  lg:flex shadow-t-xl">
        <div id="inner-sidenav-transition"
            className="lg:w-64  shadow-violet-500 shadow-lg lg:shadow-none mt-[.4px] lg: mt - 0 flex transition-all duration-[.5s] relative flex-col flex-1 pt-0 min-h-0 bg-gray-100 lg:bg-gray-50 dark:bg-gray-900 border-b-32">

            <div className="flex overflow-y-auto flex-col flex-1 pt-8 pb-4">
                <div className="flex-1 px-3 bg-gray-50 dark:bg-gray-900" id="sidebar-items">
                    <ul className="pb-2 pt-1">
                        {items.map((item, index) => (
                        <li key={index}>

                            <Link href="/about"
                                className="flex items-center py-2.5 px-3 text-base font-normal text-dark-500 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 group  transition-all duration-200">

                                <span className="ml-3 text-black dark:text-white  text-sm font-light">

                                    {item}

                                </span>
                            </Link>
                        </li>
                        ))}

                    </ul>

                </div>
            </div>

        </div>
    </div>

   {/* <div className=" fixed inset-0 z-10 bg-gray-900 opacity-50" id="sidebarBackdrop"></div>*/}
</div> );
}

export default Sidebar;