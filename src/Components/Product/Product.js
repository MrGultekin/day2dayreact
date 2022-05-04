import "./Product.css";
import {useStateValue} from "../StateProvider/StateProvider";

const Product = ({id,title,image,price,rating}) => {
    const [state,dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
                title: title,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>€</small>
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
            <img src={image} alt={''}/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
)
};

export default Product;