import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white shadow-lg'>
      {/* Main Header Container */}
      <div className='container mx-auto px-6 lg:px-16 flex items-center justify-between py-4'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <div className='bg-black text-white text-lg px-8 py-1'>Logo</div>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex space-x-6'>
          {[
            "About Us",
            "Destinations",
            "Universities",
            "Our Products",
            "Our Services",
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className='text-gray-800 hover:text-pink-700 border-b-[3px] border-b-transparent hover:border-b-red-600 font-semibold'
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section (Search and CTA) */}
        <div className='flex items-center space-x-4'>
          {/* Search Icon */}
          <button className='text-gray-800 hover:text-gray-600 text-lg pr-4'>
            <svg
              fill='currentColor'
              viewBox='0 0 16 16'
              height='1em'
              width='1em'
            >
              <path d='M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z' />
            </svg>
          </button>

          {/* Call-to-Action Button */}
          <a
            href='#'
            className='relative bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-semibold px-8 py-2 rounded-lg shadow-md hover:shadow-lg transition-all'
          >
            Talk to experts
          </a>

          {/* Mobile Hamburger Icon */}
          <button
            className='lg:hidden text-gray-800 hover:text-gray-600 text-xl focus:outline-none'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* AI Course Finder Button */}
      <div className='fixed top-16 inset-x-0 flex justify-center z-50'>
        <button className='px-6 py-2 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-bold rounded-b-lg shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg'>
          Explore AI Course Finder
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className='lg:hidden bg-white shadow-lg'>
          <div className='container mx-auto px-6 py-4 space-y-4'>
            {[
              "About Us",
              "Destinations",
              "Universities",
              "Our Products",
              "Our Services",
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className='block text-gray-800 hover:text-pink-700 border-b-[3px] border-b-transparent hover:border-b-red-600 font-semibold'
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
