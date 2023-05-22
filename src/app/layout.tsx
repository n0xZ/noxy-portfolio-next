import './globals.css'
import { Varta } from 'next/font/google'

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
			<body className=" bg-[#0f0f0f] text-[#fdfdfd]">
				<header
					className={`${varta.className} p-8  mx-auto max-w-6xl z-0 sticky top-0 bg-[#0f0f0f]`}
				>
					<nav className="container flex flex-row items-center justify-between ">
						<a
							href="#"
							className="text-2xl duration-100 ease-in-out hover:opacity-60"
						>
							GM
						</a>
						<a
							href="#projects"
							className="text-2xl duration-100 ease-in-out hover:opacity-60"
						>
							Projects
						</a>
					</nav>
				</header>
				{children}
			</body>
		</html>
	)
}
