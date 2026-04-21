import React from 'react'
import { SlidersHorizontal } from 'lucide-react';
import Product from './Product';
const MenProducts = () => {
    const products = [
  {
    image: "https://images.pexels.com/photos/27098844/pexels-photo-27098844.jpeg",
    name: "Camiseta Fitness Dry Fit",
    price: 89.90,
    colors: ["#c984b7", "#3b82f6", "#680a66"]
  },
  {
    image: "https://images.pexels.com/photos/6075883/pexels-photo-6075883.jpeg",
    name: "Legging Compressão",
    price: 129.90,
    colors: ["#f97316", "#6b7280", "#000000"]
  },
  {
    image: "https://images.pexels.com/photos/5140797/pexels-photo-5140797.jpeg",
    name: "Top Esportivo",
    price: 69.90,
    colors: ["#000000", "#52064f", "#de8ede"]
  },
  {
    image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
    name: "Shorts Treino",
    price: 79.90,
    colors: ["#7a7a7a", "#450000", "#eab308"]
  }
]
    return (
        <div className='w-full py-16 px-8'>
            <div className='flex justify-between'>
                <h2 className='text-2xl'>Roupas Masculinas</h2>
                <SlidersHorizontal size={20} className='cursor-pointer'/>
            </div>
            <div className='flex flex-col items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
            <button className='mt-8 px-4 py-2 border border-black text-black cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 text-[15px]'>Ver Todos</button>
            </div>
        </div>
    )
}

export default MenProducts