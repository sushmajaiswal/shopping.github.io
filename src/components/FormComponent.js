import react from "react";
import React,{useState} from 'react';
export default function FormComponent(){
    const [getName,setName]=useState("");
    const[getPrice,setPrice]=useState(0);
    const[getStock,setStock]=useState(false);
    const[getCity,setCity]=useState("");

    const handleSubmit=()=>{
        document.write(`Name=${getName}<br>Price=${getPrice}<br>Shiped To=${getCity}<br>Stock=${(getStock==true)?"Available":"Out of stock"}`);
         
    }
    return(
        <div className="container-fluid w-50">
            <h3>Register Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <label className="form-label">Product Name</label>
                    <div>
                        <input type="text" onChange={e=>setName(e.target.value)}name="Name" value={getName}className="form-control"/>
                    </div>
                </div>
                <div className="mt-2">
                <label className="form-label">Price</label>
                    <div>
                        <input type="text" onChange={e=>setPrice(e.target.value)}name="Price" value={getPrice}className="form-control"/>
                    </div>
                </div>

                <div className="mt-2">
                <label className="form-label">Shipped To</label>
                    <div>
                        <select className="form-select"onChange={e=>setCity(e.target.value)} value={getCity}>
                      <option>Delhi</option>
                      <option>Hyderabad</option>
                      <option>Chennai</option>
                      </select>
                    </div>
                </div>
                <div className="mt-2">
                <label className="form-label">In Stock</label>
                    <div className="form-check form-switch">
                        <input type="checkbox"onChange={e=>setStock(e.target.checked)}checked={getStock}name="Stock"className="form-check-input"/>yes
                    </div>
                </div>
                <div className="mt-2 d-grid">
                    <button className="btn btn-primary"> Register</button>
                </div>
            </form>

        </div>
    )
}