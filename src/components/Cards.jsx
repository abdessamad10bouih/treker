import React from 'react'

function Cards({mainText, recomendation}) {
    return (
        <div className='w-[300px] relative h-[50vh] bg-secondary/60 rounded-xl flex items-center justify-center'>
            <p className='text-primary text-sm w-52'>
                {mainText}
            </p>
            <div className='w-[100px] h-[70px] flex justify-center items-center text-white absolute bg-primary rounded-full -top-10 -right-8'>
                <h1 className='text-center text-xs'>{recomendation}</h1>
            </div>
        </div>
    )
}

export default Cards