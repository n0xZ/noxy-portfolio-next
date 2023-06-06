import { Project } from '~/utils/projects'

import { ProjectItem } from './item'

type Props = {
	projects: Project[]
}
export default function ProjectList(props: Props) {
	return (
		<article className="grid w-full h-full grid-cols-1 gap-5 gap-y-5 gap-x-2 place-items-center">
			{props.projects.map((p) => (
				<ProjectItem item={p} key={p.link} />
			))}
		</article>
	)
}
