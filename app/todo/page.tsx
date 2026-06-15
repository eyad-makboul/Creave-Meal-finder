"use client";

import { useState } from "react";
import { TodoProvider, useTodo } from "./context";

function TodoApp() {
  const [input, setInput] = useState("");
  const { state, dispatch } = useTodo();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (!input.trim()) return;

    dispatch({
      type: "ADD",
      payload: input,
    });

    setInput("");
  };

  return (
    <div className="w-full max-w-md mx-auto my-auto bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 p-6 md:p-8 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-black text-amber-500 mb-6 tracking-wide flex items-center gap-2">
        <span>✓</span> To Do List
      </h2>

      <form onSubmit={handleAdd} className="flex gap-3 mb-6">
        <input
          id="todo"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 bg-stone-950 text-white placeholder-stone-500 border border-stone-800 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200 shadow-inner"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-xl shadow-lg shadow-amber-500/10 active:scale-95 transition-all duration-200"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
        {state.todos.length === 0 ? (
          <div className="text-center py-8 text-stone-500 border border-dashed border-stone-800 rounded-xl">
            <p className="text-sm font-medium">Your checklist is empty!</p>
          </div>
        ) : (
          state.todos.map((todo: string, index: number) => (
            <li
              key={index}
              className="p-4 bg-stone-950 border border-stone-800/80 rounded-xl flex justify-between items-center group transition-all duration-200 hover:border-stone-700"
            >
              <span className="text-stone-300 font-medium text-sm break-all pr-4">{todo}</span>

              <button
                type="button"
                onClick={() => dispatch({ type: "DELETE", payload: index })}
                className="px-3 py-2 bg-red-950/40 text-red-400 hover:bg-red-600 hover:text-white text-xs font-bold border border-red-900/50 rounded-lg transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}


export default function Home() {
  return (
    <TodoProvider>
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <TodoApp />
      </div>
    </TodoProvider>
  );
}