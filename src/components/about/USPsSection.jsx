import React from "react";

const USPsSection = () => {
  return (
    <section className='bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100'>
      <div className='container pt-20 mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center'>
        {/* Left Content Section */}
        <div className='lg:w-1/2 mb-12 lg:mb-0'>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>Our USPs</h2>
          <p className='text-lg text-gray-700 mb-6'>
            Unique selling points encompass:
          </p>
          <ul className='list-disc pl-5 space-y-4 text-gray-700'>
            <li>
              <span className='font-medium'>Course Finder</span> seamlessly
              integrated with student information, providing an extensive and
              swift list of available university and course selections.
            </li>
            <li>
              <span className='font-medium'>My Office</span>, a comprehensive
              CRM tool designed for agents and their teams, facilitates access
              to all documentation, tracks employee performance, and offers the
              flexibility of branch integration.
            </li>
            <li>
              An intuitive <span className='font-medium'>Easy Dashboard</span>{" "}
              featuring scholarships, open intakes, application fee waivers, and
              the ability to explore top colleges and universities at a single
              click.
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className='lg:w-1/2 grid grid-cols-2 gap-4'>
          <div>
            <img
              src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
              alt='Image 1'
              className='rounded-lg shadow-lg w-full'
            />
          </div>
          <div>
            <img
              src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75'
              alt='Image 2'
              className='rounded-lg shadow-lg w-full'
            />
          </div>
          <div>
            <img
              src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
              alt='Image 3'
              className='rounded-lg shadow-lg w-full'
            />
          </div>
          <div>
            <img
              src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75'
              alt='Image 4'
              className='rounded-lg shadow-lg w-full'
            />
          </div>
        </div>
      </div>
      <div className=' pt-20 pb-12 w-full hidden lg:flex justify-center items-center overflow-hidden'>
        <div className='flex space-x-4'>
          {Array(80)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className={`w-0.5 ${
                  index % 2 === 0 ? "h-16" : "h-10 mt-4"
                } bg-gray-800 rounded-full`}
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default USPsSection;
