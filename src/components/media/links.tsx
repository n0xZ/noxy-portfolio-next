import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '~/components/ui/tooltip'
import { GithubIcon } from '~/components/icons/github'
import { GmailIcon } from '~/components/icons/gmail'
import LinkedinIcon from '~/components/icons/linkedin'

import { TwitterIcon } from '~/components/icons/twitter'
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
						<GithubIcon />
					</a>
				</TooltipTrigger>
				<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
					<p className="text-white">Github profile</p>
				</TooltipContent>
			</Tooltip>
			<Tooltip>
				<TooltipTrigger asChild>
					<a
						aria-label="Twitter profile"
						href="https://twitter.com/undefin0x"
						target="_blank"
						rel="noopener"
						className="w-10 p-0 rounded-full hover:opacity-70"
					>
						<TwitterIcon />
					</a>
				</TooltipTrigger>
				<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
					<p className="text-white">Twitter profile</p>
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
						<LinkedinIcon />
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
						<GmailIcon />
					</a>
				</TooltipTrigger>
				<TooltipContent className="bg-[#1b1b1b] border-2 border-[#1b1b1b]">
					<p className="text-white">My Gmail</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
