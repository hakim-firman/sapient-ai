import React from 'react'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main flex-1 min-h-[100vh] relative'>
        <div className="flex items-center justify-between text-[22px] p-[20px] text-green-950">
            <p>Sapient</p>
            <img src={assets.user_icon} className='w-[40px] rounded-full' alt="" />
        </div>
        <div className="main-container max-w-[900px] m-auto  ">
            <div className="my-[10px] text-[56px] text-slate-400">
                <p className='-my-1'><span className='bg-gradient-to-r  from-blue-500 to-red-600 bg-clip-text text-transparent'>Hello,dave</span></p>
                <p>How Can I help you Today?</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="card">
                    <p>Sugggest beatiful place to se on an upcoming road trip</p>
                    <img src={assets.compass_icon} className='w-[40px]' alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quod.</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, dolorum?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, dolorum?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        <div className="main-bottom absolute bottom-0 w-full   max-w-[900px] px-[20px] m-auto">
            <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] px-[20px] py-[10px] rounded-lg text-[18px]">
                <input type="text" className='flex-1 bg-transparent border-none outline-none p-[8px]' placeholder='Enter a Prompt here' />
                <div className='flex gap-2'>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="text-[13px] text-center my-[15px] mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit et, placeat atque reiciendis nesciunt minus eligendi.
            </p>
        </div>
        </div>
    </div>
  )
}

export default Main