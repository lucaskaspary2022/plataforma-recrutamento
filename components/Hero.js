import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
// import logo from '../assets/logo.png'
import { useState } from 'react'

function Hero() {

    const [search, setSearch] = useState(true)

    const changeTab = () => {
        setSearch(!search)
    }

    return (
        <div className='flex justify-center items-center bg-primary flex-col p-[50px] h-screen'>
            <div className='flex justify-center items-center flex-col text-white pt-20'>
                {/* <Image alt='BRASA Connect logo' src={logo} width={520}/>         */}
            </div>
            <p className='font-poppins text-[18px] text-white mb-20 text-center'>A MAIOR CONFERENCIA DE BRASILIEROS NA FLÓRIDA</p>
            <div className='flex'>
                <div className={`${ search ? `bg-white text-black` : `bg-secondary text-white` } py-2 px-6 mr-1 rounded-t-[5px] cursor-pointer`} onClick={changeTab}>
                    <p>Pesquisar</p>
                </div>
                <div className={`${ search ? `bg-secondary text-white` : `bg-white text-black` } text-white py-2 px-6 ml-1 rounded-t-[5px] cursor-pointer`} onClick={changeTab}>
                    <p>Filtrar</p>
                </div>
            </div>
            <div className='flex items-center justify-center relative'>
                <form className='flex justify-center items-center p-4 w-full rounded-[5px] md:w-[850px] ss:w-full bg-white'>
                {search ? 
                    <div className='flex relative w-full'>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <div className='flex border rounded-[5px] border-gray-300 w-full'>
                            <input className='rounded-[5px] pr-2 py-2 pl-10 border-gray-400 outline-none w-full' type='search' autoComplete='off' placeholder='Search' autoFocus={false}/>                                    
                        </div>
                        <button type='submit' className='bg-primary text-white py-3 px-8 rounded-[5px] ml-2'>Pesquisar</button>     
                    </div>
                :
                    // <div className='py-6'>
                    //     <div className='absolute w-full h-[500px] bg-secondary top-0 left-0 opacity-25'>
                    //         <select>
                    //             <option>Ovoo</option>
                    //         </select>
                    //     </div>
                    // </div>
                    <div className='flex justify-between'>
                        <div className='flex relative'>                            
                            <span className='absolute left-0 flex h-full top-0 justify-center items-center px-3 rounded-r-[4px] pointer-events-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>                                   
                            </span>
                            <select className='border py-[11px] pr-[15px] pl-[40px] rounded-[4px] appearance-none cursor-pointer border-solid'>
                                <option disabled>Faculdade</option>
                                <option>University of South Florida</option>
                            </select>
                        </div>
                        <div className='flex relative'>                            
                            <span className='absolute left-0 flex h-full top-0 justify-center items-center px-3 rounded-r-[4px] pointer-events-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>                                   
                            </span>
                            <select className='border py-[11px] pr-[15px] pl-[40px] rounded-[4px] appearance-none cursor-pointer border-solid'>
                                <option disabled>Major</option>
                                <option>Computer Science</option>
                                <option>Business</option>
                            </select>
                        </div>
                        <div className='flex relative'>                            
                            <span className='absolute left-0 flex h-full top-0 justify-center items-center px-3 rounded-r-[4px] pointer-events-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>                                   
                            </span>
                            <select className='border py-[11px] pr-[15px] pl-[40px] rounded-[4px] appearance-none cursor-pointer border-solid'>
                                <option disabled>Estado</option>
                                <option>Florida</option>
                            </select>
                        </div>
                    </div>
                }       
                </form>                
            </div>
        </div>
    )
}

export default Hero