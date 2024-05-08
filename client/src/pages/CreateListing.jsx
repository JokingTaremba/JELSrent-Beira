import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Criar Listagem</h1>

        <form className='flex flex-col sm:flex-row gap-4'>

            <div className='flex flex-col gap-4 flex-1'>
                <input type="text" placeholder='Nome' className='border p-3 rounded-lg' 
                id='name' maxLength='62' minLength={5} required />

                <textarea type="text" placeholder='Descrição' className='border p-3 rounded-lg' 
                id='description' required />

                <input type="text" placeholder='Endereço' className='border p-3 rounded-lg' 
                id='address' required />

                <div className='flex gap-6 flex-wrap'>

                    <div className='flex gap-2'>
                        <input type="checkbox"  id='sale' className='w-5'/>
                        <span>Venda</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox"  id='rent' className='w-5'/>
                        <span>Aluguel</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox"  id='parking' className='w-5'/>
                        <span>Vaga de estacionamento</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox"  id='furnished' className='w-5'/>
                        <span>Mobiliada</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox"  id='offer' className='w-5'/>
                        <span>Oferta</span>
                    </div>

                </div>

                <div className='flex flex-wrap gap-6'>
                    <div className='flex items-center gap-2'>
                        <input type="number" id='bedrooms' min='1' max='10' required 
                        className='p-3 border border-gray-300 rounded-lg'/>
                        <p>Quartos</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input type="number" id='bathrooms' min='1' max='10' required 
                        className='p-3 border border-gray-300 rounded-lg'/>
                        <p>Quartos de banho</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input type="number" id='regularPrice' min='1' max='10' required 
                        className='p-3 border border-gray-300 rounded-lg'/>

                        <div className='flex flex-col items-center'>
                            <p>Preço regular</p>
                            <span className='text-xs'>(MZn/ mensal)</span>
                        </div>
                        
                    </div>

                    <div className='flex items-center gap-2'>
                        <input type="number" id='discountPrice' min='1' max='10' required 
                        className='p-3 border border-gray-300 rounded-lg'/>

                        <div className='flex flex-col items-center'>
                            <p>Preço com desconto</p>
                            <span className='text-xs'>(MZn/ mensal)</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Imagens: 
                <span className='font-normal text-gray-600 ml-2'>A primeira imagem será a capa (max 6)</span>
                </p>

                <div className='flex gap-4'>
                    <input className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple/>
                    <button className='p-3 text-green-700 border border-green-700
                    rounded uppercase hover:shadow-lg disabled:opacity-80'>Carregar</button>
                </div>

                <button className='p-3 bg-slate-700 text-white rounded-lg
                    uppercase hover:opacity-95 disabled:opacity-80'>Criar Listagem</button>

            </div>
            
        </form>
    </main>
  )
}
