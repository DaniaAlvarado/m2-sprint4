import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Current from "../components/newOrder/Current";
import NewOrder from "../components/newOrder/NewOrder";
import Edit from "../components/profile/Edit";
import Profile from "../components/profile/Profile";
import Product from "../components/restAndProduct/Product";
import Restaurant from "../components/restAndProduct/Restaurant";
import Orders from "../components/searchAndOrders/Orders";
import Search from "../components/searchAndOrders/Search";

const DashboardRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/restaurant' element={<Restaurant />} />
            <Route path='/product' element={<Product />} />
            <Route path='/newOrder' element={<NewOrder />} />
            <Route path='/current' element={<Current />} />
        </Routes>
    );
};

export default DashboardRouter;