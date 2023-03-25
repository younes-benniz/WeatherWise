import { useState } from "react";
import { useNavigate } from "@tanstack/react-location";

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSearch = () => {
		navigate({ to: `/weather/${search}`, replace: true });
		setSearch("");
	};

	return (
		<div className="flex gap-5 w-full justify-center">
			<input
				type="text"
				className="input input-bordered input-primary w-full max-w-xs"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button className="btn btn-success" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
