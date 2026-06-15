"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { todoReducer, initialState } from "./reducer";

const TodoContext = createContext<any>(null);

export function TodoProvider({ children: children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}