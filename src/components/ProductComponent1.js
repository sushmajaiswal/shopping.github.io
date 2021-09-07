import { useState } from "react";

export default function ProductComponent1()
{
    const[products,setProducts]=useState([{Id:1,Name:'JBL Speaker',Price:4500.55,Photo:'image/jblSpeaker.jfif'},{Id:2,Name:'Nike casulas',Price:5500.55,Photo:'image/NikeShoe.jpg'}
    ]);
    return(
        <div className="container-fluid">
            <h2>ProductDetails Table</h2>
            <table className="table table-hover w-25">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    products.map(product=>
                    <tr key={product.Id}>
                       <td>{product.Name}</td>    
                       <td>{product.Price}</td>
                       <td><img alt={ProductComponent1.Name}src={product.Photo}height="50" width="50"/></td>
                    </tr>)
                    }
                </tbody>
            </table>
          <h2>Products Catalog</h2>
          <div className="d-flex flex-wrap flex-row">
              {
                  products.map(product=>
                    <div className="card m-3 p-2" key={product.Id}>
                        <img alt={product.Name}src={product.Photo}height="200"className="card-img-top"/>
                        <div className="card-header">
                            <h3>{product.Name}</h3>
                            <p>&#8377;{product.Price}</p>
                        </div>
                       </div> 
                        )
              }

          </div>
        </div>
    )
}