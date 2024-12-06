import React from "react";

const MissionAndVision = () => {
  return (
    <section
      // style={{ height: "90%" }}
      className='relative py-24 h-screen  w-screen bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100'
    >
      <div className='container mx-auto px-6 lg:pr-20 flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 mb-12 lg:mb-0'>
          <h3 className='text-5xl font-bold text-gray-900 mb-6'>
            Our Mission And Vision
          </h3>
          <p className='text-gray-700 leading-loose pt-12'>
            We seek to simplify the educational landscape using technology. We
            are empowering students to make more informed decisions about their
            educational paths. Everything is right here, with us, right now. We
            seek to simplify the educational landscape using technology. We are
            empowering students to make more informed decisions about their
            educational paths. Everything is right here, with us, right now.
          </p>
        </div>

        <div className='lg:w-1/2 ml-20 relative'>
          <div className='relative lg:w-[350px] h-auto'>
            <img
              src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75' // Replace with your main image URL
              alt='Graduation Group'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />

            <div className='absolute -bottom-16 -left-10 lg:-bottom-20 lg:left-60 w-[300px] lg:w-[350px] transform'>
              <img
                src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' // Replace with your overlapping image URL
                alt='Student Group'
                className='w-full h-auto rounded-lg shadow-xl '
              />
            </div>
          </div>
        </div>
      </div>

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

export default MissionAndVision;
