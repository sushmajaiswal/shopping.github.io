import React from 'react';
import  {useFormik } from 'formik';

export default function FormikComponent(){
    const formik=useFormik({
        initialValues:{
            Name:'',
            Price:0,
            ShippedTo:'',
            InStock:false
        },
        onSubmit:values=>{
            document.write(`
              <h2>Product Details</h2>
              <table border="1" width="400">
              <tr><td>Name</td>
              <td>${values.Name}</td>
              </tr>
              <tr><td>Price</td>
              <td>${values.Price}</td>
              </tr>
              <tr><td>ShippedTo</td>
              <td>${values.ShippedTo}</td>
              </tr>
              <tr><td>Stock/td>
              <td>${(values.InStock)==true?"Available":"out of stock"}</td>
              </tr>
              </table>
              
              `)
        }
    })
    return(
        <div className="container-fluid w-50">
            
            <form onSubmit={formik.handleSubmit}>
            <h3>Register Product</h3>
                <div className="mt-2">
                    <label className="form-label">Product Name</label>
                    <div>
                        <input type="text" onChange={formik.handleChange}name="Name" value={formik.values.Name}className="form-control"/>
                    </div>
                </div>
                <div className="mt-2">
                <label className="form-label">Price</label>
                    <div>
                        <input type="text" onChange={formik.handleChange}name="Price" value={formik.values.Price}className="form-control"/>
                    </div>
                </div>

                <div className="mt-2">
                <label className="form-label">Shipped To</label>
                    <div>
                        <select className="form-select" name="ShippedTo"onChange={formik.handleChange} value={formik.values.ShippedTo}>
                      <option>Delhi</option>
                      <option>Hyderabad</option>
                      <option>Chennai</option>
                      </select>
                    </div>
                </div>
                <div className="mt-2">
                <label className="form-label">In Stock</label>
                    <div className="form-check form-switch">
                        <input type="checkbox"onChange={formik.handleChange}checked={formik.values.InStock}name="Stock"className="form-check-input"/>yes
                    </div>
                </div>
                <div className="mt-2 d-grid">
                    <button className="btn btn-primary"> Register</button>
                </div>
            </form>

        </div>
    )

}