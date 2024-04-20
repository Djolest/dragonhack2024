import React from 'react'
// import Button from "@/components/Button"
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen pt-16 md:pt-24">
    <h1 className="text-4xl md:text-6xl font-bold mb-8">TUTORIFY</h1>
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="lg:flexCenter hidden">
            <Link href="/api/auth/login" > Log in </Link> 
        </div>
        <div className="lg:flexCenter hidden">
            <Link href="/api/auth/login"> Sign up </Link>
        </div>
    </div>
  </div>
  )
}

export default Hero