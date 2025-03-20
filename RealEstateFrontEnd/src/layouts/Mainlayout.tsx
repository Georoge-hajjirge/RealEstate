import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useEffect, useState } from "react";

const MainLayout = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    useEffect(()=>{
        if(isSidebarVisible){
            document.body.style.overflow='hidden';
        }else{
            document.body.style.overflow='auto';
        }
        return()=>{
            document.body.style.overflow='auto'
        }
    },[isSidebarVisible]);
    return (
        <div className=" flex flex-col ">
            <Navbar toggleSidebar={toggleSidebar} />
            <div>
            {isSidebarVisible && (
        <Sidebar closeSidebar={toggleSidebar} />
      )}           </div>
            <div className={`mt-20 ${isSidebarVisible ? 'ml-44' : 'ml-0'}`}>
                <Outlet />
            </div>
            
        </div>

    )
}

export default MainLayout;