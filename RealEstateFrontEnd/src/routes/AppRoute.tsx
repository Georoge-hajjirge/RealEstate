import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "../pages/RegistrationPage";
import MainLayout from "../layouts/Mainlayout";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import ListProperty from "../pages/ListProperty";
import CreateProperty from "../pages/CreateProperty";
import FavoriteProperties from "../pages/FavoriteProperty";
import AuthProvider from "../util/authProvider";
import PrivateRoute from "../util/privateRoute";
import Profile from "../components/organisms/Profile";
import Login from "../pages/Login";
import Footer from "../pages/Footer";
import NavBarListPage from "../pages/NavBarListPage";


const appRouter = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path='/home' element={<><Navbar toggleSidebar={() => { }} /><HomePage /></>} />
                    <Route path="/login" element={<><Navbar toggleSidebar={() => { }} /><Login /></>} />
                    <Route path="/register" element={<><Navbar toggleSidebar={() => { }} /><Register /></>} />
                    <Route element={<PrivateRoute />}>
                        <Route element={<MainLayout />}>
                            <Route path='/profile' element={<Profile />} />
                           
                            <Route path='/createProperty' element={<CreateProperty />} />
                            <Route path='/listProperty' element={<ListProperty />} />
                            <Route path='/navbarListProperty' element={<NavBarListPage />} />

                            <Route path='/favoriteProperty' element={<FavoriteProperties />} />
                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
            <Footer />
        </Router>
    )
}
export default appRouter;