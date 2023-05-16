import ThemeSwitcher from '~/components/theme-switcher'
import './globals.css'
import { Varta } from 'next/font/google'
import Link from 'next/link'

const varta = Varta({ subsets: ['latin'], weight: '400' })

export const metadata = {
	title: 'Gonzalo Molina',
	description: 'Software developer.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${varta.className} bg-[#0f0f0f] text-[#dee2e6] `}>
				{children}
			</body>
		</html>
	)
}
