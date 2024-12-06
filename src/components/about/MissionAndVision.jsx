import React from "react";

const MissionAndVision = () => {
  return (
    <section className='relative py-12 md:py-16 lg:py-24 w-full h-auto bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100'>
      <div className='container mx-auto px-4 md:px-6 lg:px-20 flex flex-col lg:flex-row items-center'>
        {/* Left Section - Text */}
        <div className='lg:w-1/2 mb-10 lg:mb-0'>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Our Mission And Vision
          </h3>
          <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-loose pt-4 md:pt-6'>
            We seek to simplify the educational landscape using technology. We
            are empowering students to make more informed decisions about their
            educational paths. Everything is right here, with us, right now. We
            seek to simplify the educational landscape using technology. We are
            empowering students to make more informed decisions about their
            educational paths. Everything is right here, with us, right now.
          </p>
        </div>

        {/* Right Section - Images */}
        <div className='lg:w-1/2 relative flex justify-center items-center'>
          <div className='relative w-[80%] md:w-[70%] lg:w-[350px]'>
            <img
              src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75'
              alt='Graduation Group'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />

            {/* Overlapping Image */}
            <div className='absolute -bottom-8 left-1/4 lg:-bottom-12 lg:left-40 w-[60%] md:w-[70%] lg:w-[300px]'>
              <img
                src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                alt='Student Group'
                className='w-full h-auto rounded-lg shadow-xl'
              />
            </div>
          </div>
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

export default MissionAndVision;
