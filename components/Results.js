import React, { useState } from 'react'

function Results({ activeTab, results }) {

    const [user, setUser] = useState({
        favorites: [1, 5]
    })

    const toggleFavorite = (person) => {
        if (user.favorites.includes(person.id) == false) {
            user.favorites.push(person.id)
        } else {
            let index = user.favorites.indexOf(person.id)
            user.favorites.splice(index, 1)
        }
    }

    return (
        <div className='my-6 w-full'>
            <div className='overflow-hidden rounded-lg'>
                <table className='w-full'>
                    <thead className='bg-slate-100'>
                        <tr>
                            <th className='px-6 py-4 text-md uppercase text-left text-gray-800'>Name</th>
                            <th className='px-6 py-4 text-md uppercase text-left text-gray-800'>Major</th>
                            <th className='px-6 py-4 text-md uppercase text-left text-gray-800'>University</th>
                            <th className='px-6 py-4 text-md uppercase text-left text-gray-800'>Info</th>
                        </tr>                      
                    </thead>
                    <tbody className='divide-y divide-slate-100'>
                        {
                            activeTab == 'all' ?
                            results.map((person, key) => {
                                return (
                                    <tr className=' p-3' key={key}>
                                        <td className='px-6 py-5 text-md text-gray-700'>{person.name}</td>
                                        <td className='px-6 py-5 text-md text-gray-700'>{person.major}</td>
                                        <td className='px-6 py-5 text-md text-gray-700'>{person.school}</td>
                                        <td className='flex items-center px-6 py-5 text-md text-gray-700'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black cursor-pointer">
                                                <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black cursor-pointer mx-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                            {
                                                user.favorites.includes(person.id) ? 
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 cursor-pointer" onClick={() => {toggleFavorite(person)}}>
                                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                    </svg>
                                                :
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500 cursor-pointer" onClick={() => {toggleFavorite(person)}}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>  
                                            }
                                        </td>
                                    </tr>   
                                );
                            })
                            : 
                            results.map((person, key) => {
                                
                                if (user.favorites.includes(person.id)) {
                                    return (
                                        <tr className=' p-3' key={key}>
                                            <td className='px-6 py-5 text-md text-gray-700'>{person.name}</td>
                                            <td className='px-6 py-5 text-md text-gray-700'>{person.major}</td>
                                            <td className='px-6 py-5 text-md text-gray-700'>{person.school}</td>
                                            <td className='flex items-center px-6 py-5 text-md text-gray-700'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black cursor-pointer">
                                                    <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black cursor-pointer mx-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 cursor-pointer">
                                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                </svg>                                            
                                            </td>
                                        </tr>  
                                    );                                    
                                }
                            })
                        }
                    </tbody>
                </table>            
            </div>
        </div>
    )
}

export default Results