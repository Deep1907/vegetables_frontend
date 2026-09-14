import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsCartPlusFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Navbar = () => {


    const [usernme, setUsernme] = useState(localStorage.getItem("username"))

    const cartData = useSelector((store) => store.carts.items)

    const navigate = useNavigate()

    const goToCart = () => {
        navigate("/cart")
    }

    const submitLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("usernme")
        setUsernme(null)
        navigate("/login")
    }

    return (

        <div className='navbar'>
            <div className='navbar_container'>
                <div className='navbar_box'>
                    <div>
                        <h2 className='logo'>LOGO.</h2>
                    </div>
                    <div className='navbar_list'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {usernme ? (
                                <li><button onClick={submitLogout}>Logout</button></li>
                            ) : (
                                <>
                                    <li><Link to="/signup">Signup</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </>
                            )}
                        </ul>

                    </div>
                    <div className='shop_cart' onClick={goToCart}>
                        <BsCartPlusFill className='icon_cart' />
                        <span>{cartData.length}</span>

                        <div>{usernme}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
