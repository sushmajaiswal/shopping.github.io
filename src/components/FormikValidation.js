import React from "react";
import { Formik, useFormik } from "formik";

const ValidateProduct=productData=>{
    const errors={};
    if(!productData.Name){
        errors.Name='Product name Required';
    }else if(productData.Name.length<4){
        errors.Name='Name too short..Min 4 chars Required';
    }
    if(!productData.Price){
        errors.Price='Product Price Required';

    }else if(isNaN(productData.Price)){
        errors.Price='price must be a number';
    }
    if(!productData.Code){
        errors.Code='Product code Required';
    }else if(!/[A-Z]{3}{0-9}{2}/.test(productData.Code)){
        errors.Code='Invalid Code';
    }
    return errors;
}

export default function FormikValidation(){
    const formik=useFormik({
        initialValues:{
            Name:'',
            Price:0,
            Code:''
        },
        validate:ValidateProduct,
         onSubmit:values=>{
             alert(JSON.stringify(values));
         }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register Product</h3>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange}
                    value={formik.values.Name}name="Name"/></dd>
                    <dd className="text-danger">
                        {(formik.touched.Name && (formik.errors.Name)?formik.errors.Name:null)}

                    </dd>
                    <dt>Price</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange}
                    value={formik.values.Price}name="Price"/></dd>
                    <dd className="text-danger">
                        {(formik.touched.Price && (formik.errors.Price)?formik.errors.Price:null)}

                    </dd>
                    <dt>Product Code</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange}
                    value={formik.values.Code}name="Code"/></dd>
                    <dd className="text-danger">
                        {(formik.touched.Code && (formik.errors.Code)?formik.errors.Code:null)}

                    </dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}