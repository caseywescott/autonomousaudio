import './globals.css'

export const metadata = {
  title: 'AutonomousAudio-for-Starknet',
  description: 'AutonomousAudio Controller on Starknet network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        {children}</body>
    </html>
  )
}
