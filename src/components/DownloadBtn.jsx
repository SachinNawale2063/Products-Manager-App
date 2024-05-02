/* eslint-disable react/prop-types */

import { CSVLink } from 'react-csv';

const DownloadBtn = ({ csvData }) => {
    return (
        <CSVLink
            data={csvData}
            filename={"products.csv"}
            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 md:ml-0 mt-4 md:mt-0 flex justify-center items-center"
            target="_blank"
        >
            Download as CSV
        </CSVLink>
    )
}

export default DownloadBtn