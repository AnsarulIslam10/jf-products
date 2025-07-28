export default function Button({width, height, text = 'text-lg'}) {
  return (
    <>
        <p className={`bg-[#B0DD1D] flex justify-center items-center font-medium py-3 rounded-full ${width} ${height} ${text}`}>Shop Now</p>
    </>
  )
}
