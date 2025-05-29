import { TrendingInfo } from '../assets/assets'
import { colors } from '../assets/assets'
import { MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Trending = () => {
  return (

    <div className='`w-full   h-[100vh] lg:px-24 px-8 flex flex-col items-start gap-4'>
        <ToastContainer/>
        <div className='w-full flex items-end justify-between my-[8] rounded-md '>
              <h3>Trending Recipes</h3>
              <p style={{color:colors['primary-2']}} className='text-[18px] font-semibold cursor-pointer'>See More</p>
        </div>
        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-2 gap-10'>
          {
            TrendingInfo.map((trending,index)=>(
                  <div key={index} className='pb-10 h-[600px] flex items-start justify-around flex-col gap-8 shadow-md '>
                <div className='w-full relative'>
                    <img className='w-full h-[350px]' src={trending.thumbnail} alt="thumbnail" />
                    <div className='top-4  right-4 w-[40px] aspect-square absolute bg-white flex items-center justify-center rounded-1'>
                    <  MdFavorite color={colors['primary-1']}  className='size-8   '/>
                    </div>
                </div>
                <div className='flex items-center px-4  gap-3'>
                    {[...Array(index)].map((_, i) => (
                        <FaStar key={i} size={20} color={colors['primary-1']} />
                    ))}
                    {[...Array(5-index)].map((_, i) => (
                        <FaStar key={i} size={20}  />
                    ))}

                </div>

                <h5 className='px-4'>{trending.recipeTitle}</h5>
                <div className='flex items-center justify-between w-full px-4'>
                    <div className='flex items-center gap-3'>
                        <img className='w-[50px] rounded-full aspect-square ' src={trending.profile.imageUrl} alt="profilePicture" />
                        <h5>{trending.profile.name}</h5>
                    </div>
                    <div className='w-[150px] flex items-start border-1 border-amber-200 p-3 rounded-md'>
                        <button className='w-full text-start'>{trending.cells} Cells</button>
                    </div>
                </div>
            </div>
            ))
          }
            
        </div>
        <h5 onClick={()=>{
            {toast.success("Bye Brenda see you tomorrow")}
        }} className='text-pink-600 cursor-pointer bg-pink-100 rounded-md p-4 m-auto '>I love you Brenda....</h5>
    </div>
  )
}

export default Trending