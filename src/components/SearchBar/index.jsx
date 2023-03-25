import { useState } from "react";
import { useNavigate } from "@tanstack/react-location";

const SearchBar = () => {
	const [search, setSearch] = useState();
	const navigate = useNavigate();

	const handleSearchInput = (event) => {
		setSearch(event.target.value);
	};
	const handleSearch = () => {
		navigate({ to: `/weather/${search}`, replace: true });
		setSearch();
	};

	return (
		<div className="flex gap-5 w-full justify-center">
			<input
				type="text"
				placeholder="Search..."
				className="input input-bordered input-primary w-full max-w-xs"
				value={search}
				onChange={handleSearchInput}
			/>
			<button className="btn btn-success" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
