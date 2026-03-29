import React from 'react'
import { ShoppingBag } from 'lucide-react';
import { Search } from 'lucide-react';
const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white text-gray-800'>
        <ul className='flex space-x-4 font-medium cursor-pointer'>
            <li>Women</li>
            <li>Men</li>
            <li>
                <select name="collections" id="collections" className='border-none cursor-pointer'>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                </select>
            </li>
            <li>About</li>
        </ul>
        <div className='text-2xl font-semibold uppercase -tracking-tighter'>Store</div>
        <div className='flex space-x-4'>
            <button className='hover:text-blue-500 cursor-pointer font-medium'>Search <Search size={22} className='inline-block mr-2' /></button>
            <button className='hover:text-blue-500 cursor-pointer font-medium'>Cart <ShoppingBag size={22} className='inline-block mr-2' /></button>
            <button className='border border-gray-800 px-2 py-1 rounded hover:bg-gray-800 hover:text-white cursor-pointer font-medium'>Log in</button>
        </div>
    </div>
  )
}

export default Header