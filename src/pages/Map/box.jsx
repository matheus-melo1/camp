export default function Box(props) {
  return (
    <div
      className="p-6 text-xl border-2 border-[#ddd] rounded-lg flex flex-col gap-1 items-center justify-center
      hover:bg-zinc-300/20 ease-in duration-100 cursor-pointer
      ">
      <p className="font-semibold">{props.title}</p>
      <p>{props.name}</p>
    </div>
  )
}