export type Project = {
	title: string
	link: string
	description: string
}
export const getProjects = (): Project[] => [
	{
		title: 'Mockxny',
		link: 'https://mockxny.vercel.app/',
		description:
			'Shopping cart , where the user can select its products, an perform its payment.',
	},
	{
		title: 'React Quiz',
		link: 'https://quiz-react-typescript.vercel.app/',
		description:
			'Quiz that contains differents questions from differents genres, such as Entertainment, Science, History, etc.',
	},
	{
		title: 'Guess Pokemon',
		link: 'https://guess-pokemon-solid.vercel.app/',
		description:
			'Pokemon game, where the user must visualize an image from an Pokemon, and must guess which one is it.',
	},
	{
		title: 'Giphyx',
		link: 'https://giphyx.vercel.app/',
		description:
			'Web-app where you can find differents gifs from Giphy, and save your favourite ones.',
	},
	{
		title: 'Fyx',
		link: 'https://fyx-dev.netlify.app/',
		description: 'Web-app, where you can find information about Studio Ghibli.',
	},
	{
		title: 'Herox',
		link: 'https://herox-beta.vercel.app/',
		description:
			'Web-app, where you can find differents heroes from DC/Marvel, create an team based on heroes from those comics.',
	},
	{
		title: 'Notyx',
		link: 'https://notyx.vercel.app/',
		description: 'Web-app where you can create an collection of notes.',
	},
	{
		title: 'Noxy recommendations ',
		link: 'https://noxy-codyx.vercel.app/',
		description:
			'Web-app, where you  can create your recommendations, such as movies, anime, manga, etc.',
	},
	{
		title: 'Nexy',
		link: 'https://noxy-nexy.netlify.app/',
		description: 'Website, where you can create your projects, by markdown.',
	},
	{
		title: 'Moden',
		link: 'https://noxy-moden.netlify.app/',
		description: 'Website where you can get an weather based your located',
	},

	{
		title: 'Noxy feriados',
		link: 'https://noxy-feriados.vercel.app/',
		description: 'Web-app, where you can find the holidays from your country.',
	},
	{
		title: 'Noxy chat',
		link: 'https://noxy-chat.netlify.app/',
		description: 'Chat app, where you can chat with your friends.',
	},
	{
		title: 'Noxy secrets',
		link: 'https://noxy-secrets.vercel.app/',
		description: 'Web-app, where you can save your env secrets.',
	},
]
