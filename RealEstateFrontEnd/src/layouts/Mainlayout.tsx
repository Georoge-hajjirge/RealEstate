import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Sidebar from "../pages/Sidebar";
import { useEffect, useState } from "react";

const MainLayout = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const location = useLocation();

    const shouldShowSidebar = !["/login", "/register"].includes(location.pathname);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        document.body.style.overflow = isSidebarVisible ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSidebarVisible]);

    return (
        <div className="flex flex-col">
            <Navbar toggleSidebar={toggleSidebar} />

            {shouldShowSidebar && isSidebarVisible && <Sidebar closeSidebar={toggleSidebar} />}

            <div className={`mt-20 ${isSidebarVisible ? "ml-44" : "ml-0"}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
