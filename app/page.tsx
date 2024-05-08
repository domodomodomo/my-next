import { ContextProvider } from "@/app/Context"
import ClientA from "@/app/ClientA"
import ClientB from "@/app/ClientB"
export default function Home() {
  return (
    <ContextProvider>
      {process.env.PWD}
      <ClientA />
      <ClientB />
    </ContextProvider>
  )
}
