import { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ThemeSwap = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.setAttribute("data-theme", "night");
			setIsDark(true);
		} else {
			document.documentElement.setAttribute("data-theme", "corporate");
			setIsDark(false);
		}
	}, [isDark]);

	return (
		<label className="swap swap-rotate">
			<input
				type="checkbox"
				onChange={() => {
					setIsDark(!isDark);
					localStorage.theme = !isDark ? "dark" : "light";
				}}
				checked={isDark}
			/>
			<HiOutlineSun className="swap-off md:w-10 w-8 h-10" />
			<HiOutlineMoon className="swap-on md:w-10 w-8 h-10" />
		</label>
	);
};

export default ThemeSwap;
