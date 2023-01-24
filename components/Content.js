import React, { useState } from 'react'
import Search from './Search'
import Results from './Results'

function Content() {

    const [tab, setTab] = useState('all')

    const changeTab = (event) => {
        if (tab === 'all' && event.target.id === 'favorites') {
            setTab('favorites')
        } else if (tab === 'favorites' && event.target.id === 'all') {
            setTab('all')
        }
    }

    return (
        <div className="bg-white p-[40px] rounded-lg w-full min-h-screen">
            <div className='flex w-full mb-6 relative'>
                <div className='flex justify-between w-full'>         
                    <div className='flex'>
                        <p className={`text-xl mr-3 border-b-4 pb-2 px-2 ${tab === 'all' ? `border-blue-400 z-10 text-blue-400` : ''} cursor-pointer`} onClick={changeTab} id='all'>
                            All Students
                        </p>    
                        <p className={`text-xl ml-3 border-b-4 pb-2 px-2 ${tab === 'favorites' ? `border-blue-400 z-10 text-blue-400` : ''} cursor-pointer`} onClick={changeTab} id='favorites'>
                            Favorites
                        </p>                      
                    </div>
                    <p className='text-sm text-gray-500 pb-2'>Showing 10 of 100 results</p>                     
                </div>
                <div className='flex border w-full absolute bottom-0 border-b-[3px]'/>
            </div>
            <Search/>
            <Results activeTab={tab}/>
        </div>
    )
}

export default Content