import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
    componentWillUnmount() {
        setTimeout(() => {
            this.props.logoUnloader();
        }, 1500);
    }

    render() {
        const { products, handleOnClickOnProduct } = this.props;

        return (
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
        );
    }
}

export default Product;
