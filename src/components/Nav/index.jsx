import { NotepadText, Package, Map } from 'lucide-react'
import NavLink from './NavLink'

export default function Nav() {
  const size = 32;
  const img = 'https://www.soluciona.com.br/wp-content/uploads/2020/03/soluciona-2.png';
  return (
    <nav className="w-[290px] p-3 h-screen flex flex-col items-start justify-start gap-3">
      <div className="w-[200px] mb-4">
        <img className="w-full h-full " src={img} alt="" />
      </div>
      <div className="flex flex-col items-start justify-center rounded-xl gap-2 w-full">
        <NavLink link={'/'} icon={<Package size={size} strokeWidth={1.5} />} name={'Estoque'} />
        <NavLink link={'/Mapa'} icon={<Map size={size} strokeWidth={1.5} />} name={'Mapa Estoque'} />
      </div>
    </nav>
  )
}