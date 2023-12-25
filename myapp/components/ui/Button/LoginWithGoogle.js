'use client'
import React from 'react';
import { signIn } from 'next-auth/react';
import { FiLogIn } from 'react-icons/fi';

const LoginWithGoogle = () => {
  return (
    <button
      onClick={() => signIn('google')}
      className=" text-gray-500 p-2 hover:bg-black hover:text-white rounded-full text-center w-full py-4 flex gap-1 items-center justify-center"
    >
      <span className=''>SignIn</span>
      <FiLogIn />
    </button> 
  );
};

export default LoginWithGoogle;
