import { Nunito } from 'next/font/google'
import { GithubIcon } from '~/components/icons/github'
import { GmailIcon } from '~/components/icons/gmail'
import LinkedinIcon from '~/components/icons/linkedin'
import { TwitterIcon } from '~/components/icons/twitter'
import ProjectList from '~/components/project/list'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '~/components/ui/tooltip'
import { getProjects } from '~/utils/projects'
const nunito = Nunito({ weight: '300', subsets: ['latin'] })
export default function Home() {
	const projects = getProjects()
	return (
		<main
			className={`${nunito.className} container  max-w-5xl  h-full  mx-auto  xl:text-xl lg:text-lg md:text-md     antialised xl:mt-0 mt-4`}
		>
			<section
				className="flex flex-col self-center justify-center w-full h-screen space-y-2 leading-loose border-b-2 border-[#4a4a4a]"
				id="#"
			>
				<h1 className={` mb-6 text-3xl font-bold xl:mt-0 lg:mt-0   md:mt-12 sm:mt-6`}>
					Welcome 👋🏻
				</h1>
				<p className="text-secondary">
					I&apos;m Gonzalo. Software developer based in Argentina. I&apos;ve been
					studying programming since I was at high school, starting from C++, C# to
					Java.
				</p>
				<p>
					I&apos;m a very curious person, that tries to stay up to date with new
					technologies related to Front-end, backend, in order to build a skillset to
					solve issues.
				</p>
				<p className="text-muted">
					Some of the technologies that i&apos;ve been implementing with are React,
					Vue, SolidJS, Typescript and NextJS with Prisma, Drizzle ORM, PostgreSQL.
				</p>
				<p className="mb-12 text-muted">
					Fun fact: I&apos;m a big World of Warcraft fan since Burning Crusade
					expansion. My favourite class was rogue.
				</p>
				<article className="flex flex-col items-center justify-around w-full h-40 gap-3 font-medium xl:flex-row">
					<a href="mailto:molinagonzalo33@gmail.com" className="underline">
						Contact me
					</a>
					<a
						href="https://drive.google.com/file/d/1DTFIV4rhpbJ6QXbBrNd6JsitGwtR-U-7/view?usp=share_link"
						className="w-64 p-3 text-center rounded-md bg-[#fdfdfd]  text-[#0f0f0f] hover:opacity-70 duration-100 ease-in-out"
					>
						View resume
					</a>
				</article>
			</section>
			<section
				className="flex flex-col justify-center h-full min-h-screen"
				id="projects"
			>
				<h3 className="mt-24 mb-6 text-3xl font-bold">Projects</h3>
				<ProjectList projects={projects} />
			</section>
			<footer className="flex flex-row items-center justify-between p-8 border-t-2 border-[#1b1b1b] mt-6">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<a
								aria-label="Github profile"
								className="w-10 p-0 rounded-full hover:opacity-70 "
								href="https://github.com/n0xZ"
								target="_blank"
								rel="noopener"
							>
								<GithubIcon />
							</a>
						</TooltipTrigger>
						<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
							<p className="text-white">Github profile</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<a
								aria-label="Twitter profile"
								href="https://twitter.com/undefin0x"
								target="_blank"
								rel="noopener"
								className="w-10 p-0 rounded-full hover:opacity-70"
							>
								<TwitterIcon />
							</a>
						</TooltipTrigger>
						<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
							<p className="text-white">Twitter profile</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<a
								aria-label="LinkedIn profile"
								href="https://www.linkedin.com/in/gonzalo-molina-153918217/"
								target="_blank"
								rel="noopener"
								className="w-10 p-0 text-white rounded-full hover:opacity-70"
							>
								<LinkedinIcon />
							</a>
						</TooltipTrigger>
						<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
							<p className="text-white">LinkedIn profile</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<a
								aria-label="My Gmail"
								href="mailto:molinagonzalo33@gmail.com"
								target="_blank"
								rel="noopener"
								className="w-10 p-0 text-white rounded-full hover:opacity-70"
							>
								<GmailIcon />
							</a>
						</TooltipTrigger>
						<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
							<p className="text-white">My Gmail</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</footer>
		</main>
	)
}
