/* eslint-disable react/prop-types */
export default function Row(props) {
  return (
    <p className="p-3 flex gap-2 justify-center">
      {props.name}
    </p>
  )
}