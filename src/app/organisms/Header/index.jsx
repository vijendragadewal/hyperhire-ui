"use client";
import IconWithLabel from "@/app/molecules/IconWithLabel";
import HyperHire from "../../assets/hyperhire-white.png";
import Dropdown from "@/app/molecules/Dropdown";
import { Data } from "@/app/dummyData";

//https://nextjs.org/icons/next.svg
export default function Header() {
  return (
    <header className="w-full py-5">
      <nav className=" text-white">
        <div className="container mx-auto px-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <IconWithLabel
              icon={HyperHire}
              lableName="Hyperhire"
              className="h-8 flex items-center text-white font-bold"
              width={"114px"}
              height={"21px"}
              position="front"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-white">
            <Dropdown label="채용" data={Data} />
            <a href="#" className="font-bold">
              해외 개발자 찾는 서비스
            </a>
          </div>

          {/* Inquiry Button */}
          <div className="hidden md:flex">
            <button className="bg-white text-blue-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100">
              문의하기
            </button>
          </div>

          {/* Mobile Menu Button (optional) */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
