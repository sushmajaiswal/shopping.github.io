import { useState,useEffect } from "react";

export default function FetchDemoComponent()
{
    const [categories,setCategories]=useState([]);
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(data=>{
            let allcategories=data;
            allcategories.unshift('All');
            setCategories(data)
        });
    
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>{ setProducts(data)
    })
},[])
function handleCategoryChange(e){
    if(e.target.value=='All'){
        fetch(`https://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>{setProducts(data);})
    }else{
        fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
        .then(response=>response.json())
        .then(data=>{ 
            setProducts(data);
        })
    }
}

    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 mt-2">
              <h2><span className="bi bi-cart2"></span>Shopping Online</h2>
            </header>
            <div className="row">
                <div className="col-3">
                    <h3>Select a category</h3>
                    <select className="form-select" onChange={handleCategoryChange}>
                        {
                            categories.map(category=>
                                <option value={category} key={category}>{category.toUpperCase()}</option>
                                )
                        }
                    </select>
                </div>
                <div className="col-9">
                    <h2>Products List</h2>
                    <div className="d-flex flex-wrap flex-row" style={{height:'500px',overflow:'auto'}}>
                    {
                        products.map(product=>
                            <div style={{width:'200px'}}className="card-m2" key={product.id}>
                              <img className="card-img-top" src={product.image}alt={product.title}height="200"/>
                              <div className="card-header" style={{height:'200px'}}>
                                  <p>{product.title}</p>
                              </div>
                              <div>
                                  <div className="card-footer">
                                  <p>${product.price}</p>
                                  <button className="btn btn-danger w-100">
                                      <span className="bi bi-cart-2"></span>
                                      Add to cart
                                  </button>
                                  </div>
                            </div>
                            </div>
                            )
                    }
                    </div>
                    </div>

                </div>
                </div>
                
            
        
    )
}