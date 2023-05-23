import { match } from 'ts-pattern'
import { Project } from '~/utils/projects'
import { ReactIcon } from '../icons/react'
import { VueIcon } from '../icons/vue'
import { SvelteIcon } from '../icons/svelte'
import { SolidjsIcon } from '../icons/solidjs'
import { PreactIcon } from '../icons/preact'
type Props = {
	item: Project
}
export function ProjectItem(props: Props) {
	const HoverCardColor = match(props.item.stack)
		.when(
			(v) => v === 'React',
			() => 'hover:bg-sky-600/50'
		)
		.when(
			(v) => v === 'Vue',
			() => 'hover:bg-emerald-400/50'
		)
		.when(
			(v) => v === 'Preact',
			() => 'hover:bg-violet-600/50'
		)
		.when(
			(v) => v === 'SolidJS',
			() => 'hover:bg-sky-400/50'
		)
		.when(
			(v) => v === 'Svelte',
			() => 'hover:bg-orange-400/50'
		)
		.otherwise(() => null)
	return (
		<a
			href={props.item.link}
			target="_blank"
			rel="noreferrer"
			key={props.item.link}
			className={`h-36 w-full text-[#dde1e3] rounded-md ${HoverCardColor}   duration-100 ease-in-out flex flex-row justify-around items-center p-`}
		>
			{match(props.item.stack)
				.when(
					(v) => v === 'React',
					() => <ReactIcon />
				)
				.when(
					(v) => v === 'Vue',
					() => <VueIcon />
				)
				.when(
					(v) => v === 'Svelte',
					() => <SvelteIcon />
				)
				.when(
					(v) => v === 'SolidJS',
					() => <SolidjsIcon />
				)
				.when(
					(v) => v === 'Preact',
					() => <PreactIcon />
				)
				.otherwise(() => null)}
			<div className="flex flex-col items-center justify-center w-8/12 gap-2 text-center">
				<h4 className="font-bold text-center">{props.item.title}</h4>
				<p className="text-ellipsis text-[#d8dcdf] text-center">
					{props.item.description}
				</p>
			</div>
		</a>
	)
}
