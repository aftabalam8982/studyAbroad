import React from "react";

const Header = () => {
  return (
    <header className=' sticky top-0 z-50 bg-white shadow-lg '>
      <div className='container mx-auto px-6 lg:px-16 flex items-center justify-between py-4'>
        <div className='flex items-center'>
          <div className='bg-black text-white text-lg  px-8 py-1 '>Logo</div>
        </div>

        <nav className='hidden lg:flex space-x-6'>
          <a
            href='#about'
            className='text-pink-600 font-semibold hover:text-pink-700 border-b-[3px] border-b-transparent hover:border-b-red-600 '
          >
            About Us
          </a>
          <a
            href='#destinations'
            className='text-gray-800 hover:text-pink-700 border-b-[3px] border-b-transparent hover:border-b-red-600'
          >
            Destinations
          </a>
          <a
            href='#universities'
            className='text-gray-800 hover:text-pink-700 border-b-[3px] border-b-transparent hover:border-b-red-600'
          >
            Universities
          </a>
          <a
            href='#products'
            className='text-gray-800 hover:text-pink-700 border-b-[3px] border-b-transparent hover:border-b-red-600'
          >
            Our Products
          </a>
          <a
            href='#services'
            className='text-gray-800 hover:text-pink-700 border-b-[3px] border-b-transparent hover:border-b-red-600'
          >
            Our Services
          </a>
        </nav>

        <div className='flex items-center space-x-4'>
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
          <a
            href='#'
            className='relative bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-semibold px-8 py-2 rounded-lg shadow-md hover:text-clip group'
          >
            <span className='inline-block transition-transform duration-300 group-hover:scale-110'>
              Talk to experts
            </span>
          </a>
        </div>
      </div>
      <div
        style={{ top: "4.2rem" }}
        className='absolute right-1/2 translate-x-1/2 z-50'
      >
        <button className='px-6 py-2 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-bold rounded-b-lg shadow-lg hover:shadow-xl'>
          Explore AI Course Finder
        </button>
      </div>
    </header>
  );
};

export default Header;
