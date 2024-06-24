/* eslint-disable react/prop-types */
export default function NavLink(props) {
  return (
    <a
      href={`${props.link}`}
      className="
      group w-full px-3 py-2 rounded-full text-zinc-900 hover:bg-[#32eb2c3a] hover:text-[#3c703a]
      ease-in duration-100 flex gap-4 items-center text-lg"
      >
      <span>{props.icon}</span>
      <p
        className="font-[inter] font-semibold group-hover:text-[#234b22] duration-100 ease-in"
        >
        {props.name}
      </p>
    </a>
  )
}