import React from 'react'
import { ShoppingBag } from 'lucide-react';
import { Search } from 'lucide-react';
const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white text-gray-800'>
        <ul className='flex space-x-4 font-medium cursor-pointer'>
            <li>Ofertas</li>
            <li>Novidades</li>
            {/* <li>
                <select name="collections" id="collections" className='border-none cursor-pointer'>
                    <option value="spring">Moda</option>
                    <option value="summer">Verão</option>
                    <option value="fall">Outono</option>
                    <option value="winter">Inverno</option>
                </select>
            </li> */}
            <li>Feminino</li>
            <li>Masculino</li>
        </ul>
        <div className='text-2xl font-semibold uppercase -tracking-tighter'>Store</div>
        <div className='flex space-x-4'>
            <button className='hover:text-blue-500 cursor-pointer font-medium'>Pesquisar <Search size={22} className='inline-block mr-2' /></button>
            <button className='hover:text-blue-500 cursor-pointer font-medium'>Carrinho <ShoppingBag size={22} className='inline-block mr-2' /></button>
            <button className='border border-gray-800 px-2 py-1 rounded hover:bg-gray-800 hover:text-white cursor-pointer font-medium'>Entrar</button>
        </div>
    </div>
  )
}

export default Header