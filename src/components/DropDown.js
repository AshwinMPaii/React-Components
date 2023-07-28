import React, { useEffect, useRef, useState } from 'react';
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Panel from './Panel'


function DropDown({ options, onChange, value }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {

            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }
    const renderedOption = options.map((option) => {

        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1 mb-1"
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className='flex justify-between items-center cursor-pointer bg-gray-100' onClick={handleClickOpen}>
                {value?.label || 'select...'}
                <span className="text-lg">{isOpen ? <BiUpArrow /> : <BiDownArrow />}</span>
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOption}</Panel>}
        </div>
    )
}

export default DropDown