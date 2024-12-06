import React from "react";

const OurStorySection = () => {
  return (
    <section className='relative py-12 md:py-16 lg:py-20 w-full h-[90vh] bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100'>
      <div className='container mx-auto px-4 md:px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between'>
        {/* Left Section - Images */}
        <div className='flex flex-col md:flex-row items-center justify-center lg:w-1/2 space-y-8 md:space-y-0 md:space-x-8'>
          {/* First Image with Year */}
          <div className='relative w-[80%] md:w-[45%] lg:w-[60%]'>
            <img
              src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
              alt='Team'
              className='w-full h-auto rounded-lg shadow-lg'
            />
            <div className='absolute -bottom-6 md:-bottom-10 left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-4xl md:text-5xl lg:text-6xl'>
              202<span className='text-3xl md:text-4xl lg:text-5xl'>3</span>
            </div>
          </div>

          {/* Second Image with Year */}
          <div className='relative w-[80%] md:w-[45%] lg:w-[60%] mt-8 md:mt-0'>
            <img
              src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75'
              alt='Team'
              className='w-full h-auto rounded-lg shadow-lg'
            />
            <div className='w-max absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-2xl md:text-3xl lg:text-4xl'>
              Our Story
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className='lg:w-1/2 mt-10 lg:mt-0 px-4 md:px-6 lg:px-8 text-center lg:text-left'>
          <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-loose'>
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
      <div className='absolute bottom-4 md:bottom-10 left-0 w-full hidden lg:flex justify-center items-center overflow-hidden'>
        <div className='flex space-x-2 md:space-x-4'>
          {Array(80)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className={`w-0.5 ${
                  index % 2 === 0 ? "h-12 md:h-16" : "h-8 md:h-10 mt-2"
                } bg-gray-800 rounded-full`}
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
