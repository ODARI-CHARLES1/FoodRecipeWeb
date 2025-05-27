import React from 'react'
import { TrendingInfo } from '../assets/assets'
const Trending = () => {
  return (
    <div className='`w-full   h-[100vh] lg:px-24 px-8 flex flex-col items-start'>
        <h2>Trending Recipes</h2>
        <div className='w-full grid grid-cols-3 grid-rows-2'>
            <div>
                <div>
                    <img src={TrendingInfo[0].thumbnail} alt="thumbnail" />
                </div>
                <h5>{TrendingInfo[0].recipeTitle}</h5>
                <div>
                    <div>
                        <img src={TrendingInfo[0].profile.imageUrl} alt="profilePicture" />
                        <h6>{TrendingInfo[0].profile.name}</h6>
                    </div>
                    <div>
                        <button>{TrendingInfo[0].cells}</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={TrendingInfo[0].thumbnail} alt="thumbnail" />
                </div>
                <h5>{TrendingInfo[0].recipeTitle}</h5>
                <div>
                    <div>
                        <img src={TrendingInfo[0].profile.imageUrl} alt="profilePicture" />
                        <h6>{TrendingInfo[0].profile.name}</h6>
                    </div>
                    <div>
                        <button>{TrendingInfo[0].cells}</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={TrendingInfo[0].thumbnail} alt="thumbnail" />
                </div>
                <h5>{TrendingInfo[0].recipeTitle}</h5>
                <div>
                    <div>
                        <img src={TrendingInfo[0].profile.imageUrl} alt="profilePicture" />
                        <h6>{TrendingInfo[0].profile.name}</h6>
                    </div>
                    <div>
                        <button>{TrendingInfo[0].cells}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending