"use client"
import { createContext, useState } from "react"
import { Dispatch, SetStateAction, ReactNode } from "react"

type ContextType = {
  state: number
  setState: Dispatch<SetStateAction<number>>
}

const initialContext = {
  state: 0,
  setState: () => { throw new Error("Context not initialized") }
}

export const context = createContext<ContextType>(initialContext)

export default function Context({ children }: { children: ReactNode }) {
  const [state, setState] = useState(0)
  return (
    <context.Provider value={{ state, setState }}>{children}</context.Provider>
  )
}
