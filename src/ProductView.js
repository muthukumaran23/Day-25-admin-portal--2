import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import React from "react";


function ProductView(){

    const params =useParams()

    const [productData,setProductData]=useState([])

    useEffect(()=>{
      
        loadUser()
     
    },[])

    let loadUser=async()=>{
        try{
            let product =await axios.get(`https://63e3213fc919fe386c01131e.mockapi.io/user/${params.id}`)
            console.log(product.data)
            setProductData(product.data)
        } catch (error){

        }
    
     }
     return(
        <>
        <h1>{productData.Vehicle}</h1>
        <h1>{productData.Manufacture}</h1>
        <h1>{productData.Model}</h1>
        <h1>{productData.Type}</h1>
        <h1>{productData.Fuel}</h1>
        <h1>{productData.Price}</h1>
        </>
     )
}
export default ProductView;