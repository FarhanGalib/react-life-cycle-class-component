import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Products = ({ products, handleOnClickOnProduct }) => {
    const [logo, setLogo] = useState(true);
    useEffect(() => {
        setTimeout(() => setLogo(false), 1000);
    }, []);

    return (
        <>
            {logo ? (
                <Logo></Logo>
            ) : (
                <div>
                    {products.map((pd) => (
                        <div
                            className="product-list"
                            onClick={() => handleOnClickOnProduct(pd)}
                            key={pd.key}
                        >
                            <h4>{pd.name}</h4>
                            <p>
                                <big>
                                    <b>$ {pd.price}</b>
                                </big>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Products;
