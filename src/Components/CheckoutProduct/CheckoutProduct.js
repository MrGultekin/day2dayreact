import "./CheckoutProduct.css"
import {useStateValue} from "../StateProvider/StateProvider";

const CheckoutProduct = (props) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id,
        })
    };

    return (
        <div className="checkoutProduct">
            <img src={props.image}
                 className="checkoutProduct__image" alt={'pic'}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
                <p className="checkoutProduct__price">
                    <strong>{props.price}</strong>
                    <small>$</small>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                                <p>⭐</p>
                            )
                        )}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;