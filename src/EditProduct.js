import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function EditProduct() {
const params = useParams()
const navigate = useNavigate()
   const formik = useFormik({
        initialValues: {
            Vehicle: "",
            Manufacture: "",
            Model: "",
            Type: "",
            Fuel: "",
            Price: ""
        },
        validate: (values) => {
           let errors = {};

            if (values.Vehicle === "") {
                errors.Vehicle = "Please enter Vehicle";
            }

            if (values.Manufacture === "") {
                errors.Manufacture = "Please enter Manufacture ";
            }

            return errors;

        },
        onSubmit: async (values) => {
         await axios.put(`https://63e3213fc919fe386c01131e.mockapi.io/user/${params.id}`, values)
        navigate("/portal/products/")
        }
    });

    useEffect (() => {
        loadUser()
    }, [])

    let loadUser = async () => {
        try{
            let product = await axios.get(`https://63e3213fc919fe386c01131e.mockapi.io/user/${params.id}`)
        formik.setValues({
            Vehicle : product.data. Vehicle,
            Manufacture : product.data.Manufacture,
            Model : product.data.Model,
            Type: product.data.Type,
            Fuel: product.data.Fuel,
            Price: product.data.Price,
        });
        }catch(error){
            
        }
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">

                        <div className="col-lg-6">
                            <label>Vehicle</label>
                            <input className={`form-control ${formik.errors.Vehicle ? `input-error` : ``}`} 
                                type={"text"} 
                                value={formik.values.Vehicle} 
                                onChange={formik.handleChange} 
                                name="Vehicle" >

                            </input>

                            <span style={{ color: "red" }}>{formik.errors.name}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Manufacture</label>
                            <input className={`form-control ${formik.errors.Manufacture ? `input-error` : ``}`} type={"text"} value={formik.values.Manufacture} onChange={formik.handleChange} name="Manufacture"></input>

                            <span style={{ color: "red" }}>{formik.errors.model}</span>
                        </div>

                        <div className="col-lg-6">
                            <label> Model</label>
                            <input className={`form-control ${formik.errors. Model ? `input-error` : ``}`} type={"text"} value={formik.values.Model} onChange={formik.handleChange} name="Model"></input>
                            <span style={{ color: "red" }}>{formik.errors.Model}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Type</label>
                            <input className={`form-control ${formik.errors.Type ? `input-error` : ``}`} type={"text"} value={formik.values.Type} onChange={formik.handleChange} name="Type"></input>
                            <span style={{ color: "red" }}>{formik.errors.Type}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Fuel</label>
                            <input className={`form-control ${formik.errors.Fuel? `input-error` : ``}`} type={"text"} value={formik.values.Fuel} onChange={formik.handleChange} name="Fuel"></input>
                            <span style={{ color: "red" }}>{formik.errors.Fuel}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Price</label>
                            <input className={`form-control ${formik.errors.Price ? `input-error` : ``}`} type={"text"} value={formik.values.Price} onChange={formik.handleChange} name="Price"></input>

                            <span style={{ color: "red" }}>{formik.errors.Price}</span>
                        </div>

                        <div className="col-lg-6">
                            <input className='btn btn-primary'
                                type={"submit"}
                                value="Submit" disabled={!formik.isValid} >
                            </input>
                        </div>

                        <div>

                        </div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default EditProduct