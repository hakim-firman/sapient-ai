import React, { useState } from 'react'
import {assets} from '../../assets/assets'
const Sidebar = () => {
    const[extended,setExtended]= useState(false)

  return (
    <div  className={`inline-flex px-[15px] py-[25px] sidebar justify-between flex-col min-h-screen w-fit bg-blue-200 `}>
        <div className="w-fit items-center ">
            <img src={assets.menu_icon} onClick={()=>setExtended(!extended)} className={`ml-2`} alt="" />
            <div className="mt-[50px] inline-flex items-center gap-[10px] px-3 py-2  rounded-full bg-blue-100">
                <img src={assets.plus_icon}  alt="" />
                {extended&&<p>New Chat</p>}
            </div>
            {extended?
            <div className="flex flex-col ">
                <p className="mt-[30px] mb-[20px]">
                    Recent
                </p>
                <div className="recent-entry ">
                    <img src={assets.message_icon} className='w-[20px] block ml-[10px]' alt="" />
                    <p>what is react...</p>
                </div>
            </div>
            :null}
        </div>
        <div className="flex flex-col gap-2">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended&&<p>Help</p>}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended&&<p>History</p>}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended&&<p>Setting</p>}
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar