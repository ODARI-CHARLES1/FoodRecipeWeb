import React from "react";
import Header from "../Components/Header";
import Cta from '../Components/Cta'
import { colors } from "../assets/assets";
import Trending from "../Components/Trending";
const Landing=()=>{
    return(
        <div className="w-full h-[100vh] flex flex-col gap-[100px] ">
            <Header/>
            <hr className="w-[80%]   mx-auto rounded-full " style={{backgroundColor:colors["primary-1"]}} />
            <Cta/>
            <hr className="w-[80%]   mx-auto rounded-full " style={{backgroundColor:colors["primary-1"]}} />
            <Trending/>
            
        </div>
    )
}

export default Landing