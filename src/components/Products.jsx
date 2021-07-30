import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";

const Products = ({ products }) => {

    const [logo, setLogo] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => setLogo(false), 1000);
    }, []);

    const handleClickOnProduct = (key) => {
        history.push(`/product/${key}`);
    };

    return (
        <>
            {logo ? (
                <Logo></Logo>
            ) : (
                <div>
                    {products.map((pd) => (
                        <div
                            className="product-list"
                            key={pd.key}
                            onClick={() => handleClickOnProduct(pd.key)}
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
