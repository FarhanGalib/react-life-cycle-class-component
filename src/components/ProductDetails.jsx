import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const ProductDetails = ({
    currentProduct,
    handleOnClickOnBackBtn
}) => {
    const [logo, setLogo] = useState(true);
    useEffect(() => {
        setTimeout(() =>setLogo(false),1000);
    }, []);
    return (
        <>
            {logo ? (
                <Logo></Logo>
            ) : (
                <div className="product-details">
                    <h4>{currentProduct?.name}</h4>
                    <p>category: {currentProduct?.category}</p>
                    <p>available: {currentProduct?.stock}</p>
                    <p>
                        <b>$ {currentProduct?.price}</b>
                    </p>
                    <br />
                    <button onClick={handleOnClickOnBackBtn}>Back</button>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
