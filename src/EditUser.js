import axios from "axios";
import {useFormik} from "formik"
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditUser(){

    const params = useParams()

    let navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            name:"",
            position:"",
            office:"",
            age:"",
            startdate:"",
            salary:""
        },
  
        //it act as intermidiate for showcase the result.
       
        validate :(values)=>{
           let errors={};

           if(values.name ==="" ){
            errors.name="please enter your name"
           }
           if(values.name.length< 5){
            errors.name="please enter greater than 5"
           }

           if(values.position ===""){
            errors.position="please enter your position"
           }

           return errors

        },
      //when form is submit(handlesubmit) ,it will triger  
        onSubmit:async(values)=>{
           
            
            //this put method used for edited values are again updated.
           
            await axios.put(`https://63e3213fc919fe386c01131e.mockapi.io/users/${params.id}`,values)
            navigate("/portal/users")
        }
    });

      useEffect(()=>{
       loadUser()
      },[])

      let loadUser = async()=>{
        try{
           let user = await axios.get(`https://63e3213fc919fe386c01131e.mockapi.io/users/${params.id}`)
          
   // setValues is method use for set the values in object.the values we get from mock API    
           formik.setValues({
            name: user.data.name,
            position:user.data.position,
            office:user.data.office,
            age:user.data.age,
            startdate:user.data.startDate,
            salary:user.data.salary
        })
        
        } catch (error){

        }
      }


    return(
        <>
     
        <div className="container">
           <form onSubmit={formik.handleSubmit}>
            <div className="row">
            <div className="col-lg-6">
                <label>Username</label>
                <input 
                    className="form-control" 
                    type={"text"}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name">
   {/* this handleChange is a one of formik facility.its used for update the values in formik variable */}
                </input>
                <span style={{color:"red"}}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
                <label>Position</label>
                <input 
                className={`form-control ${formik.errors.position ? `input-error` : ``}`} 
                type={"text"}
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
                ></input>
                 <span style={{color:"red"}}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-6">
                <label>Office</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"></input>
            </div>
              
            <div className="col-lg-6">
                <label>Age</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"></input>
            </div>
            <div className="col-lg-6">
                <label>Startdate</label>
                <input 
                className="form-control" 
                type={"text"}
                value={formik.values.startdate}
                onChange={formik.handleChange}
                name="startdate"></input>
            </div>
            <div className="col-lg-6">
                <label>Salary</label>
                <input 
                className="form-control"
                 type={"text"}
                 value={formik.values.salary}
                 onChange={formik.handleChange}
                 name="salary"></input>
            </div>
            <div className="col-lg-6">
               
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
export default EditUser;