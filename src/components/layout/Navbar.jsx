import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import logo from "../../assets/jf logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto mt-[45px] px-4">
      {/* Mobile menu button */}
      <div className="flex items-center justify-between md:hidden mb-4">
        <div className="text-xl font-semibold">Menu</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Main Navbar */}
      <div className="hidden md:flex items-center justify-between text-lg">
        <div>
          <ul className="flex items-center gap-[50px]">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="" className="h-[150px]" />
        </div>
        <div className="flex items-center gap-[50px]">
          <a href="#" className="flex items-center gap-2.5">
            Login{" "}
            <span>
              <PiUserLight />
            </span>
          </a>
          <CiSearch />
          <IoBagOutline />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 text-lg">
          <ul className="flex flex-col gap-3">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="flex items-center gap-2.5">
              Login <PiUserLight />
            </a>
            <CiSearch />
            <IoBagOutline />
          </div>
        </div>
      )}
    </div>
  );
}
