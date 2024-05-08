"use client"
import { createContext, useState } from "react"
import { Dispatch, SetStateAction, ReactNode } from "react"

type ContextType =
  | {
      state: number
      setState: Dispatch<SetStateAction<number>>
    }
  | undefined

export const Context = createContext<ContextType>(undefined)

export function ContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(0)
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}
