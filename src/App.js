import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import data from "./data/data";
import ProductDetails from "./components/ProductDetails";


function App() {
    const [products, setProducts] = useState(data);
    const [currentProduct, setCurrentProduct] = useState(null);

    const handleOnClickOnProduct = (pd) => {
        setCurrentProduct(pd);
    };
    const handleOnClickOnBackBtn = () => {
        setCurrentProduct(null);
    };

    return (
        <div>
            {!currentProduct ? (
                <Products
                    products={products}
                    handleOnClickOnProduct={handleOnClickOnProduct}
                ></Products>
            ) : (
                <ProductDetails
                    currentProduct={currentProduct}
                    handleOnClickOnBackBtn={handleOnClickOnBackBtn}
                ></ProductDetails>
            )}
        </div>
    );
}

export default App;
