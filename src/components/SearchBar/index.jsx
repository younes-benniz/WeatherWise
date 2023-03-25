const SearchBar = () => {
	return (
		<div className="flex gap-5 w-full justify-center">
			<input
				type="text"
				placeholder="Search..."
				className="input input-bordered input-primary w-full max-w-xs"
			/>
			<button className="btn btn-success">Search</button>
		</div>
	);
};

export default SearchBar;
