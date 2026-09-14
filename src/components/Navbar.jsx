import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsCartPlusFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Navbar = () => {


    localStorage.getItem("username")

    const cartData = useSelector((store) => store.carts.items)

    const navigate = useNavigate()

    const isLoggedIn = localStorage.getItem("isLoggedIn")


    const goToCart = () => {
        navigate("/cart")
    }

    const handleLogout = () =>{
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username"); 
        navigate("/login");
    }

   

    return (

        <div className='navbar'>
            <div className='navbar_container'>
                <div className='navbar_box'>
                    <div>
                        <h2 className='logo'>LOGO.</h2>
                    </div>
                    <div className='navbar_list'>
                       
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contact">Contact</Link>
                            
                            
                            {
                                !isLoggedIn ? (
                                    <>
                                    <Link to="/signup">Signup</Link>
                                    <Link to="/login">Login</Link>
                                    </>
                                ) : (
                                    <button onClick={handleLogout}>Logout</button>
                                )
                            }
                            
                        

                    </div>
                    <div className='shop_cart' onClick={goToCart}>
                        <BsCartPlusFill className='icon_cart' />
                        <span>{cartData.length}</span>

                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
