import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Brand from "../Brand";
import { OpenNavBtn } from "../NavToggleBtn";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const NavMenu = ["Home", "Forecast", "Charts"];
export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<Brand />
				<OpenNavBtn onClick={() => setMobileMenuOpen(true)} />
				<div className="hidden lg:flex lg:gap-x-12">
					{NavMenu.map((item) => (
						<a
							key={item.toLowerCase()}
							href="#"
							className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-400">
							{item}
						</a>
					))}
				</div>
				<MobileMenu
					NavMenu={NavMenu}
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
				/>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						Log in
					</a>
				</div>
			</nav>
		</header>
	);
}
