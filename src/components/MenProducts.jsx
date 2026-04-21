import React from 'react'
import { SlidersHorizontal } from 'lucide-react';
import Product from './Product';
import { mensProducts } from '../data/mensProducts';
const MenProducts = () => {
    return (
        <div className='w-full py-16 px-8'>
            <div className='flex justify-between'>
                <h2 className='text-2xl'>Roupas Masculinas</h2>
                <SlidersHorizontal size={20} className='cursor-pointer'/>
            </div>
            <div className='flex flex-col items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
                {mensProducts.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <button className='mt-8 px-4 py-2 border border-black text-black cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 text-[15px]'>Ver Todos</button>
            </div>
        </div>
    )
}

export default MenProducts