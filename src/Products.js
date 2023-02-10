import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


function Products(){

   const[products,setProducts]=useState([])
   const[isLoading,setLoading]=useState(false)

   useEffect(()=>{
     loadData()
   },[])

   let loadData=async()=>{
       
       setLoading(true) 
       let products=await axios.get("https://63e3213fc919fe386c01131e.mockapi.io/user")
       
       setProducts(products.data)
       setLoading(false)
   }

   let productDelete = async (id)=>{
   
     try{
         let ask= window.confirm("Do you want to delete this data.?"
         );
         if(ask){
             await axios.delete(`https://63e3213fc919fe386c01131e.mockapi.io/user/${id}`);
             loadData();
         }
     }catch (error){
 
     }
     
    }
   
    return(

        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Products</h1>
                        <Link to="/portal/createproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
        </div>
       { 
       isLoading ?<span>Loading...</span>: <div class="card shadow mb-4">
       <div class="card-header py-3">
           <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
       </div>
       <div class="card-body">
           <div class="table-responsive">
               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr>
                           
                           <th>Vehicle</th>
                           <th>Manufacture</th>
                           <th>Model</th>
                           <th>Type</th>
                           <th>Fuel</th>
                           <th>Price</th>
                       </tr>
                   </thead>
                   <tfoot>
                       <tr>
                           
                           <th>Vehicle</th>
                           <th>Manufacture</th>
                           <th>Model</th>
                           <th>Type</th>
                           <th>Fuel</th>
                           <th>Price</th>
                       </tr>
                   </tfoot>
                  <tbody>
                  
                   
                 
                   {products.map((product,index)=>{
                       return <tr key={index}>

                           <td>{product.Vehicle}</td>
                           <td>{product.Manufacture}</td>
                           <td>{product.Model}</td>
                           <td>{product.Type}</td>
                           <td>{product.Fuel}</td>
                           <td>{product.Price}</td>
                           <td>
                                    <Link to={`/portal/product/${product.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                    <Link to={`/portal/product/edit/${product.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                    <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                                </td>
                       </tr>
                   })}
                   </tbody> 
                       
                   
               </table>
           </div>
       </div>
   </div>}
        
        
        </div>


    )
}
export default Products;