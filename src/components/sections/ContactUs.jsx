import { useState } from "react";
import chennai from "../../assets/chennai.svg";
import coimbatore from "../../assets/coimbatore.svg";
import goa from "../../assets/goa.svg";
import hydrabad from "../../assets/hydrabad.svg";
import kochi from "../../assets/kochi.svg";
import mumbai from "../../assets/mumbai.svg";
import Button from "../common/Button";

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="mt-[100px] max-w-7xl mx-auto">
      <div className="flex items-center justify-center">
        <ul className="flex items-center rounded-full p-1 relative hidden sm:flex">
          <div
            className={`${
              (activeTab === 1 && "translate-x-[12px]") ||
              (activeTab === 2 && "translate-x-[147px]") ||
              (activeTab === 3 && "translate-x-[277px]") ||
              (activeTab === 4 && "!w-[100px] translate-x-[415px]") ||
              (activeTab === 5 && "!w-[100px] translate-x-[540px]") ||
              (activeTab === 6 && "!w-[100px] translate-x-[670px]")
            } !bg-[rgba(176,221,29,0.25)] absolute !text-[#fff] h-[104px] w-[116px] transition duration-700 rounded-2xl border-transparent cursor-pointer`}
          ></div>
          <li
            className={`${
              activeTab === 1 && " !text-[#fff]"
            } px-6 py-2 dark:text-[#abc2d3] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setActiveTab(1)}
          >
            <img src={coimbatore} alt="" />
          </li>
          <li
            className={`${
              activeTab === 2 && " !text-[#fff]"
            } px-6 py-2 dark:text-[#abc2d3] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setActiveTab(2)}
          >
            <img src={chennai} alt="" />
          </li>
          <li
            className={`${
              activeTab === 3 && " !text-[#fff]"
            } px-6 py-2 dark:text-[#abc2d3] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setActiveTab(3)}
          >
            <img src={hydrabad} alt="" />
          </li>
          <li
            className={`${
              activeTab === 4 && " !text-[#fff]"
            } px-6 py-2 dark:text-[#abc2d3] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setActiveTab(4)}
          >
            <img src={goa} alt="" />
          </li>
          <li
            className={`${
              activeTab === 5 && " !text-[#fff]"
            } px-6 py-2 dark:text-[#abc2d3] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setActiveTab(5)}
          >
            <img src={kochi} alt="" />
          </li>
          <li
            className={`${
              activeTab === 6 && " !text-[#fff]"
            } px-6 py-2 dark:text-[#abc2d3] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setActiveTab(6)}
          >
            <img src={mumbai} alt="" />
          </li>
        </ul>
      </div>

      {/* contact form */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-5 gap-10 lg:gap-10">
        <div className="w-full lg:w-[540px] space-y-6 bg-gradient-to-br from-[#0a193e] to-[#0d2358] rounded-2xl shadow-lg border border-dashed border-gray-600 p-10 sm:p-[50px]">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>

          <form className="space-y-5">
            {/* Your Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#1c2e5a] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-400 transition-shadow"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#1c2e5a] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-400 transition-shadow"
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                placeholder="Phone *"
                className="w-full px-4 py-3 bg-[#1c2e5a] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-400 transition-shadow"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                placeholder="Write message"
                rows="4"
                className="w-full px-4 py-3 bg-[#1c2e5a] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-400 transition-shadow resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-[50px]">
              <Button
                width="w-[130px] sm:w-[140px] md:w-[150px]"
                height="h-[45px] sm:h-[48px] md:h-[50px]"
                textSize="text-sm sm:text-base md:text-lg"
                text="Submit"
                className="mx-auto lg:mx-0"
              />
            </div>
          </form>
        </div>

        <div className="w-full lg:w-[700px] h-[300px] sm:h-[400px] md:h-[480px] lg:h-[580px] rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29193.995754230786!2d90.4200192!3d23.845273599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c671012602eb%3A0x27761cc8da96b3b7!2sNorthern%20University%20Bangladesh%2C%20Permanent%20Campus!5e0!3m2!1sen!2sbd!4v1753778860289!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 24 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
