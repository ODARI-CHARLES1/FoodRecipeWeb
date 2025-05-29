import React from 'react'
import bannerImage from '../../src/assets/bannerImage.jpg'
import { colors } from '../assets/assets'
const Cta = () => {
  return (
    <div className='w-full md:h-[50vh] md:flex-row flex-col  lg:px-24 px-lg:px-24 px-8 flex items-center md:justify-between my-[100px]'>
       <div className='md:flex-1/3 flex align-items-center justify-center'>
        <img className='' src={bannerImage} alt="bannerImage" />
       </div>
        <div className=' gap-5 text-center flex-2/3 flex items-center justify-content-center flex-col'>
          <h1>Share Your <span  style={{color:colors['primary-1']}}>Recipe</span> </h1>
          <p className='md:w-[70%] w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus nemo voluptas aperiam quae eum impedit sequi earum aspernatur praesentium. Error fugiat ex obcaecati ratione amet dicta distinctio dolor doloremque.</p>
          <button className=' p-5 text-white text-[18px] rounded-md' style={{backgroundColor:colors['primary-2']}}>Create New Recipe</button>
        </div>
    </div>
  )
}

export default Cta