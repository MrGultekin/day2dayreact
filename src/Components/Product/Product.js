import "./Product.css";

const Product = ({id,title,image,price,rating}) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                            )
                        )}
                </div>
            </div>
            {/*<img src="https://source.unsplash.com/pSVYyO-XlJk" alt="brown bag"/>*/}
            {/*<img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="blue bag"/>*/}
            {/*<img src="https://source.unsplash.com/a-QH9MAAVNI" alt="brown bag"/>*/}
            <img src={image}/>
            <button>Add to Basket</button>
        </div>
)
};

export default Product;