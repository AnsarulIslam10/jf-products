import { BiTrophy } from "react-icons/bi";
import face from "../../assets/face.png";
import trophy from "../../assets/trophy.png";
import truck from "../../assets/truck.png";

export default function Trusted() {
  return (
    <div className="relative max-w-7xl mx-auto bg-[#002B55] text-white mt-[100px] rounded-3xl overflow-hidden">
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[497px] h-[497px] rounded-full bg-[radial-gradient(circle,_rgba(27,127,225,0.4)_0%,_transparent_90%)] blur-2xl pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-medium text-center pt-20">
          Trusted by over 6K+ customers
        </h2>

        <div className="flex flex-wrap justify-around gap-y-10 mt-[50px] pb-20 px-4 sm:px-10">
          {/* Card 1 */}
          <div className="flex items-center gap-4 min-w-[250px]">
            <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center rounded-full shrink-0">
              <img src={trophy} alt="" className="w-8 sm:w-10" />
            </div>
            <div>
              <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-medium">Premium</h3>
              <p className="text-[18px] sm:text-[20px] md:text-[22px]">Products</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 min-w-[250px]">
            <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center rounded-full shrink-0">
              <img src={face} alt="" className="w-8 sm:w-10" />
            </div>
            <div>
              <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-medium">4000+</h3>
              <p className="text-[18px] sm:text-[20px] md:text-[22px]">Google Review</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 min-w-[250px]">
            <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center rounded-full shrink-0">
              <img src={truck} alt="" className="w-8 sm:w-10" />
            </div>
            <div>
              <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-medium">Delivery</h3>
              <p className="text-[18px] sm:text-[20px] md:text-[22px]">Across India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
