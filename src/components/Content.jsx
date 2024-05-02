/* eslint-disable react/prop-types */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Content = ({ currentItems }) => {
    return (
        <TableContainer component={Paper} className="overflow-x-auto">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="px-3 md:px-6 py-3 md:py-4">ID</TableCell>
                        <TableCell className="px-3 md:px-6 py-3 md:py-4">Title</TableCell>
                        <TableCell className="px-3 md:px-6 py-3 md:py-4">Description</TableCell>
                        <TableCell className="px-3 md:px-6 py-3 md:py-4">Price</TableCell>
                        <TableCell className="px-3 md:px-6 py-3 md:py-4">Brand</TableCell>
                        <TableCell className="px-3 md:px-6 py-3 md:py-4">Category</TableCell>
                        <TableCell className="px-3 md:px-6 py-3 md:py-4">Ratings</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentItems.map(product => (
                        <TableRow key={product.id} className="hover:bg-gray-100">
                            <TableCell className="px-3 md:px-6 py-3 md:py-4">{product.id}</TableCell>
                            <TableCell className="px-3 md:px-6 py-3 md:py-4">{product.title}</TableCell>
                            <TableCell className="px-3 md:px-6 py-3 md:py-4">{product.description}</TableCell>
                            <TableCell className="px-3 md:px-6 py-3 md:py-4">{product.price}</TableCell>
                            <TableCell className="px-3 md:px-6 py-3 md:py-4">{product.brand}</TableCell>
                            <TableCell className="px-3 md:px-6 py-3 md:py-4">{product.category}</TableCell>
                            <TableCell className="px-3 md:px-6 py-3 md:py-4">{product.rating}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Content;
