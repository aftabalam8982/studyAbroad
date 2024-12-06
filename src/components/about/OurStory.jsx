import React from "react";

const OurStorySection = () => {
  return (
    <section
      //   style={{ height: "90%" }}
      className='relative py-16 w-full h-screen bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100'
    >
      <div className='container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between'>
        {/* Left Section - Images */}
        <div className='flex flex-col lg:flex-row items-center lg:w-1/2'>
          {/* First Image with Year */}
          <div className='relative w-full lg:w-[60%] lg:h-[100%] mb-8 lg:mb-0'>
            <img
              src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
              alt='Team'
              className='w-full h-auto rounded-lg shadow-lg'
            />
            <div className='absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-6xl'>
              2023
            </div>
          </div>

          {/* Spacer */}
          <div className='hidden lg:block w-10'></div>

          {/* Second Image with Year */}
          <div className='relative w-full lg:w-[45%]'>
            <img
              src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75' // Replace with the actual main image URL
              alt='Team'
              className='w-full h-auto rounded-lg shadow-lg'
            />
            <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-6xl'>
              Our Story
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className='lg:w-1/2 px-4 lg:px-8'>
          <h3 className='text-4xl font-bold text-gray-900 mb-6'>Our Story</h3>
          <p className='text-gray-700 leading-loose'>
            Founded in April 2023, Daltin aims to transform education by
            blending global best practices with cutting-edge technology.
            Partnering with over 500 institutions worldwide, we provide
            innovative, tech-driven study options that meet the evolving needs
            of students. Our AI-based portal combines traditional teaching with
            advanced tools, including virtual assistants and chatbots, for
            real-time support, creating a dynamic and interactive learning
            experience. Daltin is pioneering a new era in international
            education.
          </p>
        </div>
      </div>

      {/* Decorative Line */}
      <div className='absolute bottom-10 left-0 w-full hidden lg:flex justify-center items-center overflow-hidden'>
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

export default OurStorySection;
