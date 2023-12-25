'use client'
import React from 'react';
import { signOut } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';

const LogoutButton = () => {
  return (
    <button
      className="flex items-center gap-2 p-1"
      onClick={() => signOut()}
    >
      <span>Logout</span>
      <FiLogOut />
    </button>
  );
};

export default LogoutButton;
