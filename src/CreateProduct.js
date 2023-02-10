import axios from "axios";
import {useFormik} from "formik"
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateProduct(){

    const params = useParams()
    let navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            Vehicle:"",
            Manufacture:"",
            Model:"",
            Type:"",
            Fuel:"",
            Price:""
        },
  
        //it act as intermidiate for showcase the result.
       
        validate :(values)=>{
           let errors={};

           if(values.Vehicle ==="" ){
            errors.Vehicle="please enter Bikename"
           }
           
           if(values.Manufacture ===""){
            errors.Manufacture="please enter Manufacture"
           }

           return errors

        },
      //when form is submit(handlesubmit) ,it will triger  
        onSubmit: async(values)=>{
            // this is POST Methoed,used for create a new data & add it
            
            let user= await axios.post("https://63e3213fc919fe386c01131e.mockapi.io/user",values)
            navigate("/portal/products")
            alert("Product Created")
        }
    });





    return(
        <>
     
        <div className="container">
           <form onSubmit={formik.handleSubmit}>
            <div className="row">
            <div className="col-lg-6">
                <label>Vehicle</label>
                <input 
                    className="form-control" 
                    type={"text"}
                    value={formik.values.Vehicle}
                    onChange={formik.handleChange}
                    name="Vehicle">
   {/* this handleChange is a one of formik facility.its used for update the values in formik variable */}
                </input>
                <span style={{color:"red"}}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
                <label> Manufacture</label>
                <input 
                className={`form-control ${formik.errors.position ? `input-error` : ``}`} 
                type={"text"}
                value={formik.values. Manufacture}
                onChange={formik.handleChange}
                name="Manufacture"
                ></input>
                 <span style={{color:"red"}}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-6">
                <label>Model</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.Model}
                onChange={formik.handleChange}
                name="Model"></input>
            </div>
              
            <div className="col-lg-6">
                <label>Type</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.Type}
                onChange={formik.handleChange}
                name="Type"></input>
            </div>
            <div className="col-lg-6">
                <label>Fuel</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.Fuel}
                onChange={formik.handleChange}
                name="Fuel"></input>
            </div>
            <div className="col-lg-6">
                <label>Price</label>
                <input 
                className="form-control"
                 type={"text"}
                 value={formik.values.Price}
                 onChange={formik.handleChange}
                 name="Price"></input>
            </div>
          
            <div className="col-lg-6">
         {/* here we change a input tag element into button & we also write a formik logic for disable this button,when user created      */}
                <input 
                className="btn-primary" 
                type={"submit"} 
                value="submit"
                disabled={!formik.isValid}></input>
            </div>
            </div>
            </form>
        </div>
       
       
       
       </>
    )
}
export default CreateProduct