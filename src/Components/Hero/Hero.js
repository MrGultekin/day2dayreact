import "./Hero.css"
import Product from "../Product/Product";

const Hero = () => (
    <div>
        <div className="home">
            <div className="home__container">

                {/*<img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="sale pic" className="home__image"/>*/}
                {/*<img src="https://source.unsplash.com/uFdCDgnoNVI/" alt="robot" className="home__image"/>*/}
                {/*<img src="https://source.unsplash.com/_3Q3tsJ01nc/" alt="robot" className="home__image"/>*/}
                <img src="https://source.unsplash.com/mIqyYpSNq3o/" alt="robot" className="home__image"/>
                <div className="home__row">
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
    </div>
);

export default Hero;