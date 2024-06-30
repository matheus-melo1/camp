import { X, Map } from 'lucide-react'
import Box from './box'
import { useState, useEffect } from 'react'
import data from './estoque.json';
import './scrollbar.css';

export default function Mapa() {
  const [sidebar, setSidebar] = useState(false);
  const [dataf, setDataf] = useState([]);

  const filter = (estante) => {
    const filtrado = data.filter(item => item.estante === estante);
    setDataf(filtrado);
  }

  const ToggleSide = () => setSidebar(!sidebar);

  return (
    <main className="flex flex-col p-2 w-full h-full">
      {sidebar && <div className='z-30 w-screen h-full bg-black/50 absolute left-0 top-0'></div>}
      
      {sidebar && <div
        className="animate-estante z-30 flex flex-col pl-6 pb-6 pr-6 overflow-y-scroll text-xl rounded-s-xl bg-zinc-100 shadow-2xl w-[450px] h-full absolute right-0 top-0">
          <div className='flex justify-between sticky top-0 bg-zinc-100 w-full py-4'>
            <h1 className='font-bold text-2xl mb-5'>Estante</h1>
            <X onClick={() => setSidebar(!sidebar)} className='cursor-pointer p-2' size={42} />
          </div>
          <ul className='flex flex-col gap-2'>
            {dataf.map((item, i) => (
              <li
                className='text-zinc-800 border-b-2 border-zinc-300 pb-2 flex justify-between gap-1 w-full' key={i}>
                <p>{item.Itens}</p>
                <p className='font-semibold'>{item.Unidades}</p>
              </li>
            ))}
          </ul>
      </div>}

      <section
        className="w-full h-full font-sans flex flex-col gap-8 bg-white p-4 rounded-2xl"
      >
        <h1 className="p-3 flex gap-2 items-center font-bold text-2xl text-zinc-950">
          <Map size={32} />
          Mapa do Estoque
        </h1>
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-8 p-4 rounded-xl border-2 border-[#ddd]">
          <Box func={() => {
            filter('estante1');
            ToggleSide();
          }} 
          title={'Estante 1'}
          img={'https://static.vecteezy.com/system/resources/previews/030/722/566/non_2x/macro-image-of-a-processor-or-a-graphic-card-technological-device-storing-memory-hardware-close-up-neon-led-lights-generative-ai-technology-free-photo.jpg'}
          name={'Hardware'}
          />

          <Box func={() => {
            filter('estante2');
            ToggleSide();
          }}
          title={'Estante 2'}
          img={'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          name={'Equipamento de Rede'}
          />

          <Box func={() => {
            filter('estante3');
            ToggleSide();
          }}
          title={'Estante 3'}
          img={'https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          name={'Cabos e Conectores'}
          />

          <Box func={() => {
            filter('estante4');
            ToggleSide();
          }}
          title={'Estante 4'}
          img={'https://images.unsplash.com/photo-1625886390251-01af1ea39853?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          name={'Armazenamento'}
          />

          <Box func={() => {
            filter('estante5');
            ToggleSide();
          }}
          title={'Estante 5'}
          img={'https://images.unsplash.com/photo-1548382913-c90e82639a02?q=80&w=2149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          name={'Acessórios e Periféricos'}
          />

          <Box func={() => {
            filter('estante6');
            ToggleSide();
          }}
          title={'Estante 6'}
          img={'https://images.unsplash.com/photo-1623177579213-7efd042e73c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          name={'Mobiliário e Organização'}
          />

          <Box func={() => {
            filter('estante7');
            ToggleSide();
          }}
          title={'Estante 7'}
          img={'https://images.unsplash.com/photo-1549109926-58f039549485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          name={'Equipamentos Segurança'}
          />

          <Box func={() => {
            filter('estante8');
            ToggleSide();
          }}
          title={'Estante 8'}
          img={'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          name={'Produtos de Limpeza'}
          />

          <Box func={() => {
            filter('estante9');
            ToggleSide();
          }}
          title={'Estante 9'}
          img={'https://images.unsplash.com/photo-1549563316-5384a923453e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          name={'Equipamentos Adicionais'}
          />
        </div>
      </section>
    </main>
  )
}