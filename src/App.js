import React, { Component } from "react";
import "./components/Product.css";
import Product from "./components/Product.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import data from "./data/data";


class App extends Component {
    state = {
        products: data,
        currentProduct: null,
    };

    handleOnClickOnProduct = (product) => {
        this.setState({ ...this.state, currentProduct: product });
        
    };

    handleOnClickBackBtn = () => {
        this.setState({ ...this.state, currentProduct: null });
       
    };


    render() {
        return (
            <div>
                { !this.state.currentProduct ? (
                    <Product
                        products={this.state.products}
                        handleOnClickOnProduct={this.handleOnClickOnProduct}
                        
                    />
                ) : (
                    <ProductDetails
                        product={this.state.currentProduct}
                        handleOnClickBackBtn={this.handleOnClickBackBtn}
                        
                    />
                )}
            </div>
        );
    }
}

export default App;
