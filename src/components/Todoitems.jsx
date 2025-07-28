
import React from 'react'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
import tick_icon from '../assets/tick.png'



const Todoitems = ({text,isComplete,id,deleteItem,toggle}) => {
  return (
    <div className='flex my-3 items-center cursor-pointer'>
    <div  onClick={()=>toggle(id)} className=' flex items-center gap-4 flex-1 '>
        <img src={isComplete?tick_icon:not_tick} alt="" className='w-6  ' />
        <p className={`text-[17px] text-slate-700 ${isComplete?'line-through':''}`}>{text}</p>
    </div>
    <img src={delete_icon} alt="" className='w-3.5' onClick={()=>deleteItem(id)} />
    </div>
  )
}

export default Todoitems