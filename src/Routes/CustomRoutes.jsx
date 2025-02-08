
import {
    Routes,
    Route
} from "react-router-dom";

import ErrorBoundaries from "../helper/ErrorBoundaries";
import Home from "../Components/Pages/Home/Home";
import Orders from "../Components/Pages/Orders/Orders";
import Dashboard from "../Components/Pages/Dashbaord/Dashboard";

import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/Header";

const CustomRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Sidebar />}>
                    <Route path="home" index element={<Home />} />
                    <Route path="dashboard" index element={<Dashboard />} />
                    <Route path="orders" element={<Orders />} />
                </Route>
                <Route path="*" element={<>404! Page Not Found</>} />
            </Routes>
        </>
    )
}

export default ErrorBoundaries(CustomRoutes);