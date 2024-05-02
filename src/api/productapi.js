const BASE_URL = "https://dummyjson.com"

const apiGet = async (queryString) =>{
    const response = await fetch(`${BASE_URL}${queryString}`);
    const body = await response.json();
    return body;
}

export const getProducts = () => apiGet(`/products`)
export const getProductByQuery = (query) => apiGet(`/products/search?q=${query}`)
