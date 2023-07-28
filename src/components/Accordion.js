import { useState } from "react";
import { BiDownArrow, BiSolidLeftArrow } from "react-icons/bi";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        }
        else {
            setExpandedIndex(nextIndex)
        }
    }
    const renderedItem = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl mr-3">{isExpanded ? <BiDownArrow /> : <BiSolidLeftArrow />}</span>
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>)
    })
    return (
        <div className='border-x border-t rounded w-3/5 mx-auto'>
            {renderedItem}
        </div>
    )
}

export default Accordion