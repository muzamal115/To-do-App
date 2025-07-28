
import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {
  const[todolist,setTodolist]=useState(localStorage.getItem("todo")?
     JSON.parse(localStorage.getItem("todo")):[])
  const inputRef=useRef();

  //add items

  const add=(e)=>{
    e.preventDefault();
    let inputText=inputRef.current.value.trim();
    if(inputText=='')
    {
      return null
    }
    const todoItem={
      id:Date.now(),
      text:inputText,
      isComplete:false
    }
    setTodolist((prev)=>[...prev,todoItem])
    inputRef.current.value='';

  }

  // Delete item

  const deleteItem =(id)=>
  {
    let newtodo= todolist.filter((prev)=>id!==prev.id)
    setTodolist(newtodo);
  }

  // toggle function


  const toggle=(id)=>{
     setTodolist((prevtodo)=>{
      return prevtodo.map((todo)=>{
        if(todo.id==id){
          return{...todo,isComplete:!todo.isComplete}
        }
        return todo;
      })
    })
  }
  useEffect(()=>{
localStorage.setItem('todo',JSON.stringify(todolist))
  },[todolist])
  return (
    <div className='min-h-[550px] bg-white  w-11/12 max-w-md p-7 rounded-xl flex flex-col  '>
      <div className='mt-7 flex gap-2 items-center'>
     <img src={todo_icon} alt=""  className='w-8'/>
     <h1 className='font-semibold text-3xl'>To-do List</h1>
      </div>
  <form onSubmit={add} >
      <div className='flex items-center  bg-gray-200 rounded-full h-14 my-7'>
        
        <input ref={inputRef} type="text" className='flex-1 pl-4 pr-2 outline-0 placeholder:text-slate-600'placeholder='Add your task' />
        <button className='bg-orange-600 h-full rounded-full w-32 text-[18px] text-white font-semibold cursor-pointer' type='submit'>ADD + </button>
        
      </div>
      </form>
      <div>
        {todolist.map((item,index) =>{
          return <Todoitems key={index} text={item.text} isComplete={item.isComplete} id={item.id}   deleteItem={deleteItem} toggle={toggle} />
        }
        
        )}
        
       
        
      </div>
      
    </div>
  )
}

export default Todo