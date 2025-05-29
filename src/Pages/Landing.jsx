import React from "react";
import Header from "../Components/Header";
import Cta from '../Components/Cta'
import { colors } from "../assets/assets";
import Trending from "../Components/Trending";
const Landing=()=>{
    return(
        <div className="w-full h-[100vh] flex flex-col md:gap-[100px] gap-4 ">
            <Header/>
            <hr className="md:w-[80%] w-0    mx-auto rounded-full " style={{backgroundColor:colors["primary-1"]}} />
            <Cta/>
            <hr className="md:w-[80%] w-0   mx-auto rounded-full " style={{backgroundColor:colors["primary-1"]}} />
            <Trending/>
            
        </div>
    )
}

export default Landing