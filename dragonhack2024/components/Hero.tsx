import React from 'react'
import Button from "@/components/Button"

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen pt-16 md:pt-24">
    <h1 className="text-4xl md:text-6xl font-bold mb-8">TUTORIFY</h1>
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="lg:flexCenter hidden">
            <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
            /> 
        </div>
        <div className="lg:flexCenter hidden">
            <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_green"
            /> 
        </div>
    </div>
  </div>
  )
}

export default Hero