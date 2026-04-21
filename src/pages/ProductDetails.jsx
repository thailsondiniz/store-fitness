import React from 'react'
import { useParams } from 'react-router-dom';
import { mensProducts } from '../data/mensProducts';
import Header from '../components/Header';
const ProductDetails = () => {
    const { id } = useParams();

    const product = mensProducts.find(p => p.id === Number(id));

    if (!product) return <p>Produto não encontrado</p>;

    return (
        <div>
            <Header />
            <div className='w-full mx-auto py-16 px-8 flex items-center'>
                <div className='flex mx-auto bg-white p-8 rounded-lg'>
                    <div className='w-105'>
                        <img src={product.image} alt={product.name} className='w-full h-auto object-cover rounded-lg' />

                    </div>
                    <div className='ml-8 flex flex-col justify-between'>
                        <div className='w-full p-4 rounded-lg flex flex-col gap-4'>
                            <h2 className='text-3xl font-normal'>{product.name}</h2>
                            <div>
                                <p className='text-xl font-medium'>
                                {product.price.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </p>
                            <span className='text-[14px]'>Em até 3x de { (product.price / 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) } sem juros</span>
                            </div>
                            <div className='flex gap-1 mt-2'>
                                {product.colors.map((color, index) => (
                                    <span key={index} style={{ backgroundColor: color }} className="w-5 h-5 rounded-xl cursor-pointer"></span>
                                ))}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[14px]'>Selecione um tamanho:</span>
                            <div className='flex gap-1'>
                                {product.sizes.map((size, index) => (
                                    <span key={index} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded cursor-pointer">{size}</span>
                                ))}
                            </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className='cursor-pointer px-4 py-2 border border-gray-400 text-black rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300'>Adicionar ao Carrinho</button>
                            <button className='cursor-pointer px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300'>Comprar Agora</button>
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <div className='flex justify-between'>
                                    <span>Entregar para:</span>
                                    <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer" className='text-[12px] underline'>Não sei meu CEP</a>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <input type="number" placeholder='00000-000' className='w-full p-2 border-l border-t border-b border-gray-300 rounded-l-xl' />
                                    <button className='cursor-pointer px-4 py-2 bg-black text-white rounded-r-xl hover:bg-gray-800 transition-colors duration-300 border-t border-b border-black border-r'>Calcular</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ProductDetails