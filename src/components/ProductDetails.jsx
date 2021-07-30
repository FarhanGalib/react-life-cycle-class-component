import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useParams, useHistory } from "react-router-dom";


const ProductDetails = ({products}) => {

    const [currentProduct, setCurrentProduct] = useState();
    const [logo, setLogo] = useState(true);
    const {key} = useParams();
    const history= useHistory();

    useEffect(() => {
        setCurrentProduct(products.find(p => p.key === key));
        setTimeout(() => setLogo(false), 1000);

    }, []);
    
    const handleBackButton= () => {   
        history.push("/");
    };

    
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
                    <button onClick={handleBackButton}>Back</button>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
