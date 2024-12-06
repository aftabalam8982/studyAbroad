import React from "react";

const RegisterPage = () => {
  return (
    <div className='flex flex-col lg:flex-row h-[92vh] w-screen'>
      {/* Left Section */}
      <div className='lg:w-1/2 w-full h-1/3 lg:h-full bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-300 flex flex-col justify-center items-center p-8 text-white'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center'>
          Your Journey Abroad Starts Here!
        </h1>
        <p className='text-sm md:text-base lg:text-lg text-center leading-relaxed'>
          Join thousands of students who’ve found their dream universities with
          us.
        </p>
      </div>

      {/* Right Section */}
      <div className='lg:w-1/2 w-full h-2/3 lg:h-full flex flex-col justify-center items-center bg-white px-6 lg:px-12'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-6'>
          Create an account
        </h2>
        <form className='w-full max-w-md space-y-4'>
          {/* Full Name Input */}
          <input
            type='text'
            placeholder='Full Name'
            className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
          />
          {/* Email Address Input */}
          <input
            type='email'
            placeholder='Email Address'
            className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
          />
          {/* Password Input */}
          <input
            type='password'
            placeholder='Password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
          />
          {/* Confirm Password Input */}
          <input
            type='password'
            placeholder='Confirm Password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
          />
          {/* Register Button */}
          <button
            type='submit'
            className='w-full py-2 text-white font-medium bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-md hover:shadow-lg transition-all'
          >
            Register Now
          </button>
          {/* Login Link */}
          <p className='text-sm text-center text-gray-600'>
            Already have an account?{" "}
            <a href='#' className='text-blue-500 hover:underline'>
              Login Now
            </a>
          </p>
        </form>

        {/* Divider */}
        <div className='flex items-center my-4 w-full max-w-md'>
          <hr className='flex-grow border-t border-gray-300' />
          <span className='px-2 text-sm text-gray-500'>OR</span>
          <hr className='flex-grow border-t border-gray-300' />
        </div>

        {/* Social Media Buttons */}
        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full max-w-md'>
          {/* Google Button */}
          <button className='flex items-center justify-center w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition'>
            <img
              src='https://www.svgrepo.com/show/355037/google.svg'
              alt='Google Icon'
              className='w-5 h-5 mr-2'
            />
            Google
          </button>
          {/* Apple Button */}
          <button className='flex items-center justify-center w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition'>
            <img
              src='https://www.svgrepo.com/show/303155/apple-black-logo.svg'
              alt='Apple Icon'
              className='w-5 h-5 mr-2'
            />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
