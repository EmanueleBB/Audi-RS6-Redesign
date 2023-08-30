import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import SubNavbar from './components/navbar/SubNavbar'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  	title: 'Audi RS6 Avant',
  	description: "A redesign of a really nice car's landing page",
}

const audiFont = localFont({
	src: './AudiTypeVF_4.04.ttf',
	display: 'swap',
 })

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={audiFont.className}>
				<Navbar/>
				<SubNavbar/>
				{children}
			</body>
		</html>
	)
}
