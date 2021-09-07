export default function DataBindingComponent()
{
    var product={
         Name:"JBL Speaker",
         Price: 4500.55,
         Stock: true,
         Photo: "image/speaker.jpg"
    };
    return(
        <div className="container-fluid">
            <h3>Product Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock==true)?"Available":"out of stock"}</dd>
                <dd>
                    <img src={product.Photo}alt="speaker"width="100"height="100"/>
                </dd>
            </dl>
        </div>
    )
}