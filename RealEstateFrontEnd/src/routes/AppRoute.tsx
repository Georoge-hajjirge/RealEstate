import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/LoginPage";
import Register from "../pages/RegistrationPage";
import MainLayout from "../layouts/Mainlayout";
import ProfilePage from "../components/ProfilePage";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import ListProperty from "../pages/ListProperty";
import CreateProperty from "../pages/CreateProperty";
import FavoriteProperties from "../pages/FavoriteProperty";
import Footer from "../components/footer";
import AuthProvider from "../util/authProvider";
import PrivateRoute from "../util/privateRoute";


const appRouter = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<><Navbar toggleSidebar={() => { }} /><Login /></>} />
                    <Route path="/register" element={<><Navbar toggleSidebar={() => { }} /><Register /></>} />
                    <Route element={<PrivateRoute />}>
                        <Route element={<MainLayout />}>
                            <Route path='/profile' element={<ProfilePage />} />
                            <Route path='/home' element={<HomePage />} />
                            <Route path='/createProperty' element={<CreateProperty />} />
                            <Route path='/listProperty' element={<ListProperty />} />
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