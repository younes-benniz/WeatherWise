import { useNavigate } from "@tanstack/react-location";
import AsyncSelect from "react-select/async";
import axios from "axios";

const SearchBar = () => {
	const navigate = useNavigate();

	const loadOptions = async (searchValue, callback) => {
		const response = await axios.get(
			`https://geocoding-api.open-meteo.com/v1/search?name=${searchValue}`,
		);
		const filtred = response.data.results.map((item) => {
			item.label = item.name;
			item.value = item.name.toLowerCase();
			return item;
		});
		callback(filtred);
	};

	const handleSelect = (itemObject) => {
		navigate({ to: `/weather/${itemObject.value}`, replace: true });
	};

	return (
		<div className="flex gap-5 w-full justify-center">
			<AsyncSelect
				className="w-full max-w-xs"
				placeholder="Search..."
				cacheOptions
				loadOptions={loadOptions}
				onChange={(itemObject) => handleSelect(itemObject)}
			/>
		</div>
	);
};

export default SearchBar;
