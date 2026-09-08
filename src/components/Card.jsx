import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cart_slice.jsx'

const Card = ({data}) => {

  const dispatch = useDispatch()

  const addCart = (details) =>{
    dispatch(addItem(details))
  }


  return (
    <>
        <div className='prod_card'>
            <img src={data.image} alt="img" />
            <p>{data.name}</p>
            <p className='prc'>Rs. {data.price}</p>
            <button className='cart_btn' onClick={()=>addCart(data)}>Add To Cart</button>
        </div>
    </>
  )
}

export default Card
