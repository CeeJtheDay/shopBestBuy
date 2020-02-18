import React, { useState, useEffect } from "react";
import API from "../../utils/API";

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts();
    },[])
    
    const loadProducts = () => {
        API.getProducts()
      .then(res => {
        console.log(res.data);
        setProducts(res.data)
      })
      .catch(err => console.log(err));
    }


    return (
        <ul>
         {products.map(product => {
             return (
                 <li key={product.sku}>
                 {product.name}
                 </li>
             )
         })}
        </ul>
    )
};

export default Product;