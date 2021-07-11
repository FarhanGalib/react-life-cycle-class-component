import React, { Component } from "react";
import "./Product.css";

class ProductDetails extends Component {
    componentWillUnmount() {
        setTimeout(() => {
            this.props.logoUnloader();
        }, 1500);
    }
    render() {
        const { product, handleOnClickBackBtn } = this.props;

        return (
            <div className="product-details">
                <h4>{product?.name}</h4>
                <p>
                    <b>$ {product?.price}</b>
                </p>
                <p>
                    <small>Category: {product?.category}</small>
                </p>
                <p>
                    <small>Available: {product?.stock}</small>
                </p>
                <button onClick={handleOnClickBackBtn}>Go Back</button>
            </div>
        );
    }
}

export default ProductDetails;
