import { useState } from 'react';
import { useProducts } from '../hooks/useProducts.js';
import ProductTable from '../components/ProductTable.jsx';

const Home = () => {
    // Get all products from the API
    const { allproducts, allproductsError } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');

    if (allproductsError) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="text-red-600 text-lg">{allproductsError.message}</div>
            </div>
        );
    }

    if (allproducts) {
        return (
            <div className="bg-gradient-to-b from-blue-200 to-blue-300 min-h-screen">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">PRODUCT LIST</h1>
                    <input
                        type="text"
                        placeholder="Search product..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ProductTable
                        searchQuery={searchQuery}
                        products={allproducts}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-gray-600 text-lg">Data is loading...</div>
        </div>
    );
};

export default Home;
