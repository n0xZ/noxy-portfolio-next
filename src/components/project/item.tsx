import { match } from 'ts-pattern'
import { Project } from '~/utils/projects'
import { ReactIcon } from '../icons/react'
import { VueIcon } from '../icons/vue'
import { SvelteIcon } from '../icons/svelte'
import { SolidjsIcon } from '../icons/solidjs'
import { PreactIcon } from '../icons/preact'
import Paragraph from '../ui/paragraph'
type Props = {
	item: Project
}
export function ProjectItem(props: Props) {
	return (
		<a
			href={props.item.link}
			target="_blank"
			rel="noreferrer"
			key={props.item.link}
			className=" h-44 w-full text-[#dde1e3] rounded-md hover:bg-[#181818]/80 duration-150 ease-in-out flex flex-row justify-around items-center p-1"
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
			<div className="flex flex-col items-center justify-center w-8/12 text-center">
				<h3 className="text-2xl font-semibold tracking-tight text-center scroll-m-20">
					{props.item.title}
				</h3>
				<Paragraph className="text-center opacity-60 ">
					{props.item.description}
				</Paragraph>
			</div>
		</a>
	)
}
