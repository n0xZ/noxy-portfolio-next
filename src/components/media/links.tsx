import {GithubIcon,Mail,LinkedinIcon } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '~/components/ui/tooltip'

export function MediaLinks() {
	return (
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
						<GithubIcon className='h-7 w-7' />
					</a>
				</TooltipTrigger>
				<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
					<p className="text-white">Github profile</p>
				</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<a
						aria-label="LinkedIn profile"
						href="https://www.linkedin.com/in/g-molina/"
						target="_blank"
						rel="noopener"
						className="w-10 p-0 text-white rounded-full hover:opacity-70"
					>
						<LinkedinIcon className='h-7 w-7' />
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
						<Mail  className='h-7 w-7'  />
					</a> 
				</TooltipTrigger>
				<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
					<p className="text-white">My Gmail</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
