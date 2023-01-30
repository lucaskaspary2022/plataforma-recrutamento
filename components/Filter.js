import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import MultiSelect from './MultiSelect'

function Filter({ selectedStates }) {

    // const [dropdownState, setDropdownState] = useState(false)

    const [colleges, setColleges] = useState([
        'University of South Florida',
        'Harvard University',
        'Columbia University',
        'Massachussets Institute of Technology'
    ])

    const [states, setStates] = useState([
        'Florida',
        'Massachussets',
        'New York',
        'California'
    ])

    const [majors, setMajors] = useState([
        'Computer Science',
        'Business',
        'Computer Engineering',
        'Finance',
        'Economics'
    ])

    // const closeDropdown = () => {
    //     setDropdownState(false)
    // }

    // useEffect(() => {
    //     document.body.addEventListener
    // })

    return (
        <div className='bg-white px-5 py-[40px] rounded-lg mr-8'>
            <p className='text-xl'>Filter Options</p>
            <form className=''>                
                <div className='flex flex-col my-6'>
                    <div className='flex mb-2'>
                        <div className='flex justify-center items-center mr-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <p className='text-lg'>State</p>                    
                    </div>
                    <MultiSelect itemsList={states} selected={selectedStates}/>
                </div>
                <div className='flex flex-col my-6'>
                    <div className='flex mb-2'>
                        <div className='flex justify-center items-center mr-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>                        
                        </div>
                        <p className='text-lg'>Universities</p>                    
                    </div>
                    {/* <div className='flex relative'>                            
                        <span className='absolute left-0 flex h-full top-0 justify-center items-center px-3 rounded-r-[4px] pointer-events-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>                                   
                        </span>
                        <select className='border py-[11px] pr-[15px] pl-[40px] rounded-[4px] appearance-none cursor-pointer border-solid'> 
                            <option disabled>University</option>
                            <option>University of South Florida</option>
                        </select>
                    </div> */}
                    {/* <Select options={options}/>              */}
                    <MultiSelect itemsList={colleges}/>
                </div>
                <div className='flex flex-col my-6'>
                    <div className='flex mb-2'>
                        <div className='flex justify-center items-center mr-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                        </div>
                        <p className='text-lg'>Major</p>                    
                    </div>
                    <MultiSelect itemsList={majors}/>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='py-3 px-8 rounded-[5px] text-gray-500 hover:bg-gray-100 mr-2'>Cancel</button>
                    <button type='submit' className='bg-primary text-white py-3 px-8 rounded-[5px] ml-2'>Apply Filters</button>                    
                </div>
            </form>
        </div>
    )
}

export default Filter