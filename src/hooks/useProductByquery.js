import { useState, useEffect } from "react";
import { getProductByQuery } from "../api/productapi.js";

export const useProductByquery = (query) => {

    const [filteredproducts, setfilteredproducts] = useState(null);
    const [filteredproductsError, setfilteredproductsError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getProductByQuery(query);
                setfilteredproducts(data);
            } catch (error) {
                setfilteredproductsError('Data fetching Failed')
            }

        }
        fetchData();
    }, [query])

    return { filteredproducts, filteredproductsError }
}