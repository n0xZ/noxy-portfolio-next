import { MediaLinks } from '~/components/media/links'
import ProjectList from '~/components/project/list'

import { getProjects } from '~/utils/projects'
export const metadata = {
	title: 'Gonzalo Molina',
	description: 'Software developer.',
}

export default function Home() {
	const projects = getProjects()
	return (
		<>
			<section
				className="flex flex-col self-center justify-center w-full h-full min-h-screen space-y-2 leading-loose text-[#d8dcdf] "
				id="#"
			>
				<h1
					className={` mb-6 text-3xl font-bold xl:mt-0 lg:mt-0   md:mt-12 sm:mt-6`}
				>
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
				<p>
					Some of the technologies that i&apos;ve been implementing with are React,
					Vue, SolidJS, Typescript and NextJS with Prisma, Drizzle ORM, PostgreSQL.
				</p>
				<p>
					Fun fact: I&apos;m a big World of Warcraft fan since Burning Crusade
					expansion. My favourite class was rogue.
				</p>
				<article className="flex flex-row items-center justify-center w-full font-medium gap-7 h-36 ">
					<MediaLinks />
				</article>
			</section>
			<section
				className="flex flex-col justify-center h-full min-h-screen"
				id="projects"
			>
				<h2 className="mt-24 mb-6 text-3xl font-bold">Projects</h2>
				<ProjectList projects={projects} />
			</section>
			<footer className="text-center p-8 border-t-2 border-[#1b1b1b] mt-6 text-[#4a4a4a]">
				<p>© 2023, n0xZ. Powered by Next 13 + RSC 🖤</p>
			</footer>
		</>
	)
}
