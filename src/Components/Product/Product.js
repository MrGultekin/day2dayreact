import "./Product.css";

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>KitchenAid 5KHBV83EER Dipping Blender, (Red)</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>100</strong>
                </p>
                <div className="product__rating"> ⭐⭐</div>
            </div>
            {/*<img src="https://source.unsplash.com/pSVYyO-XlJk" alt="brown bag"/>*/}
            {/*<img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="blue bag"/>*/}
            {/*<img src="https://source.unsplash.com/a-QH9MAAVNI" alt="brown bag"/>*/}
            <img src="https://m.media-amazon.com/images/I/51fwsMV30sL._AC_SL1024_.jpg" alt=""/>
            <button>Add to Basket</button>
        </div>
)
};

export default Product;