import React, { useState } from 'react'
import Headshot from '../assets/headshot.jpeg'
import Image from 'next/image'
import { FiEdit } from 'react-icons/fi';
import { FaMale } from 'react-icons/fa'
import Bull from '../assets/bull.jpeg'
import Progress from '@/components/Progress';

function Profile() {

    const [progress, setProgress] = useState(1) // college year passed to the progress bar

    return (
        <div className='bg-primary h-screen'>
            <nav className='text-white'>Connect</nav>
            <div className='flex justify-center'>
                <div className='flex p-[50px] justify-center items-center'>
                    <div className='flex h-full '>
                        <div className='flex bg-[#EEEEEE] flex-col px-[30px] py-[25px] rounded-3xl'>
                            <div className='relative'>
                                <Image
                                    alt='profile-pic'
                                    className='rounded-3xl'
                                    src={Headshot}
                                    width={450}
                                />
                                <svg width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-4 right-4'>
                                    <path d="M3.04245 8.25C3.04271 6.89248 3.5821 5.59063 4.54201 4.63072C5.50192 3.67081 6.80377 3.13142 8.16129 3.13116H14.7619V0H8.16129C5.98866 0.0236166 3.91303 0.903261 2.38503 2.44796C0.857032 3.99266 0 6.07773 0 8.25049C0 10.4232 0.857032 12.5083 2.38503 14.053C3.91303 15.5977 5.98866 16.4774 8.16129 16.501H14.7619V13.3669H8.16129C6.80411 13.3666 5.50256 12.8275 4.5427 11.868C3.58284 10.9085 3.04323 9.60718 3.04245 8.25ZM9.80876 9.90039H23.0099V6.60058H9.80876V9.90039ZM24.6593 0H18.0588V3.13116H24.6593C26.0167 3.13116 27.3184 3.67036 28.2782 4.63015C29.238 5.58993 29.7772 6.89168 29.7772 8.24903C29.7772 9.60637 29.238 10.9081 28.2782 11.8679C27.3184 12.8277 26.0167 13.3669 24.6593 13.3669H18.0588V16.5019H24.6593C25.7504 16.5138 26.8329 16.3092 27.8443 15.8999C28.8557 15.4905 29.7759 14.8847 30.5515 14.1174C31.3272 13.3501 31.943 12.4366 32.3633 11.4297C32.7836 10.4228 33 9.34254 33 8.25146C33 7.16038 32.7836 6.08014 32.3633 5.07325C31.943 4.06636 31.3272 3.15283 30.5515 2.38552C29.7759 1.61821 28.8557 1.01238 27.8443 0.603068C26.8329 0.193761 25.7504 -0.0108845 24.6593 0.000974854V0Z" fill="white"/>
                                </svg>                        
                            </div>
                            <div className='flex justify-between w-full px-[8px] text-primary font-medium mt-[15px] items-end relative'>
                                <p className='font-poppins text-[26px]'>Lucas dos Santos Kaspary</p>
                                <p className='font-poppins text-secondary font-normal italic text-[20px]'>He/Him</p>
                            </div>
                            <div className='h-[4px] bg-gradient-to-r from-[#0288D1] via-[#D1C530] to-[#7CB342] w-full rounded'/>
                            <div className='bg-secondary w-full mt-[30px] rounded-3xl items-center relative p-[20px] text-xl'>
                                <div className='flex w-full content-center justify-items relative'>
                                    <div className='flex justify-center items-center w-full'>
                                        <p className='flex text-white justify-self-center font-[600] text-[26px]'>Contact Information</p>
                                        <div className='flex absolute right-[12px] top-[0px] justify-end items-center'>
                                            <FiEdit className='text-icon cursor-pointer' size={26}/>
                                        </div>                                
                                    </div>
                                </div>
                                <div className='flex flex-col mt-[10px] text-white p-[10px]'>
                                    <div className='flex flex-col mb-[12px]'>
                                        <p className='text-[26px] ml-[10px]'>lucakaspary@gmail.com</p>
                                        <div className='flex items-center justify-start'> {/* width of the arrows should vary according to the length of each field */}
                                            <div className='h-[3px] bg-[#D2C531] rounded relative w-[300px]'/>
                                            <svg width="10" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-[322px]'>
                                                <path d="M2 1.99994L10 8.8999L2 15.7999" stroke="#D2C531" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>                                           
                                        </div>          
                                    </div>
                                    <div className='flex flex-col mb-[12px]'>
                                        <p className='text-[26px] ml-[10px]'>+1 (813) 585-3057</p>
                                        <div className='flex items-center justify-start'> {/* width of the arrows should vary according to the length of each field */}
                                            <div className='h-[3px] bg-[#7CB342] rounded relative w-[240px]'/>
                                            <svg width="10" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-[262px]'>
                                                <path d="M2 1.99994L10 8.8999L2 15.7999" stroke="#7CB342" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>                                           
                                        </div>          
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[26px] ml-[10px]'>in/lucas-kaspary</p>
                                        <div className='flex items-center justify-start'> {/* width of the arrows should vary according to the length of each field */}
                                            <div className='h-[3px] bg-white rounded relative w-[210px]'/>
                                            <svg width="10" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-[232px]'>
                                                <path d="M2 1.99994L10 8.8999L2 15.7999" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>                                           
                                        </div>          
                                    </div>
                                </div>                     
                            </div>
                        </div>
                        <div className='flex flex-col ml-[80px] h-full justify-between'>
                            <div className='bg-[#EEEEEE] rounded-3xl flex justify-center items-start p-[25px] w-full relative'>
                                <div className='flex flex-col justify-between flex-nowrap w-full z-10 mr-[60px]'>
                                    <div className='flex bg-[#0288D1] rounded-full py-[8px] px-[30px] w-full shadow-card h-full'>
                                        <p className='text-[26px] whitespace-nowrap text-[#10183D]'>Feb 1, 2003</p>
                                    </div>
                                    <div className='flex bg-[#7CB342] rounded-full py-[8px] px-[30px] w-full my-[10px] shadow-card'>
                                        <p className='text-[26px] text-[#10183D]'>Porto Alegre - RS - Brazil</p>
                                    </div>
                                    <div className='flex bg-[#FFE71F] rounded-full py-[8px] px-[30px] w-full shadow-card'>
                                        <p className='text-[26px] text-[#10183D]'>Latino</p> 
                                    </div>
                                </div>
                                <div className='flex justify-center items-center h-full ml-[40px] absolute right-[-100px] bottom-0'>
                                    <FaMale size={220} className='flex z-0 text-[#777777]'/>
                                </div>
                            </div>
                            <div className='bg-white rounded-3xl flex flex-col items-start w-full py-[30px] px-[40px] mt-[30px]'>
                                <div className='flex items-center justify-center'>
                                    <div className='mr-[40px] max-w-[300px]'>
                                        <p className='text-[26px] mb-[25px]'>Computer and Information Sciences</p>
                                        <p className='text-[26px]'>University of South Florida</p> 
                                    </div>
                                    <Image
                                        alt='mascot'
                                        src={Bull}
                                        width={100}                                       
                                    />
                                </div>
                                <div className='w-full mt-[20px]'>
                                    <div className='flex w-full space-between justify-between'>
                                        <p className='text-[26px] mr-[2px]'>Freshman</p>
                                        <p className='text-[26px] text-[#B1B1B1] mr-[2px]'>Sophomore</p>
                                        <p className='text-[26px] text-[#B1B1B1] mr-[2px]'>Junior</p>
                                        <p className='text-[26px] text-[#B1B1B1] mr-[2px]'>Senior</p>
                                    </div>
                                    <Progress year={progress}/>                            
                                </div>
                                <button className='flex justify-center items-center w-full mt-[30px] bg-[#CBCBCB] text-[26px] rounded-full py-[8px] px-[30px]'>
                                    Resume
                                </button>
                            </div>
                        </div>
                    </div>            
                </div>            
            </div>
        </div>
    )
}

export default Profile