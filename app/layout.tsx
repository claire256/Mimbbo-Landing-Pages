import "../styles/globals.css"

export const metadata = {
  title: "Mimbbo - Beauty Marketplace",
  description: "Find your next beauty gig or professional",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
