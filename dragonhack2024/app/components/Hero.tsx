import React from 'react'
import Link from 'next/link'

export default function Hero(){
  return (
    <div className="flex flex-col items-center justify-top min-h-screen pt-16 md:pt-24">
      <h1 className="text-9xl font-bold mb-8 text-cyan-500">TUTORIFY</h1>
      <div className='text-2xl text-gray-50 flex flex-col mb-8'>
        <p>Join our platform and discover some of the best univeristy tutors and lecture notes!</p>
        <p className='text-center	'>You are just one click away of from excelling at your studies!</p>
      </div>
      <div className="flex flex-row gap-8 font-bold">
        <div className="flexCenter  border-solid border-2 border-cyan-200 px-8 py-4 rounded-lg hover:bg-cyan-500 hover:text-white">
            <Link href="/api/auth/login" > Log in </Link> 
        </div>
        <div className="flexCenter  border-solid border-2 border-cyan-200 px-8 py-4 rounded-lg hover:bg-cyan-500 hover:text-white">
            <Link href="/api/auth/login"> Sign up </Link> {/* Hack, we wanted two buttons for landing page, but Auth0 provides one api */}
        </div>
      </div>
    </div>
  )
}

