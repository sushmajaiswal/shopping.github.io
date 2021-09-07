import React from 'react';
import react from 'react';
export default class DataBindingComponent2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Name:'',
            Price:0,
            Stock:false
        }
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handlePriceChange=this.handlePriceChange.bind(this);
        this.handleStockChange=this.handleStockChange.bind(this);
    }
    handleNameChange(e){
        this.setState({
            Name:e.target.value,
            Price:this.state.Price,
            Stock:this.state.Stock
        })
    }
    handlePriceChange(e){
        this.setState({
            Name:this.state.Name,
            Price:e.target.value,
            Stock:this.state.Stock
        })
    }
    handleStockChange(e){
        this.setState({
            Name:this.state.Name,
            Price:this.state.Price,
            Stock:e.target.checked
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <h1 className="text-center"> State in class component</h1>
                <div className="row"> 
                    <div className="col-3">
                        <h2>Register Product</h2>
                        <dl>
                            <dt>Name</dt>
                            <dd className="form-check form-switch">
                            <input type="text" onChange={this.handleNameChange} value={this.state.Name}className="form-control"/>
                            </dd>
                            <dt>Price</dt>
                            <dd className="form-check form-switch">
                            <input type="text" onChange={this.handlePriceChange} value={this.state.Price}className="form-control"/>
                            </dd>
                            <dt>Stock</dt>
                            <dd className="form-check form-switch">
                            <input type="checkbox" onChange={this.handleStockChange} checked={this.state.Stock}className="form-check-input"/>
                            </dd>

                        </dl>
                    </div>
                    <div className="col-9">
                        <h2>Product Details</h2>
                        <dl>
                            <dt>Name</dt>
                            <dd>{this.state.Name}</dd>
                            <dt>Price</dt>
                            <dd>{this.state.Price}</dd>
                            <dt>Stock</dt>
                            <dd>{(this.state.Stock==true?"Available":"Out of Stock")}</dd>
                        
                        </dl>

                    </div>
                </div>
            </div>
        )
    }

}