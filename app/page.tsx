import { ContextProvider } from "@/app/Context"
import ClientA from "@/app/ClientA"
import ClientB from "@/app/ClientB"
export default function Home() {
  return (
    <ContextProvider>
      <ClientA />
      <ClientB />
    </ContextProvider>
  )
}
