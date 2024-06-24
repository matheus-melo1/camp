import { Package, Search, Box, ArrowUpNarrowWide, Boxes } from 'lucide-react';
import Cols from './cols'
import Row from './row'
import { useState } from 'react';
import data from './estoque.json';

export default function Table() {
  // const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const searchCase = search.toLowerCase();
  const dataFilter = data.filter(data => data.Itens.toLowerCase().includes(searchCase));
  
  return (
    <section className="w-full h-full font-sans flex flex-col gap-2 bg-white p-4 rounded-2xl overflow-hidden">
      <h1 className="p-3 flex gap-2 items-center font-bold text-2xl text-zinc-950">
        <Package size={32} />
        Estoque
      </h1>
      <div className="w-full h-full rounded-3xl p-2 flex flex-col gap-4">
        <form className="relative" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Pesquisar" onChange={(e) => setSearch(e.target.value)}
            className="
              w-full p-2 border-[#ddd] border-2 rounded-xl bg-transparent text-black pl-10
              outline-none focus:border-zinc-800 duration-100 ease-in
            "
          />
          <button className="absolute left-2 top-2/4 -translate-y-2/4 text-black" type="submit">
            <Search strokeWidth={1.5} />
          </button>
        </form>

        <div className="w-full h-full border-[#ddd] border-2 rounded-lg">
          <div className="w-full h-full text-black flex flex-col items-center gap-2 overflow-y-auto">
            <div className="w-full grid grid-cols-3 font-bold border-[#ddd] border-b-2 sticky top-0 bg-white">
              <Cols icon={<Box strokeWidth={1.5} />} name={'Item'} />
              <Cols icon={<ArrowUpNarrowWide strokeWidth={1.5} />} name={'Quantidade'} />
              <Cols icon={<Boxes strokeWidth={1.5} />} name={'Valor p/ unidade'} />
            </div>
            {dataFilter.map((data, i) => (
              <div key={i} className="w-full grid grid-cols-3 border-[#ddd] border-b-2">
                <Row name={data.Itens} />
                <Row name={data.Unidades} />
                <Row name={data['Valor p/ unidade']} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}