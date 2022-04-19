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
                    <Product
                        id={"00001"}
                        title="KitchenAid 5KHBV83EER Dipping Blender, (Red)"
                        price={99.90}
                        rating={5}
                        image=" https://m.media-amazon.com/images/I/51fwsMV30sL._AC_SL1024_.jpg"
                    />
                    <Product
                        id={"00002"}
                        title="KitchenAid Food Processors, (Black)"
                        price={349.90}
                        rating={5}
                        image=" https://m.media-amazon.com/images/I/51KFuY9cKES._AC_SL1000_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={"00003"}
                        title="KitchenAid 5KEK1522E Artisan Kettle 1.5 L , (Pink)"
                        price={187.93}
                        rating={4}
                        image=" https://m.media-amazon.com/images/I/61AlZCSq26L._AC_SX480_SY360_.jpg"
                    />
                    <Product
                        id={"00004"}
                        title="KitchenAid 5KCM4212SX Cold Brew Coffee Maker, Stainless Steel, (Silver)"
                        price={129.90}
                        rating={3}
                        image=" https://m.media-amazon.com/images/I/71qMpps6-eL._AC_SL1200_.jpg"
                    />
                    <Product
                        id={"00005"}
                        title="KitchenAid Artisan 5KMT2204EPP 2-Slice Toaster 1250 W Pebble (Palm)"
                        price={299.90}
                        rating={1}
                        image=" https://m.media-amazon.com/images/I/31ImJMvBAdL._AC_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={"00006"}
                        title="KitchenAid Artisan Food Processor with Tilting Motor Head 5KSM175PSEIB, Ink (Green)"
                        price={523.90}
                        rating={5}
                        image=" https://m.media-amazon.com/images/I/81weWfj1ueL._AC_SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Hero;