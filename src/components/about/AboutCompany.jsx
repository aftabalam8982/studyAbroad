import React from "react";

const AboutCompany = () => {
  return (
    <section className='relative py-16 md:py-24 w-screen h-[90vh] bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100'>
      <div className='container mx-auto px-4 lg:px-6 flex flex-col-reverse lg:flex-row items-center'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
          <h3 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6'>
            About The Company
          </h3>
          <p className='text-gray-700 text-sm md:text-base leading-loose pt-4 md:pt-6'>
            At Daltin, we connect students with universities worldwide through
            our innovative all-in-one platform, streamlining the student
            recruiting process. We empower students with educational
            opportunities that enhance their quality of life and promote global
            betterment. By bridging international education providers and
            recruiting partners, we provide students access to diverse study
            options from anywhere in the world, transforming lives through
            education.
          </p>
        </div>

        {/* Images Section */}
        <div className='w-full lg:w-1/2 relative flex justify-center items-center'>
          <div className='relative w-full max-w-md md:max-w-lg'>
            {/* Background Image */}
            <img
              src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75'
              alt='Graduation Group'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />

            {/* Overlapping Image */}
            <div className='absolute -bottom-8 -left-6 md:-bottom-10 md:-left-10 w-[200px] md:w-[250px] lg:w-[300px]'>
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
      <div className='absolute bottom-4 md:bottom-8 left-0 w-full hidden lg:flex justify-center items-center overflow-hidden'>
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

export default AboutCompany;
