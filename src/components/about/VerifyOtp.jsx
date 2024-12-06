import React from "react";

const VerifyOtp = () => {
  return (
    <div className='flex h-screen flex-col justify-center items-center px-4 sm:px-8 lg:px-20 text-center text-gray-600'>
      {/* Heading Section */}
      <div className='w-full max-w-lg'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-500'>
          Verify Your Code
        </h2>
        <h4 className='text-sm sm:text-base lg:text-xl leading-relaxed pt-2'>
          Enter the code you just received on your mobile number ending with
          <span className='font-bold'> xxxxxxx643</span>.
        </h4>
      </div>

      {/* Input Section */}
      <div className='pt-8 sm:pt-10 w-full max-w-md'>
        <form>
          <div className='flex gap-2 sm:gap-4 justify-center'>
            {/* OTP Input Fields */}
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type='text'
                maxLength='1'
                className='p-3 text-xl sm:text-2xl lg:text-3xl border border-gray-500 rounded-md w-10 sm:w-12 lg:w-14 text-center focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            ))}
          </div>
        </form>

        {/* Verify Button */}
        <button className='w-full mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold text-sm sm:text-base lg:text-lg rounded shadow-lg hover:shadow-xl'>
          Verify Now
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
