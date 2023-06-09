import { match } from 'ts-pattern'
import { Project } from '~/utils/projects'

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
			className="flex flex-row items-center justify-around w-full p-1 duration-150 ease-in-out rounded-md h-44 hover:bg-primary/5"
		>
			{match(props.item.stack)
				.when(
					(v) => v === 'React',
					() => (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="w-10 h-10 duration-100 ease-in-out text-sky-400 hover:opacity-70"
						>
							<path
								fill="currentColor"
								d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"
							/>
						</svg>
					)
				)
				.when(
					(v) => v === 'Vue',
					() => (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							className="w-10 h-10 duration-100 ease-in-out text-emerald-400 hover:opacity-70"
						>
							<path
								fill="currentColor"
								d="m3 6l13 22L29 6H19l-3 5.3L13 6H3zm3.5 2h3.771L16 18l5.729-10H25.5L16 24.1L6.5 8z"
							/>
						</svg>
					)
				)
				.when(
					(v) => v === 'Svelte',
					() => (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="w-10 h-10 text-orange-400 duration-100 ease-in-out hover:opacity-70"
						>
							<path
								fill="currentColor"
								d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767a4.109 4.109 0 0 1-.703-3.107a3.898 3.898 0 0 1 .134-.522l.105-.321l.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063l-.02.208a1.253 1.253 0 0 0 .226.83a1.337 1.337 0 0 0 1.435.533a1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778a1.242 1.242 0 0 0-.211-.937a1.338 1.338 0 0 0-1.435-.533a1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499a4.44 4.44 0 0 1-4.765-1.766a4.108 4.108 0 0 1-.702-3.108a3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499a4.44 4.44 0 0 1 4.765 1.767a4.109 4.109 0 0 1 .703 3.107a3.943 3.943 0 0 1-.134.522l-.105.321l-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063l.02-.207a1.255 1.255 0 0 0-.226-.831a1.337 1.337 0 0 0-1.435-.532a1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778a1.24 1.24 0 0 0 .211.937a1.338 1.338 0 0 0 1.435.533a1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498a4.44 4.44 0 0 1 4.765 1.766a4.108 4.108 0 0 1 .702 3.108a3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295a6.753 6.753 0 0 0 .666 4.336a6.43 6.43 0 0 0-.96 2.396a6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295a6.756 6.756 0 0 0-.665-4.336a6.429 6.429 0 0 0 .958-2.396a6.831 6.831 0 0 0-1.167-5.168Z"
							/>
						</svg>
					)
				)
				.when(
					(v) => v === 'SolidJS',
					() => (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="256"
							height="239"
							viewBox="256 239 256 239"
							className="w-10 h-10 duration-100 ease-in-out hover:opacity-70"
						>
							<defs>
								<linearGradient
									id="logosSolidjsIcon0"
									x1="27.5"
									x2="152"
									y1="3"
									y2="63.5"
									gradientTransform="translate(249.56 233.12) scale(1.61006)"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset=".1" stopColor="#76b3e1" />
									<stop offset=".3" stopColor="#dcf2fd" />
									<stop offset="1" stopColor="#76b3e1" />
								</linearGradient>
								<linearGradient
									id="logosSolidjsIcon1"
									x1="95.8"
									x2="74"
									y1="32.6"
									y2="105.2"
									gradientTransform="translate(249.56 233.12) scale(1.61006)"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0" stopColor="#76b3e1" />
									<stop offset=".5" stopColor="#4377bb" />
									<stop offset="1" stopColor="#1f3b77" />
								</linearGradient>
								<linearGradient
									id="logosSolidjsIcon2"
									x1="18.4"
									x2="144.3"
									y1="64.2"
									y2="149.8"
									gradientTransform="translate(249.56 233.12) scale(1.61006)"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0" stopColor="#315aa9" />
									<stop offset=".5" stopColor="#518ac8" />
									<stop offset="1" stopColor="#315aa9" />
								</linearGradient>
								<linearGradient
									id="logosSolidjsIcon3"
									x1="75.2"
									x2="24.4"
									y1="74.5"
									y2="260.8"
									gradientTransform="translate(249.56 233.12) scale(1.61006)"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0" stopColor="#4377bb" />
									<stop offset=".5" stopColor="#1a336b" />
									<stop offset="1" stopColor="#1a336b" />
								</linearGradient>
							</defs>
							<path
								fill="#76b3e1"
								d="M512 289.472s-85.333-62.791-151.347-48.301l-4.829 1.61c-9.66 3.221-17.711 8.05-22.542 14.491l-3.219 4.829l-24.152 41.862l41.863 8.051c17.71 11.27 40.251 16.101 61.182 11.27l74.063 14.491L512 289.472Z"
							/>
							<path
								fill="url(#logosSolidjsIcon0)"
								d="M512 289.472s-85.333-62.791-151.347-48.301l-4.829 1.61c-9.66 3.221-17.711 8.05-22.542 14.491l-3.219 4.829l-24.152 41.862l41.863 8.051c17.71 11.27 40.251 16.101 61.182 11.27l74.063 14.491L512 289.472Z"
								opacity=".3"
							/>
							<path
								fill="#518ac8"
								d="m333.282 289.472l-6.439 1.611c-27.371 8.05-35.421 33.811-20.932 56.352c16.101 20.931 49.913 32.201 77.284 24.151l99.824-33.811s-85.334-62.792-149.737-48.303Z"
							/>
							<path
								fill="url(#logosSolidjsIcon1)"
								d="m333.282 289.472l-6.439 1.611c-27.371 8.05-35.421 33.811-20.932 56.352c16.101 20.931 49.913 32.201 77.284 24.151l99.824-33.811s-85.334-62.792-149.737-48.303Z"
								opacity=".3"
							/>
							<path
								fill="url(#logosSolidjsIcon2)"
								d="M465.308 361.925c-18.439-23.036-49.008-32.588-77.283-24.15l-99.823 32.201L256 426.328l180.327 30.592l32.201-57.963c6.441-11.271 4.831-24.15-3.22-37.032Z"
							/>
							<path
								fill="url(#logosSolidjsIcon3)"
								d="M433.106 418.277c-18.439-23.036-49.006-32.588-77.282-24.15L256 426.328s85.333 64.402 151.346 48.303l4.83-1.612c27.371-8.049 37.031-33.81 20.93-54.742Z"
							/>
						</svg>
					)
				)
				.when(
					(v) => v === 'Preact',
					() => (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="w-10 h-10 duration-100 ease-in-out text-violet-700 hover:opacity-70"
						>
							<path
								fill="currentColor"
								d="M12 10.406A1.594 1.594 0 0 0 10.406 12A1.594 1.594 0 0 0 12 13.594A1.594 1.594 0 0 0 13.594 12A1.594 1.594 0 0 0 12 10.406Zm5.499-4.33a2.998 2.998 0 0 1 .643.054a1.668 1.668 0 0 1 .48.172a1.085 1.085 0 0 1 .29.235a1.032 1.032 0 0 1 .185.315a1.454 1.454 0 0 1 .084.452c.007.195-.015.398-.058.603a4.54 4.54 0 0 1-.244.778c-.137.334-.304.66-.49.978c-.245.417-.52.818-.817 1.207c-.145.191-.3.376-.455.561c-.22-.238-.443-.472-.673-.7a23.61 23.61 0 0 0-2.05-1.797l-.23.296l.23-.296l-.018-.014l-.461.592l.018.014a22.864 22.864 0 0 1 1.984 1.74c.241.237.475.48.703.73c-.099.108-.194.22-.296.326c-.099.104-.2.207-.301.308l.53.53c.106-.105.21-.212.313-.32c.085-.088.164-.182.248-.272c.065.078.135.152.198.231a13.317 13.317 0 0 1 .909 1.262c.211.336.404.681.564 1.036a5.23 5.23 0 0 1 .293.806a3.019 3.019 0 0 1 .102.637c.008.178-.007.351-.05.508a1.09 1.09 0 0 1-.157.338h-.001a1.005 1.005 0 0 1-.26.256a1.467 1.467 0 0 1-.418.191c-.188.054-.39.081-.6.09c-.266.01-.538-.01-.814-.05a7.615 7.615 0 0 1-1.067-.238c-.464-.137-.92-.307-1.369-.5h-.001a17.633 17.633 0 0 1-1.71-.86l-.025-.015a24.06 24.06 0 0 0 1.686-1.194l-.21-.27l.211.27l.018-.015l-.463-.59l-.017.014a23.151 23.151 0 0 1-2.168 1.505a18.53 18.53 0 0 1-1.827.983a13.4 13.4 0 0 1-1.444.576a8.68 8.68 0 0 1-1.142.296a5.192 5.192 0 0 1-.853.09a3.007 3.007 0 0 1-.643-.055a1.658 1.658 0 0 1-.48-.172a1.026 1.026 0 0 1-.475-.549a1.463 1.463 0 0 1-.084-.453a2.54 2.54 0 0 1 .058-.603c.055-.261.14-.52.245-.777a7.704 7.704 0 0 1 .49-.978a12.09 12.09 0 0 1 1.271-1.767c.232.251.469.497.712.737a23.645 23.645 0 0 0 2.02 1.765l.461-.591a22.9 22.9 0 0 1-1.955-1.709c-.254-.25-.501-.506-.741-.769c.099-.108.195-.219.295-.325a23.3 23.3 0 0 1 .31-.317l-.53-.53c-.108.108-.215.218-.321.328c-.085.089-.165.183-.248.273c-.055-.066-.114-.128-.169-.195a13.787 13.787 0 0 1-.916-1.263a8.723 8.723 0 0 1-.571-1.04a5.257 5.257 0 0 1-.308-.838a2.933 2.933 0 0 1-.102-.637a1.67 1.67 0 0 1 .05-.507c.034-.124.087-.239.157-.339h.001c.068-.098.158-.186.26-.256a1.446 1.446 0 0 1 .419-.19a2.46 2.46 0 0 1 .599-.09a4.545 4.545 0 0 1 .814.048a7.708 7.708 0 0 1 1.067.24a12.092 12.092 0 0 1 1.369.5a17.248 17.248 0 0 1 1.736.874a24.003 24.003 0 0 0-1.694 1.202l.462.59a23.098 23.098 0 0 1 2.13-1.484a18.69 18.69 0 0 1 1.83-.99c.474-.222.956-.42 1.448-.583a8.816 8.816 0 0 1 1.146-.303c.298-.056.595-.092.887-.096Zm-.01-.75h-.001a6.051 6.051 0 0 0-1.014.108a9.546 9.546 0 0 0-1.245.329a14.202 14.202 0 0 0-1.529.616c-.583.272-1.146.582-1.696.91a18.04 18.04 0 0 0-2.152-1.112a12.676 12.676 0 0 0-1.455-.531a8.435 8.435 0 0 0-1.172-.262a5.235 5.235 0 0 0-.95-.055c-.254.01-.516.043-.776.117a2.203 2.203 0 0 0-.636.294a1.774 1.774 0 0 0-.717 1.014a2.396 2.396 0 0 0-.077.737a3.728 3.728 0 0 0 .127.798a6.016 6.016 0 0 0 .351.959a9.548 9.548 0 0 0 .62 1.128a14.203 14.203 0 0 0 .967 1.335c.08.098.166.19.248.286a15.71 15.71 0 0 0-.552.679c-.311.408-.604.834-.867 1.282a8.44 8.44 0 0 0-.538 1.075a5.28 5.28 0 0 0-.283.908a3.19 3.19 0 0 0-.073.782a2.182 2.182 0 0 0 .13.688v.001a1.775 1.775 0 0 0 .81.94a2.403 2.403 0 0 0 .697.253a3.699 3.699 0 0 0 .805.07a5.97 5.97 0 0 0 .977-.102l.001-.001a9.412 9.412 0 0 0 1.24-.32a14.23 14.23 0 0 0 1.526-.61a18.98 18.98 0 0 0 1.742-.93c.121.072.243.144.366.214a17.99 17.99 0 0 0 1.785.898a12.832 12.832 0 0 0 1.455.53c.38.112.772.204 1.172.262a5.284 5.284 0 0 0 .95.056c.254-.01.516-.044.776-.118c.218-.063.436-.156.636-.294a1.775 1.775 0 0 0 .717-1.014c.068-.248.087-.497.077-.736a3.724 3.724 0 0 0-.127-.799a5.888 5.888 0 0 0-.335-.923a9.62 9.62 0 0 0-.612-1.127a14.487 14.487 0 0 0-.959-1.333c-.09-.111-.188-.216-.28-.324c.189-.222.374-.447.552-.679c.311-.409.604-.835.867-1.283a8.441 8.441 0 0 0 .538-1.075a5.277 5.277 0 0 0 .283-.907c.053-.25.083-.513.073-.783a2.156 2.156 0 0 0-.13-.688v-.001a1.775 1.775 0 0 0-.81-.94a2.389 2.389 0 0 0-.697-.252a3.7 3.7 0 0 0-.805-.07ZM12 0l10.392 6v12L12 24L1.607 18V6Z"
							/>
						</svg>
					)
				)
				.otherwise(() => null)}
			<div className="flex flex-col items-center justify-center w-8/12 text-center">
				<h3 className="text-2xl font-semibold tracking-tight text-center scroll-m-20">
					{props.item.title}
				</h3>
				<Paragraph className="text-center text-primary/80 ">
					{props.item.description}
				</Paragraph>
			</div>
		</a>
	)
}
