import Table from './Table';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from '../hooks/useSort';

function SortableTable(props) {

    const { data, config } = props;
    const { sortBy, sortOrder, sortedData, handleClick } = useSort(data, config);



    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => (

                <th onClick={() => handleClick(column.label)} className='cursor-pointer hover:bg-gray-300'>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        }
    })

    return (
        <Table {...props} data={sortedData} config={updatedConfig} />
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoTriangleUp />
                <GoTriangleDown />
            </div>
        )
    }
    if (sortOrder === null) {
        return (
            <div>
                <GoTriangleUp />
                <GoTriangleDown />
            </div>
        )
    } else if (sortOrder === 'asc') {
        return (
            <div>
                <GoTriangleUp />
            </div>
        )
    } else if (sortOrder === 'desc') {
        return (
            <div>
                <GoTriangleDown />
            </div>
        )
    }
}
export default SortableTable