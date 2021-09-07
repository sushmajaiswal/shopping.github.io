import React from "react";

export default class DataBindingComponent1 extends React.Component
{
    product={
        Name:"Nike Casuals",
         Price: 4500.55,
         Stock: true,
         Photo: "image/Nike.jpg"
    };
    render(){
        return(
            <div className="container-fluid">
                <h3>Product Details</h3>
            <dl>
                <dt>Edit Name</dt>
                <dd><input type="text" value={this.product.Name}/></dd>
                <dt>Name</dt>
                <dd>{this.product.Name}</dd>
                <dt>Price</dt>
                <dd>{this.product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(this.product.Stock==true)?"Available":"out of stock"}</dd>
                <dd>
                    <img src={this.product.Photo}alt="speaker"width="100"height="100"/>
                </dd>
            </dl>
        </div>

        )
    }
}