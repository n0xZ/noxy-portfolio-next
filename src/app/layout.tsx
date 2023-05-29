import './globals.css'
import { Nunito, Varta } from 'next/font/google'

const varta = Varta({ subsets: ['latin'], weight: '400' })
const nunito = Nunito({ weight: '300', subsets: ['latin'] })
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
							className="text-2xl duration-100 ease-in-out hover:underline"
						>
							GM
						</a>
						<a
							href="#projects"
							className="text-2xl duration-100 ease-in-out hover:underline"
						>
							Projects
						</a>
					</nav>
				</header>
				<main
					className={`${nunito.className} container  max-w-5xl  h-full  mx-auto  xl:text-xl lg:text-lg md:text-md     antialised xl:mt-0 mt-4`}
				>
					{children}
				</main>
			</body>
		</html>
	)
}
