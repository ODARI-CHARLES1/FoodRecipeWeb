import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
const Header = () => {
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
  <div className={isMobile?`w-full   h-[100vh] lg:px-24 px-8 header-sm`:'w-full   h-[100vh] lg:px-24 px-8 header-bg'}>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Header