import React, { useState,useEffect } from 'react'
import { BiKnife } from 'react-icons/bi';
import { GiSpoon } from 'react-icons/gi';
import { colors } from '../assets/assets.js';
import { navItems } from '../assets/assets.js';
import {MdMenu} from 'react-icons/md'
import {HiX } from 'react-icons/hi';

const Navbar = () => {
 const [showMenu,setShowMenu]=useState(false)
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleResize);
    setIsMobile(mediaQuery.matches);
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className='w-full relative py-3 h-24 flex items-center justify-between '>
      <div className='flex justify-start items-center'>
        <div className='flex items-center justify-center'>
          <BiKnife className='size-8' color={colors['primary-2']}/>
          <GiSpoon className='size-8 '/>
        </div>
      {
        isMobile?
          <h4 style={{color:colors['text-1']}} className='cursor-pointer text-[24px]'>Perfect<span style={{color:colors['primary-1']}}>Recipe</span></h4>
          :
          <h3 style={{color:colors['text-1']}} className='cursor-pointer text-[24px]'>Perfect<span style={{color:colors['primary-1']}}>Recipe</span></h3>
      }
      </div>
     <nav className='lg:inline hidden'>
      <ul className="w-full transition duration-500 flex items-center justify-between">
        {navItems.map((item, index) => (
          <li
            key={item}
            className={`relative p-2 cursor-pointer mx-4 my-2 transition duration-500 text-text-1 ${index === 0 ? "font-semibold" : ""}`}
          >
            <span className="group">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-950 transition-all group-hover:w-full group-hover:left-0 group-hover:duration-500"></span>
            </span>
          </li>
        ))}
      </ul>
    </nav>
      <div  className='lg:flex  hidden  items-center justify-end gap-5'>
        <button className='p-2 cursor-pointer bg-white w-[100px] p3 rounded-md ' >Log In</button>
        <button className='p-2 cursor-pointer bg-white w-[100px] p3 rounded-md   text-white'style={{backgroundColor:colors['primary-3']}}>Sign Up</button>
      </div>

      <div className='lg:hidden transition duration-500'>
       {
        showMenu?
        (
          <HiX onClick={()=>setShowMenu(false)} className='lg:size-10 size-8 hover:text-[#793E58] cursor-pointer' color={colors['primary-1']}/>
        ):
        (
           <MdMenu onClick={()=>setShowMenu(true)} className='lg:size-10 size-8 hover:text-[#793E58] cursor-pointer' color={colors['primary-1']}/>
        )
       }
      </div>
    </div>
  )
}

export default Navbar