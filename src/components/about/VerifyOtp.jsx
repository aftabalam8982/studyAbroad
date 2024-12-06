import React from "react";

const VerifyOtp = () => {
  return (
    <div className='flex h-screen flex-col justify-center items-center text-center mt-auto pt-32 text-gray-600 '>
      <div className=' w-2/5 text-center '>
        <h2 className='text-4xl font-semibold text-blue-500'>
          Verify Your Code
        </h2>
        <h4 className='text-xl leading-relaxed pt-2'>
          Enter the code you just received on your mobile number ending with
          xxxxxxx643.
        </h4>
      </div>
      <div className='text-center pt-10 w-96 '>
        <form action=''>
          <div className='flex gap-4 '>
            <input
              type='text'
              value={6}
              className='p-3 text-3xl border border-gray-500 rounded w-12'
            />
            <input
              type='text'
              value={7}
              className='p-3 text-3xl border border-gray-500 rounded w-12'
            />
            <input
              type='text'
              className='p-3 text-3xl border border-gray-500 rounded w-12'
            />
            <input
              type='text'
              className='p-3 text-3xl border border-gray-500 rounded w-12'
            />
            <input
              type='text'
              className='p-3 text-3xl border border-gray-500 rounded w-12'
            />
            <input
              type='text'
              className='p-3 text-3xl border border-gray-500 rounded w-12'
            />
          </div>
        </form>
        <button className='w-full mt-6 px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold rounded shadow-lg shadow-inner hover:shadow-xl'>
          Verify Now
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
