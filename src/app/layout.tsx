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

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://n0xz.vercel.app/" />
				<meta property="twitter:title" content="Gonzalo Molina" />
				<meta
					property="twitter:description"
					content="Software developer based in Argentina."
				/>
				<meta
					property="twitter:image"
					content="https://noxy-portfolio-gvpafesfb-n0xz.vercel.app/opengraph-image.png?c6108438d3c72f68"
				/>
			</head>
			<body className='bg-primary text-primary-foreground'>
				<header
					className={`${varta.className} p-5 sticky   top-0 bg-primary/80  backdrop-blur border-b-2 border-secondary/10`}
				>
					<nav className="container flex flex-row items-center justify-between max-w-6xl mx-auto text-lg">
						<a href="#" className="font-bold duration-100 ease-in-out hover:underline">
							GM
						</a>
						<a href="#projects" className="duration-100 ease-in-out hover:underline text-primary-foreground/50">
							Projects
						</a>
					</nav>
				</header>
				<main
					className={`${nunito.className} container  max-w-5xl  h-full  mx-auto       antialised xl:mt-0 mt-4`}
				>
					{children}
				</main>
			</body>
		</html>
	)
}
