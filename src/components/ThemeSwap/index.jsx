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
			document.documentElement.classList.add("dark");
			setIsDark(true);
		} else {
			document.documentElement.classList.remove("dark");
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
			<HiOutlineSun className="swap-off w-10 h-10" />
			<HiOutlineMoon className="swap-on w-10 h-10" />
		</label>
	);
};

export default ThemeSwap;
