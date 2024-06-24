/* eslint-disable react/prop-types */
export default function Cols(props) {
  return (
    <p className="p-3 flex gap-2 justify-center">
      <span>{props.icon}</span>
      <span>{props.name}</span>
    </p>
  )
}