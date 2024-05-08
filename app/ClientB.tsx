"use client"
import { useContext } from "react"
import { Context } from "@/app/Context"

export default function ClientB() {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error("useContext must be inside a Provider with a value")
  }
  const { state, setState } = context
  return (
    <div>
      Current State: {state}
      <button onClick={() => setState(state + 2)}>Change State</button>
    </div>
  )
}