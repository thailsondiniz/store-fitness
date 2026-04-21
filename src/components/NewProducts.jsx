import React from 'react'
const NewProducts = ({ image, name,}) => {
    return (
        <div className='cursor-pointer flex flex-col relative hover:scale-105 transition-transform duration-300'>
            <img src={image} alt={name} className='w-full h-auto' />
            <h3 className='font-semibold text-white text-3xl flex flex-col items-center absolute bottom-15 left-1/2 transform -translate-x-1/2 z-10'>{name}</h3>
        </div>
    )
}

export default NewProducts