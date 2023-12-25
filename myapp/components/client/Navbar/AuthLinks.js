import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LoginWithGoogle from '@/components/ui/Button/LoginWithGoogle'
import LogoutButton from '@/components/ui/Button/LogoutButton'
import {getServerSession} from "next-auth";
import Link from "next/link";


const AuthLinks = async () => {
  const session = await getServerSession(authOptions)

  return ( 
    <div className='flex items-center gap-2'>
          {!!session ? (
        <>
          <Link href={'/admin'}>Admin</Link>
          <Link href={'/profile'}>
            <Avatar imageUrl={session.user.image} alt={session.user.name} />
          </Link>
          <LogoutButton />
        </>
      ) : (
        <button onClick={() => signIn('google')}>Sign In</button>
      )}
          {!session && (
            <>
            <LoginWithGoogle />
            </>
          )}
    </div>
  )
}
const Avatar = ({ imageUrl, alt }) => {
  return (
    <img
      src={imageUrl}
      alt={alt}
      className="rounded-full w-8 h-8 cursor-pointer"
    />
  );
};


export default AuthLinks