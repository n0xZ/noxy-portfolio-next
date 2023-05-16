import { Project } from '~/utils/projects'

type Props = {
	projects: Project[]
}
export default function ProjectList(props: Props) {
	return (
		<ol className="grid w-full h-full grid-cols-1 gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 xl:gap-6 lg:gap-5 place-items-center">
			{props.projects.map((p) => (
				<li
					key={p.link}
					className="underline list-decimal duration-100 ease-in-out hover:opacity-70 text-[#dde1e3] "
				>
					<a href={p.link} target="_blank" rel="noreferrer" className="">
						{p.title}
					</a>
				</li>
			))}
		</ol>
	)
}
