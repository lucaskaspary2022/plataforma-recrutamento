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

    const [results, setResults] = useState([
        {id: 1, name: 'Lucas Kaspary', major: 'Computer Science', school: 'University of South Florida'},
        {id: 2, name: 'Eloy Ballestros', major: 'Computer Science', school: 'University of South Florida'},
        {id: 3, name: 'Matheus David', major: 'Computer Engineering', school: 'University of South Florida'},
        {id: 4, name: 'Matheus Santos', major: 'Computer Science', school: 'Georgia Institute of Technology'},
        {id: 5, name: 'Lionel Messi', major: 'Mechanical Engineering', school: 'Harvard University'},
        {id: 6, name: 'Cristiano Ronaldo', major: 'Business Administration', school: 'Columbia University'},
        {id: 7, name: 'Neymar Jr', major: 'Business Administration', school: 'Massachussets Institute of Technology'},
        {id: 8, name: 'Erling Haaland', major: 'Electrical Engineering', school: 'Tufts University'},
        {id: 9, name: 'Kevin De Bruyne', major: 'Economics', school: 'New York University'},
        {id: 10, name: 'Robert Lewandowski', major: 'Finance', school: 'University of Toronto'}
    ])

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
                    <p className='text-sm text-gray-500 pb-2'>Showing 10 of {results.length} results</p>                     
                </div>
                <div className='flex border w-full absolute bottom-0 border-b-[3px]'/>
            </div>
            <Search/>
            <Results activeTab={tab} results={results}/>
        </div>
    )
}

export default Content