import React from "react";

export default function Navbar() {
  return (
    <nav className="p-4" style={{ backgroundColor: "#047861" }}>
      <div className="mx-auto flex justify-between items-center">
        <div className="flex">
          <div className="w-3"></div>
          <a href="/" className="text-white text-lg  font-semibold text-center">
            <h1>
              ГОСУДАРСТВЕННЫЙ КОМИТЕТ ПО АВТОМОБИЛЬНЫМ ДОРОГАМ <br />
              РЕСПУБЛИКИ УЗБЕКИСТАНА
            </h1>
          </a>
        </div>
        <div className="flex  items-center">
          <a href="#" className="block text-gray-300 hover:text-white py-2">
            Contact
          </a>
          <div style={{ width: "20px" }}></div>
          <div className="hidden md:flex space-x-4">
            <div className="relative inline-block text-left">
              <div
                id="dropdownMenu"
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none hidden">
                <div className="py-1" role="none">
                  <a
                    href="{{ route('lang', 'uz') }}"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem">
                    Uzbek
                  </a>
                  <a
                    href="{{ route('lang', 'ru') }}"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem">
                    Русский
                  </a>
                  <a
                    href="{{ route('lang', 'en') }}"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem">
                    English
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onclick="toggleMenu()">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className="md:hidden hidden">
        <a href="#" className="block text-gray-300 hover:text-white py-2">
          Contact
        </a>
      </div>
    </nav>
  );
}
