import React,{useState,useEffect} from 'react'
import axios from "axios"

import { backendURL } from '../App.jsx'
import Card from '../components/Card.jsx'

const Home = () => {

  const [products,setProducts] = useState([])  

  useEffect(()=>{
        getProducts()
  },[]) 
  
  const getProducts = async () =>{
        const response = await axios.get(backendURL + "/api/admin/listProducts")
        console.log(response.data.listedProducts)
        setProducts(response.data.listedProducts)
  }


  return (
    <div className='products_container'>
        <div className='prod_box'>
            {
                products.map((item,idx)=>( 
                    <Card data={item} />   
                ))
            }
        </div>
    </div>
  )
}

export default Home
