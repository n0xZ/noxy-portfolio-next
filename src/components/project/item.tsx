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
			className="flex flex-row items-center justify-around w-full p-1 duration-150 ease-in-out rounded-md h-44 hover:bg-primary-foreground/5"
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
				<Paragraph className="text-center text-primary-foreground/80 ">
					{props.item.description}
				</Paragraph>
			</div>
		</a>
	)
}
