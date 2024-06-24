import { Map } from 'lucide-react'

export default function Mapa() {
  return (
    <main className="flex flex-col p-2 w-full h-full">
      <section
        className="w-full h-full font-[inter] flex flex-col gap-2 bg-white p-4 rounded-2xl"
      >
        <h1 className="p-3 flex gap-2 items-center font-bold text-2xl text-zinc-950">
          <Map size={32} />
          Mapa do Estoque
        </h1>
      </section>
    </main>
  )
}