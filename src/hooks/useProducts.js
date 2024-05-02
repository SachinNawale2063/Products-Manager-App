import { useState, useEffect } from "react";
import { getProducts } from "../api/productapi.js";

export const useProducts = () => {

    const [allproducts, setallproducts] = useState(null);
    const [allproductsError, setallproductsError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getProducts();
                setallproducts(data);
            } catch (error) {
                setallproductsError('Data fetching Failed')
            }

        }
        fetchData();
    }, [])

    return { allproducts, allproductsError }
}