import React, { Component } from "react";
import Logo from "./Logo";
import "./Product.css";

class ProductDetails extends Component {
    state = { logo: true };
    componentDidMount() {
        setTimeout(() => this.setState({ logo: false }), 1000);
    }
    render() {
        const { product, handleOnClickBackBtn } = this.props;

        return (
            <>
                {this.state.logo ? (
                    <Logo></Logo>
                ) : (
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
                )}
            </>
        );
    }
}

export default React.memo(ProductDetails);
