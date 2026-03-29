import React from 'react'
import { Heart } from 'lucide-react';
const Product = ({ image, name, price, colors }) => {
    return (
        <div className='cursor-pointer flex flex-col relative hover:scale-105 transition-transform duration-300'>
            <button className='absolute top-2 right-2 p-1 rounded-full hover:bg-gray-400 cursor-pointer'>
                <Heart size={18} className='text-white' />
            </button>
            <img src={image} alt={name} className='w-full h-auto' />
            <h3 className='font-medium text-gray-800 mt-2'>{name}</h3>
            <p className='font-medium'>
                {price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </p>
            <div className='flex gap-1 mt-2'>
                {colors.map((color, index) => (
                    <span key={index} style={{ backgroundColor: color }} className="w-2.5 h-2.5 rounded-full cursor-pointer"></span>
                ))}
            </div>
        </div>
    )
}

export default Product