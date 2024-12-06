import React from "react";

const ContactForm = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 py-16 text-blue-500'>
      {/* Heading Section */}
      <div className='w-full max-w-lg'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
          Hey, Somaya
        </h2>
        <h4 className='text-sm md:text-base lg:text-xl leading-relaxed pt-2'>
          Let's get to know you better so we can map out your perfect study
          journey.
        </h4>
      </div>

      {/* Form Section */}
      <div className='w-full max-w-md text-center pt-10'>
        <form>
          <div className='flex flex-col gap-4'>
            {/* First Name */}
            <input
              type='text'
              placeholder='First Name'
              value='Somaya'
              className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
            {/* Middle Name */}
            <input
              type='text'
              placeholder='Middle Name (Optional)'
              className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
            {/* Last Name */}
            <input
              type='text'
              placeholder='Last Name'
              value='Sharma'
              className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
            {/* Email */}
            <input
              type='email'
              placeholder='Email'
              value='somaya123@gmail.com'
              className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
            {/* Primary Contact Number */}
            <input
              type='number'
              placeholder='Primary Contact Number'
              className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
            {/* Verify Button */}
            <button
              type='submit'
              className='px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all'
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
