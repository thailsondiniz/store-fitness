import React from 'react'
import { SlidersHorizontal } from 'lucide-react';
import NewProducts from './NewProducts';
const News = () => {
    const products = [
  {
    image: "https://images.pexels.com/photos/28223475/pexels-photo-28223475.jpeg",
    name: "Blusas",
  },
  {
    image: "https://images.pexels.com/photos/6626754/pexels-photo-6626754.jpeg",
    name: "Calças",
  },
  {
    image: "https://images.pexels.com/photos/5840464/pexels-photo-5840464.jpeg",
    name: "Moletons",
  },
  {
    image: "https://images.pexels.com/photos/10919367/pexels-photo-10919367.jpeg",
    name: "Calçados",
  }
]
    return (
        <div className='w-full py-16 px-8'>
            <div className='flex justify-between'>
                <h2 className='text-2xl'>Novidades</h2>
                <SlidersHorizontal size={20} className='cursor-pointer'/>
            </div>
            <div className='flex flex-col items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
                {products.map((product, index) => (
                    <NewProducts key={index} {...product} />
                ))}
            </div>
            </div>
        </div>
    )
}

export default News