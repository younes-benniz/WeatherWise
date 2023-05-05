import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Brand from "../Brand";
import { OpenNavBtn } from "../NavToggleBtn";
import GithubIcon from "../../assets/github-gray.svg";
import ThemeSwap from "../ThemeSwap";

const NavMenu = [
	{ name: "home", link: "/" },
	{ name: "forecast", link: "/forecast" },
	{ name: "charts", link: "/charts" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header>
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<Brand />
				{/* <OpenNavBtn onClick={() => setMobileMenuOpen(true)} /> */}
				{/* <div className="hidden lg:flex lg:gap-x-12 md:flex md:gap-x-10">
					{NavMenu.map((item, index) => (
						<a
							key={index}
							href={item.link}
							className="text-md capitalize font-semibold leading-6 text-white hover:text-red-400">
							{item.name}
						</a>
					))}
				</div> */}
				{/* <MobileMenu
					NavMenu={NavMenu}
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
				/> */}
				<div className="hidden lg:flex gap-4 lg:flex-1 lg:justify-end items-center md:flex ">
					<a href="#">
						<img className="w-8" src={GithubIcon} alt="visit github" />
					</a>
					<ThemeSwap />
				</div>
			</nav>
		</header>
	);
}
