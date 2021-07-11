import React, { Component } from "react";
import "./components/Product.css";
import Product from "./components/Product.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import data from "./data/data";
import Logo from "./components/Logo";

class App extends Component {
    state = {
        products: data,
        currentProduct: null,
        logo: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ ...this.state, logo: false });
        }, 1500);
    }

    componentDidUpdate() {
        
    }

    handleOnClickOnProduct = (product) => {
        this.setState({ ...this.state, currentProduct: product });
        this.logoLoader();
    };

    handleOnClickBackBtn = () => {
        this.setState({ ...this.state, currentProduct: null });
        this.logoLoader();
    };

    logoLoader = () => {
        this.setState((prevState) => ({ logo: !prevState.logo }));
    };

    logoUnloader = () => {
        this.setState((prevState) => ({ logo: !prevState.logo }));
    };

    render() {
        return (
            <div>
                {this.state.logo ? (
                    <Logo/>
                ) : !this.state.currentProduct ? (
                    <Product
                        products={this.state.products}
                        handleOnClickOnProduct={this.handleOnClickOnProduct}
                        logoUnloader={this.logoUnloader}
                    />
                ) : (
                    <ProductDetails
                        product={this.state.currentProduct}
                        handleOnClickBackBtn={this.handleOnClickBackBtn}
                        logoUnloader={this.logoUnloader}
                    />
                )}
            </div>
        );
    }
}

export default App;
