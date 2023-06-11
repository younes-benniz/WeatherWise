import Brand from "../Brand";
import GithubIcon from "../../assets/github-gray.svg";
import ThemeSwap from "../ThemeSwap";

export default function Header() {
	return (
		<header>
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<Brand />
				<div className="flex gap-4 lg:flex-1 lg:justify-end items-center md:flex ">
					<a href="https://github.com/younes-benniz/WeatherWise">
						<img className="md:w-8 w-7" src={GithubIcon} alt="visit github" />
					</a>
					<ThemeSwap />
				</div>
			</nav>
		</header>
	);
}
