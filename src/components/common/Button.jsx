export default function Button({ width, height, textSize = "text-lg", text }) {
  return (
    <>
      <p
        className={`bg-[#B0DD1D] flex justify-center items-center font-medium py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl ${width} ${height} ${textSize}`}
      >
        {text}
      </p>
    </>
  );
}
