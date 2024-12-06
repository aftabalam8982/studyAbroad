import React from "react";

const AboutCompany = () => {
  return (
    <section
      // style={{ height: "90%" }}
      className='relative py-24  w-screen h-[90vh]  bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100'
    >
      <div className='container mx-auto px-6 lg:pr-20 flex flex-col lg:flex-row items-center'>
        {/* Text Section */}
        <div className='lg:w-1/2 mb-12 lg:mb-0'>
          <h3 className='text-5xl font-bold text-gray-900 mb-6'>
            About The Company
          </h3>
          <p className='text-gray-700 leading-loose pt-12'>
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
        <div className='lg:w-1/2 ml-20 relative md:w-1/2'>
          <div className='relative w-full left-0 h-auto'>
            {/* Background (Graduation) Image */}
            <img
              src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75' // Replace with your main image URL
              alt='Graduation Group'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />

            {/* Overlapping Image */}
            <div className='absolute -bottom-10 -left-10 lg:-bottom-16 lg:-left-16 w-[300px] lg:w-[350px] transform'>
              <img
                src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' // Replace with your overlapping image URL
                alt='Student Group'
                className='w-full h-auto rounded-lg shadow-xl '
              />
            </div>
          </div>
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

export default AboutCompany;
