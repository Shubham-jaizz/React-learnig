import React, { useState } from 'react'
import { useTodoContext } from '../contexts';

function TodoItem({ todo }) {

    const [isToDoEditable, setIsToDoEditable] = useState(false);
    const [toDoMsg,setToDoMsg] = useState(todo.content)
    const {updateTodo,deleteTodo,toggleCheck} = useTodoContext();

    const editTodo = ()=>{
        updateTodo(todo.id,toDoMsg);
        setIsToDoEditable(false);
    }

    const toggleChecked = ()=>{
        toggleCheck(todo.id);
        
    }
   


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.checked}
                onChange={toggleChecked}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isToDoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.checked ? "line-through" : ""}`}
                value={toDoMsg}
                onChange={(e) => setToDoMsg(e.target.value)}
                readOnly={!isToDoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.checked) return;

                    if (isToDoEditable) {
                        editTodo();
                    } else setIsToDoEditable((prev) => !prev);
                }}
                disabled={todo.checked}
            >
                {isToDoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
