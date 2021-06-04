import './HomeScreen.css';
import Product from '../components/Product'
export const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default HomeScreen;
