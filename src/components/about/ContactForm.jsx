import React from "react";

const ContactForm = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-auto pt-32 text-blue-500'>
      <div className=' w-2/5 text-center '>
        <h2 className='text-4xl font-semibold'>Hey, Somaya</h2>
        <h4 className='text-xl leading-relaxed pt-2'>
          Let's get to know you better so we can map out your prefect study
          journey
        </h4>
      </div>
      <div className='text-center pt-10'>
        <form action=''>
          <div className='flex flex-col gap-4 w-80 '>
            <input
              type='text'
              placeholder='First Name'
              value='Somaya'
              className='p-2 border border-gray-500 rounded'
            />
            <input
              type='text'
              placeholder='Middle Name (Optional)'
              className='p-2 border border-gray-500 rounded'
            />
            <input
              type='text'
              placeholder='Last Name'
              value='Sharma'
              className='p-2 border border-gray-500 rounded'
            />
            <input
              type='email'
              placeholder='email'
              value='somaya123@gmail.com'
              className='p-2 border border-gray-500 rounded'
            />
            <input
              type='number'
              placeholder='Primary Contact Number'
              className='p-2 border border-gray-500 rounded'
            />
            <button className='px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold rounded shadow-lg shadow-inner hover:shadow-xl'>
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
