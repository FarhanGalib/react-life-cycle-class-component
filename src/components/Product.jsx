import React, { Component } from "react";
import Logo from "./Logo";
import "./Product.css";

class Product extends Component {
    state = { logo: true };
    componentDidMount() {
        setTimeout(() => this.setState({ logo: false }), 1000);
    }

    render() {
        const { products, handleOnClickOnProduct } = this.props;

        return (
            <>
                {this.state.logo ? (
                    <Logo></Logo>
                ) : (
                    <div>
                        {products.map((pd) => (
                            <div
                                className="product-list"
                                key={pd.key}
                                onClick={() => handleOnClickOnProduct(pd)}
                            >
                                <h4>{pd.name}</h4>
                                <p>$ {pd.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </>
        );
    }
}

export default Product;
