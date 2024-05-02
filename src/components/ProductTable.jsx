/* eslint-disable react/prop-types */
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useProductByquery } from '../hooks/useProductByquery.js';
import Content from './Content.jsx';
import DownloadBtn from './DownloadBtn.jsx';

const ProductTable = ({ searchQuery, products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const { filteredproducts, filteredproductsError } = useProductByquery(searchQuery)

    const selectedProducts = searchQuery === '' ? products.products : filteredproducts.products

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = selectedProducts.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const csvData = selectedProducts.map(product => ({ id: product.id, title: product.title, description: product.description, price: product.price, brand: product.brand, category: product.category, rating: product.rating }));

    if (filteredproductsError) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="text-red-600 text-lg">{filteredproductsError.message}</div>
            </div>
        );
    }

    return (
        <>
            <Content currentItems={currentItems} />

            <div className="flex flex-col md:flex-row justify-between mt-4">
                <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                    <ul className="flex">
                        {Array.from({ length: Math.ceil(selectedProducts.length / itemsPerPage) }).map((_, index) => (
                            <li key={index}>
                                <button
                                    className={`px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-700'
                                        }`}
                                    onClick={() => paginate(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Select
                        value={itemsPerPage}
                        onChange={e => setItemsPerPage(parseInt(e.target.value))}
                        className="border border-gray-300 px-2 py-1 rounded-md mb-4 md:mb-0 md:mr-4"
                    >
                        <MenuItem value={5}>5 items per page</MenuItem>
                        <MenuItem value={10}>10 items per page</MenuItem>
                        <MenuItem value={15}>15 items per page</MenuItem>
                    </Select>
                    <DownloadBtn csvData={csvData} />
                </div>
            </div>
        </>
    )
}

export default ProductTable;
