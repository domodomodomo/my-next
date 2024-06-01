"use client"
import { useContext } from "react"
import { context } from "@/app/Context"

export default function ClientB() {
  const { state, setState } = useContext(context)
  return (
    <div>
      Current State: {state}
      <button onClick={() => setState(state + 2)}>Change State</button>
    </div>
  )
}
