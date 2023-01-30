import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function MultiSelect({ itemsList, selected }) {

    const [dropdown, setDropdown] = useState(false)
    const [items, setItems] = useState(itemsList);
    const [selectedItems, setSelected] = useState([]);

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    // const closeDropdown = () => {
    //     setDropdown(false)
    // }

    const addTag = (item) => {
        for (var i = 0; i < selectedItems.length; i++) {
            if (item === selectedItems[i]) {
                setDropdown(false)
                return
            }
        }
        setSelected(selectedItems.concat(item))
        setDropdown(false)
    }

    const removeTag = (item) => {
        const filtered = selectedItems.filter((element) => element != item)
        setSelected(filtered)
    }

    // useEffect(() => {
    //     if (dropdown === true) {
    //         document.body.addEventListener('click', closeDropdown)   
    //     }         
    // })

    return (
        <div className="w-[300px]">  {/* Check on this later */}
            {  
                selectedItems.length > 0 ?
                <div className="">
                    <p className="text-lg">Selected</p>
                    <p>test {selected}</p>
                    <div className="py-2">
                        {selectedItems.map((tag, index) => {
                            return (
                                <div key={index} className="flex justify-center items-center my-[6px] font-medium py-[5px] px-[10px] rounded-full text-white bg-third w-fit">
                                    <div className="text-xs font-normal leading-none max-w-full mr-2">{tag}</div>
                                    <div className="flex flex-auto flex-row-reverse">
                                        <div onClick={() => removeTag(tag)} className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}                    
                    </div>
                </div>
                
                : ''
            }
            <div className="w-full relative">
                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded">
                    <div className="flex flex-auto flex-wrap">
                        <div className="flex-1">
                            <input
                                placeholder="Select..."
                                autoComplete="off"
                                disabled
                                className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                            />
                        </div>
                    </div>
                    <div className="text-gray-300 w-8 py-1 pl-2 pr-1 flex items-center border-gray-200" onClick={toggleDropdown}>
                        <div className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                { dropdown ? <Dropdown list={items} addItem={addTag}/> : null }
            </div>
        </div>
    );
};

export default MultiSelect;