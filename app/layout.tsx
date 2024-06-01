import Context from "@/app/Context"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Context>
          {children}
        </Context>
      </body>
    </html>
  )
}
