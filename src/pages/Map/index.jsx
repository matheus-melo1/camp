import { X, Map } from 'lucide-react'
import Box from './box'
import { useState } from 'react'
import data from './estoque.json';
import './com.css'

export default function Mapa() {
  const dataf = data.filter(item => item.estante === "estante1");
  console.log(dataf)

  const box = document.querySelector('#box')
  return (
    <main className="flex flex-col p-2 w-full h-full">
      {/* <div id='box'
        className="p-6 text-xl rounded-xl bg-zinc-100 shadow-2xl w-[450px] h-[600px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <h1 className='font-bold text-2xl mb-3'>Estante</h1>
          <X onClick={() => box.classList.add('none')} className='absolute right-4 top-4 cursor-pointer p-2' size={24} />
          <ul>
            {dataf.map((item, i) => (
              <li className='text-green-800' key={i}>• {item.Itens}</li>
            ))}
          </ul>
      </div> */}

      <section
        className="w-full h-full font-sans flex flex-col gap-8 bg-white p-4 rounded-2xl"
      >
        <h1 className="p-3 flex gap-2 items-center font-bold text-2xl text-zinc-950">
          <Map size={32} />
          Mapa do Estoque
        </h1>
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-8 p-4 rounded-xl border-2 border-[#ddd]">
          <Box title={'Estante 1'} name={'Hardware'} />
          <Box title={'Estante 2'} name={'Equipamento de Rede'} />
          <Box title={'Estante 3'} name={'Cabos e Conectores'} />
          <Box title={'Estante 4'} name={'Armazenamento'} />
          <Box title={'Estante 5'} name={'Acessórios e Periféricos'} />
          <Box title={'Estante 6'} name={'Mobiliário e Organização'} />
          <Box title={'Estante 7'} name={'Equipamentos Segurança'} />
          <Box title={'Estante 8'} name={'Produtos de Limpeza'} />
          <Box title={'Estante 9'} name={'Equipamentos Adicionais'} />
        </div>
      </section>
    </main>
  )
}