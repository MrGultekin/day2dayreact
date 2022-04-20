import "./CheckoutProduct.css"

const CheckoutProduct = () => {
    return (
        <div className="checkoutProduct">
            <img src="https://m.media-amazon.com/images/I/61AlZCSq26L._AC_SX480_SY360_.jpg" alt="red kettle"
                 className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">KitchenAid 5KEK1522E Artisan Kettle 1.5 L , (Pink)</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>11</strong>
                </p>
                <div className="checkoutProduct__rating">⭐⭐⭐⭐⭐⭐⭐⭐⭐</div>
                <button>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;