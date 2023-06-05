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
			<head>
				<meta name="title" content="Gonzalo Molina" />
				<meta name="description" content="Software developer based in Argentina." />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://n0xz.vercel.app/" />
				<meta property="og:title" content="Gonzalo Molina" />
				<meta
					property="og:description"
					content="Software developer based in Argentina."
				/>
				<meta property="og:image" content="~/public/preview-portfolio.png" />

				<meta property="twitter:card" content="~/public/preview-portfolio.png" />
				<meta property="twitter:url" content="https://n0xz.vercel.app/" />
				<meta property="twitter:title" content="Gonzalo Molina" />
				<meta
					property="twitter:description"
					content="Software developer based in Argentina."
				/>
				<meta property="twitter:image" content="~/public/preview-portfolio.png"></meta>
			</head>
			<body className=" bg-[#0f0f0f] text-[#fdfdfd]">
				<header
					className={`${varta.className} p-8 sticky top-0 z-0   bg-[#181818]/30`}
				>
					<nav className="container flex flex-row items-center justify-between max-w-6xl mx-auto">
						<a href="#" className="text-2xl duration-100 ease-in-out hover:underline">
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
