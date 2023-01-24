import React, { useState } from "react"

function Search() {

    const [inputValue, setInputValue] = useState('')

    const getInputValue = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className="p-3 rounded-lg bg-slate-100 flex">
            <div className='flex relative w-full'>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className='flex border rounded-[5px] border-gray-300 w-full'>
                    <input 
                        className='rounded-[5px] pr-10 py-2 pl-10 border-gray-400 outline-none w-full' 
                        type='search' 
                        autoComplete='off' 
                        placeholder='Search' 
                        autoFocus={false}
                        value={inputValue}
                        onChange={getInputValue}
                    />                                    
                </div>
                {inputValue? 
                    <div className="absolute flex inset-y-0 right-0 pr-3 items-center cursor-pointer" onClick={() => {setInputValue('')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>                        
                    </div>
                : ''}                
            </div>
            <button type='submit' className='bg-primary text-white py-3 px-8 rounded-[5px] ml-2'>Search</button>
        </div>            
    )
}

export default Search