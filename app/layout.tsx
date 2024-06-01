// app/Context.tsx
import Context from "@/app/Context"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        {/* You can wrap this children, server component, by Context */}
        <Context>{children}</Context>
      </body>
    </html>
  )
}
