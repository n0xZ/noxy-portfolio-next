type Stack = 'React' | 'Vue' | 'Svelte' | 'SolidJS' | 'Preact'
export type Project = {
	title: string
	link: string
	description: string
	stack: Stack
}
export const getProjects = (): Project[] => [
	{
		title: 'Mockxny',
		link: 'https://mockxny.vercel.app/',
		description:
			'Shopping cart , where the user can select its products, an perform its payment.',
		stack: 'React',
	},
	{
		title: 'React Quiz',
		link: 'https://quiz-react-typescript.vercel.app/',
		description:
			'Quiz that contains differents questions from differents genres, such as Entertainment, Science, History, etc.',
		stack: 'React',
	},
	{
		title: 'Guess Pokemon',
		link: 'https://guess-pokemon-solid.vercel.app/',
		description:
			'Pokemon game, where the user must visualize an image from an Pokemon, and must guess which one is it.',
		stack: 'SolidJS',
	},
	{
		title: 'Giphyx',
		link: 'https://giphyx.vercel.app/',
		description:
			'Web-app where you can find differents gifs from Giphy, and save your favourite ones.',
		stack: 'React',
	},
	{
		title: 'Fyx',
		link: 'https://fyx-dev.netlify.app/',
		description: 'Web-app, where you can find information about Studio Ghibli.',
		stack: 'Vue',
	},
	{
		title: 'Herox',
		link: 'https://herox-beta.vercel.app/',
		description:
			'Web-app, where you can find differents heroes from DC/Marvel, create an team based on heroes from those comics.',
		stack: 'React',
	},
	{
		title: 'Notyx',
		link: 'https://notyx.vercel.app/',
		description: 'Web-app where you can create an collection of notes.',
		stack: 'React',
	},
	{
		title: 'Noxy recommendations ',
		link: 'https://noxy-codyx.vercel.app/',
		description:
			'Web-app, where you  can create your recommendations, such as movies, anime, manga, etc.',
		stack: 'Svelte',
	},
	{
		title: 'Nexy',
		link: 'https://noxy-nexy.netlify.app/',
		description: 'Website, where you can create your projects, by markdown.',
		stack: 'Vue',
	},
	{
		title: 'Moden',
		link: 'https://noxy-moden.netlify.app/',
		description: 'Website where you can get an weather based your location',
		stack: 'SolidJS',
	},

	{
		title: 'Noxy feriados',
		link: 'https://noxy-feriados.vercel.app/',
		description: 'Web-app, where you can find the holidays from your country.',
		stack: 'React',
	},
	{
		title: 'Noxy chat',
		link: 'https://noxy-chat.netlify.app/',
		description: 'Chat app, where you can chat with your friends.',
		stack: 'Vue',
	},
	{
		title: 'Noxy secrets',
		link: 'https://noxy-secrets.vercel.app/',
		description: 'Web-app, where you can save your env secrets.',
		stack: 'Svelte',
	},
	{
		title: 'Noxy solix',
		description: 'Web app where you can define your shopping list',
		link: 'https://noxy-solix.netlify.app/',
		stack: 'SolidJS',
	},
	{
		title: 'Noxy cronometre',
		description: 'Web app where you define a task with its remaining time.',
		link: 'https://noxy-cronometre.netlify.app/',
		stack: 'Preact',
	},
	{
		title: 'Noxy  calendar',
		description:
			'Web app where you can define your reminders into your calendar.',
		link: 'https://noxy-calendar.netlify.app/',
		stack: 'React',
	},
]
