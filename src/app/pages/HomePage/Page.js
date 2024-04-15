import React from 'react'
import App from "../../components/home/App";
import Blogs from "../../components/home/Blogs";
import Categories from "../../components/home/Categories";
import Customers from "../../components/home/Customers";
import HomePage from "../../components/home/HomePage";
import Products from "../../components/home/Products";
import Savers from "../../components/home/Savers";
import Sells from "../../components/home/Sells";
import Shipping from "../../components/home/Shipping";
import Subscribe from "../../components/home/Subscribe";
import Vegetables from "../../components/home/Vegetables";
export default function MainHome() {
    return (
        <>
            <HomePage />
            <Shipping />
            <Categories />
            <Products />
            <Vegetables />
            <Savers />
            <Customers />
            <App />
            <Sells />
            <Blogs />
            <Subscribe />
        </>
    )
}
