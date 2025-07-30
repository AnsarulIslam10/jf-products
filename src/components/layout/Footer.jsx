import logo from "../../assets/jf logo.png";
// react icons
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "../common/Button";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#002B55] rounded-3xl overflow-hidden">
        {/* Radial glow effect at bottom-left */}
        <div
          className="absolute -bottom-20 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(27,127,225) 0%, transparent 90%)",
          }}
        />

        <div className="relative z-10 shadow-md w-full p-6 md:p-9 max-w-7xl mx-auto mt-[100px]">
          <div className="flex justify-between gap-[30px] flex-wrap w-full mt-[104px]">
            <div>
              <h3 className="text-[32px] text-white font-medium mb-2">
                Join Our JF Products
              </h3>
              <p className="text-gray-200 mb-10 text-xl">
                We’ll tell you about store updates and discounts
              </p>
              <div className="flex gap-[2px] flex-col text-[#424242] relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-[#ffffff25] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-400 transition-shadow mb-6"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p className="text-gray-400 text-lg">
                    Yes, subscribe me to your newsletter.
                  </p>
                </div>
                <button className="w-full py-4 bg-white rounded-full mt-10 text-xl font-medium">
                  Join Us
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-[32px] text-white font-medium mb-2">
                Information
              </h3>
              <div className="flex text-black flex-col gap-[10px] space-y-[30px] mt-10">
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  Home
                </p>
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  Shop
                </p>
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  Our Story
                </p>
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  Blogs
                </p>
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  Contact
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[32px] text-white font-medium mb-2">
                Helpful
              </h3>
              <div className="flex text-black flex-col gap-[10px] space-y-[30px] mt-10">
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  FAQs
                </p>
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  Terms & Conditions
                </p>
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  Privacy Policy
                </p>
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  Shipping Policy
                </p>
                <p className="text-xl text-gray-200 cursor-pointer transition-all duration-200">
                  My Account
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-[134px] mb-[120px]">
            <div className="flex items-center gap-[49.9px] text-white">
              <img className="h-[150px]" src={logo} alt="JF Logo" />
              <div>
                <h3 className="text-xl font-semibold">Our Branches</h3>
                <p className="text-xl font-light text-gray-300">
                  Coimbatore, Chennai, Hyderabad, Goa, Kochi
                </p>
              </div>
            </div>
            <Button
              width="w-[130px] sm:w-[140px] md:w-[150px]"
              height="h-[45px] sm:h-[48px] md:h-[50px]"
              textSize="text-sm sm:text-base md:text-lg"
              text="Contact Us"
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </footer>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-[30px] flex items-center sm:justify-between w-full flex-wrap gap-[20px] justify-center">
          <p className="text-xl text-center sm:text-left">
            Copyright © 2025 JF Products. All rights reserved
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="p-4 bg-[#F2F4F6] rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="p-4 bg-[#F2F4F6] rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="p-4 bg-[#F2F4F6] rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
