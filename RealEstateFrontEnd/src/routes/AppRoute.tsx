import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "../pages/RegistrationPage";
import MainLayout from "../layouts/Mainlayout";
import HomePage from "../pages/HomePage";
import ListProperty from "../pages/ListProperty";
import CreateProperty from "../pages/CreateProperty";
import FavoriteProperties from "../pages/FavoriteProperty";
import PrivateRoute from "../util/privateRoute";
import Profile from "../components/organisms/Profile";
import Login from "../pages/Login";
import Footer from "../pages/Footer";
import NavBarListPage from "../pages/NavBarListPage";
import { LoaderProvider } from "../util/LoaderContext";

const AppRouter = () => {
    return (
        <Router>
                <LoaderProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route element={<MainLayout />}>
                        <Route path="/home" element={<HomePage />} />
                        
                        <Route element={<PrivateRoute />}>
                            <Route path='/profile' element={<Profile />} />
                            <Route path='/createProperty' element={<CreateProperty />} />
                            <Route path='/listProperty' element={<ListProperty />} />
                            <Route path='/navbarListProperty' element={<NavBarListPage />} />
                            <Route path='/favoriteProperty' element={<FavoriteProperties />} />
                        </Route>
                    </Route>
                </Routes>
                </LoaderProvider>

            <Footer />
        </Router>
    );
}

export default AppRouter;
