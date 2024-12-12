import { useInsertionEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './contexts';
import { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos,setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos)=>{
      return [{id:Date.now(),...todo},...prevTodos];
    })
  }
  function deleteTodo(id) {
    setTodos((prevTodos)=>{
      const todos = prevTodos.filter((x)=>{
        return x.id !== id;
      })
      return todos;
    })
  }
  function updateTodo(id,item) {
    setTodos((prevTodos)=>{
      const todos = prevTodos.map((x)=>{
        if(x.id === id){
          x.content = item;
         
        }
        return x;
        
      })
      return todos;
    })
  }
  function toggleCheck(id) {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, 
          checked: !prevTodo.checked } : prevTodo))
  }

   useEffect(() => {
     const myTodos = JSON.parse(localStorage.getItem('todos'));
     if(myTodos && myTodos.length > 0)
     setTodos(myTodos);
   }, [])
   
   useEffect(() => { 
    localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos])
   

  return (
    <>
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCheck}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              <div className='w-full'>
                {todos.map((todo)=>(
                    <TodoItem key={todo.id} todo ={todo}/>   
                ))}
              </div>
            </div>
        </div>
      </div>
      </TodoContextProvider>
    </>
  )
}

export default App
