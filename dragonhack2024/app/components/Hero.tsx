import React from 'react'
// import Button from "@/components/Button"
import Link from 'next/link'

export default function Hero(){
  return (
    <div className="flex flex-col items-center justify-top min-h-screen pt-16 md:pt-24">
      <h1 className="text-9xl font-bold mb-8 text-lime-500">TUTORIFY</h1>
      <p className='text-2xl text-gray-50 flex flex-col mb-8'>
        <p>Join our platform and discover some of the best univeristy tutors and lecture notes!</p>
        <p className='text-center	'>You are just one click away of from excelling at your studies!</p>
      </p>
      <div className="flex flex-row gap-8 font-bold">
        <div className="flexCenter  border-solid border-2 border-lime-200 px-8 py-4 rounded-lg hover:bg-lime-500 hover:text-white">
            <Link href="/api/auth/login" > Log in </Link> 
        </div>
        <div className="flexCenter  border-solid border-2 border-lime-200 px-8 py-4 rounded-lg hover:bg-lime-500 hover:text-white">
            <Link href="/api/auth/login"> Sign up </Link>
        </div>
      </div>
    </div>
  )
}

