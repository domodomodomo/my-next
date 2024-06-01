"use client"
import { useContext } from "react"
import { context } from "@/app/Context"

export default function ClientA() {
  const { state, setState } = useContext(context)
  return (
    <div>
      Current State: {state}
      <button onClick={() => setState(state + 1)}>Change State</button>
    </div>
  )
}
