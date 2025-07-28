export default function Button({width, height, textSize = 'text-lg', text}) {
  return (
    <>
        <p className={`bg-[#B0DD1D] flex justify-center items-center font-medium py-3 rounded-full ${width} ${height} ${textSize}`}>{text}</p>
    </>
  )
}
