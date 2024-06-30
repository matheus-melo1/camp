/* eslint-disable react/prop-types */
export default function Box(props) {
  return (
    <div onClick={props.func}
      className="overflow-hidden relative p-6 text-xl border-2 border-[#ddd] rounded-lg flex flex-col gap-1 items-center justify-center
      hover:bg-zinc-300/20 ease-in duration-100 cursor-pointer
      ">
      <p className="font-semibold z-20 text-white">{props.title}</p>
      <p className="z-20 text-white">{props.name}</p>
      <div className="w-full h-full bg-black/70 z-10 absolute rounded-lg"></div>
      <img className="w-full absolute rounded-lg" src={props.img} alt="" />
    </div>
  )
}