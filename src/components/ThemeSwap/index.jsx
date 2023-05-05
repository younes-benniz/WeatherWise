import { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ThemeSwap = () => {
	const [theme, setTheme] = useState("light");

	const handleThemeChange = () => {
		setTheme((state) => (state === "light" ? "dark" : "light"));
	};

	console.log("theme", theme);

	return (
		<label className="swap swap-rotate">
			<input type="checkbox" onChange={handleThemeChange} checked={theme === "dark"} />
			<HiOutlineSun className="swap-off w-10 h-10" />
			<HiOutlineMoon className="swap-on w-10 h-10" />
		</label>
	);
};

export default ThemeSwap;
