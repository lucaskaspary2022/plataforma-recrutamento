import React, { useState } from 'react'

function Progress({ year }) {

    const [yearToWidth, setYearToWidth] = useState(['w-[115px]', 'w-[255px]', 'w-[350px]', 'w-full'])

    return (
        <div className='w-full'>
            <div className='flex bg-[#CBCBCB] h-4 rounded-full w-full'>
                {/* <div className='h-4 rounded-full'/> */}
                <div className={`h-4 rounded-full ${yearToWidth[year - 1]} bg-gradient-to-r from-[#0288D1] via-[#D1C530] to-[#7CB342]`}/>
            </div>
        </div>
    )
}

export default Progress