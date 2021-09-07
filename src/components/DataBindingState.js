import {useState}from"react";
export default function DataBindingState(){
    const[product,setProduct]=useState({Name:'',Price:0,Stock:false});
    const[title,setTitle]=useState('State in Function Components');
    function handleNameChange(e){
        setProduct({
            Name:e.target.value,
            Price: product.Price,
            Stock: product.Stock
          
        })
    }
    function handlePriceChange(e){
        setProduct({
            Name:product.Name,
            Price: e.target.value,
            Stock: product.Stock
          
        })
    }
    function handleStockChange(e){
        setProduct({
            Name:product.Name,
            Price: product.Price,
            Stock: e.target.checked
          
        })
    }
    return(
        <div className="container-fluid">
          <h1 className="text-center">{title}</h1>
         <div className="row">
            <div className="col-3">
                <h2>Register Product</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" value={product.Name}onChange={handleNameChange}/>
                    </dd>
                    <dt>Price</dt>
                    <dd>
                        <input type="text" value={product.Price}onChange={handlePriceChange}/>
                    </dd>
                    <dt>stock</dt>
                    <dd className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" checked={product.Stock}onChange={handleStockChange}/>
                    </dd>
                </dl>

            </div>
            <div className="col-9">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock==true)?"Available":"out of stock"}</dd>
            </dl>
            </div>
        </div>
    </div>
        )
}