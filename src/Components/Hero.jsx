import React from 'react'
import { colors } from '../assets/assets'

const Hero = () => {
  return (
    <div className='h-[80vh] gap-4 flex items-start justify-center flex-col'>
        <h1 className='leading-16 my-3 py-3'>Your Daily Dish <br /> A <span style={{color:colors['primary-2']}} >Food</span> Journey </h1>
        <p className='p2 my-2 py-2 md:w-[40%]' style={{color:colors['text-1']}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim delectus neque labore? Harum, veritatis quidem. Veritatis, numquam dolorem porro, iusto impedit at dolorum dicta quidem optio deserunt quos aperiam est?</p>
        <button className='p-2 cursor-pointer bg-white w-[100px] p3 rounded-md   text-white'style={{backgroundColor:colors['primary-3']}}>Sign Up</button>
        <p style={{color:colors['text-1']}}>Do you have account? <span className='cursor-pointer font-medium' style={{color:colors['primary-2']}}>Login</span></p>
    </div>
  )
}

export default Hero