'use client';

import React from 'react'
import Image from 'next/image';

type ButtonProps = {
    type: 'button' | 'submit'
    title: string;
    icon?: string;
    variant?: string;
    href?: string;
}

const Button = ({ type, title, icon, variant, href }: ButtonProps) => {
  return (
    <button 
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
      onClick={()=>{
        if(href){
          window.location.href = href
          console.log(href);
        }
      }}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button