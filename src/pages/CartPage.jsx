import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incQty, decQty } from "../store/cart_slice.jsx"
import axios from "axios"
import { backendURL } from "../App.jsx"

const CartPage = () => {

    const [verifyPay, setVerifyPay] = useState(false)
    const cartData = useSelector((store) => store.carts.items);

    console.log(cartData);

    const dispatch = useDispatch()

    const incrementQty = (details) => {
        dispatch(incQty(details))
    }

    const decrementQty = (details) => {
        dispatch(decQty(details))
    }

    const totalAmount = cartData.reduce((acc, val) => {
        return acc + (val.qty * val.price);
    }, 0);

    const token = localStorage.getItem("token");

    const verifyPayment = async () => {
        const response = await axios.get(backendURL + "/verify")
        if (response) {
            setVerifyPay(true)
        }
    }

    const handleOrder = async (totAmt) => {
        console.log(totAmt)
        const order = await axios.post(backendURL + "/api/payment/create", {
            totAmt
        },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        console.log("Order", order.data)
        const { keyId, amount, currency, orderId, username, email } = order.data

        const options = {
            key: keyId,
            amount: amount,
            currency: currency,
            name: "ECOMM",
            description: "Test Transaction",
            order_id: orderId,
            prefill: {
                name: username,
                email: email
            },
            theme: {
                color: "#ff0000"
            },
            handler: verifyPayment
        }

        const rzp = new window.Razorpay(options)
        rzp.open()


    }

    return (
        <>
            {
                !verifyPay ? (

                    <div>
                        <div className="cart_box">
                            {
                                cartData.map((item) => (
                                    <div className="cart_card">
                                        <h2>{item.name}</h2>
                                        <img src={item.image} className="img_veg" />
                                        <div className="btn_cart">
                                            <button onClick={() => decrementQty(item)}>-</button>
                                            <p>{item.qty}</p>
                                            <button onClick={() => incrementQty(item)}>+</button>
                                        </div>
                                        <p className="prc">Rs. {item.qty * item.price}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="tot">
                            <h2>
                                Total Amount
                                <span> Rs. {totalAmount}</span>
                            </h2>


                            <div className="ord_btn_wrap">
                                <button className="order_btn" onClick={() => handleOrder(totalAmount)}>Place Order</button>
                            </div>
                        </div>
                    </div>

                ) : (
                    <div>
                        <h2>Verified User</h2>
                    </div>
                )
            }

        </>
    );
};

export default CartPage;