"use client"
import { useContext } from "react"
import { context } from "@/app/Context"

export default function ClientA() {
  const result = useContext(context)
  if (result === undefined) {
    throw new Error("useContext must be inside a Provider with a value")
  }
  const { state, setState } = result
  return (
    <div>
      Current State: {state}
      <button onClick={() => setState(state + 1)}>Change State</button>
    </div>
  )
}
