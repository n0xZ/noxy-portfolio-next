import { MediaLinks } from '~/components/media/links'
import ProjectList from '~/components/project/list'
import Paragraph from '~/components/ui/paragraph'

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
				className="flex flex-col justify-center w-full h-full min-h-screen space-y-2 leading-loose "
				id="#"
			>
				<h1
					className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
				>
					Welcome 👋🏻
				</h1>
				<article className="w-full text-primary/80">
					{' '}
					<Paragraph>
						I&apos;m Gonzalo. Software developer based in Argentina. I&apos;ve been
						studying programming since I was at high school, starting from C++, C# to
						Java.
					</Paragraph>
					<Paragraph>
						I&apos;m a very curious person, that tries to stay up to date with new
						technologies related to Front-end, backend, in order to build a skillset
						to solve issues.
					</Paragraph>
					<Paragraph>
						Some of the technologies that i&apos;ve been implementing with are React,
						Vue, SolidJS, Typescript and NextJS with Prisma, Drizzle ORM, PostgreSQL.
					</Paragraph>
					<Paragraph>
						Fun fact: I&apos;m a big World of Warcraft fan since Burning Crusade
						expansion. My favourite class was rogue.
					</Paragraph>
				</article>
				<article className="flex flex-row items-center justify-center w-full font-medium gap-7 h-36">
					<MediaLinks />
				</article>
			</section>
			<section
				className="flex flex-col justify-center h-full min-h-screen"
				id="projects"
			>
				<h2 className="pb-2 mb-8 text-3xl font-semibold tracking-tight transition-colors border-b border-secondary/20 scroll-m-20 first:mt-0">
					Projects
				</h2>
				<ProjectList projects={projects} />
			</section>
			<footer className="text-center p-8 border-t-2 border-[#1b1b1b] mt-6 text-[#4a4a4a]">
				<Paragraph>© 2023, n0xZ. Powered by Next 13 + RSC 🖤</Paragraph>
			</footer>
		</>
	)
}
