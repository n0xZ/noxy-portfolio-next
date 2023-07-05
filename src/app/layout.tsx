import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: '300' })

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
		<html lang="en" className="scroll-smooth dark">
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
			<body className={` ${inter.className} bg-background text-primary`}>
				<header className="sticky top-0 z-0 p-5 border-b-2 bg-background/50 backdrop-blur border-primary/10">
					<nav className="container flex flex-row items-center justify-between max-w-5xl mx-auto text-lg">
						<a
							href="#"
							className="font-bold duration-100 ease-in-out hover:underline"
						>
							GM
						</a>
						<a
							href="#projects"
							className="duration-100 ease-in-out hover:underline text-primary/70"
						>
							Projects
						</a>
					</nav>
				</header>
				<main className="container h-full max-w-5xl mx-auto mt-4 antialised xl:mt-0">
					{children}
				</main>
			</body>
		</html>
	)
}
