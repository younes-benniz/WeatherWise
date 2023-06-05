import { Fragment, useState } from "react";
import { useNavigate } from "@tanstack/react-location";
import { Combobox, Transition } from "@headlessui/react";
import { MdExpandMore } from "react-icons/md";
import axios from "axios";

export default function Search() {
	const navigate = useNavigate();
	const [data, setData] = useState([]);

	const loadOptions = async (query) => {
		const response = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
			params: { name: query.toLowerCase() },
		});
		return response.data;
	};

	const cityAdministrations = (city) => {
		let administrations = [];
		if (city.admin1) {
			administrations.push(city.admin1);
		}
		if (city.admin2) {
			administrations.push(city.admin2);
		}
		if (city.admin3) {
			administrations.push(city.admin3);
		}
		if (city.admin4) {
			administrations.push(city.admin4);
		}
		return administrations.join(", ");
	};

	const handleInput = async (event) => {
		const results = await loadOptions(event.target.value);
		if (results.results) {
			setData(results.results);
		} else {
			setData([]);
		}
	};
	const handleSelect = (city) => {
		navigate({
			to: `/WeatherWise/weather/${city.name}?latitude=${city.latitude}&longitude=${city.longitude}`,
			replace: true,
		});
	};

	return (
		<Combobox onChange={handleSelect}>
			<div className="relative mt-1 w-2/5">
				<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
					<Combobox.Input
						className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 bg-white"
						displayValue={(city) => city.name}
						onChange={handleInput}
						placeholder="Search for a City"
					/>
				</div>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{data.length === 0 ? (
							<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
								Nothing found.
							</div>
						) : (
							data.map((city) => (
								<Combobox.Option
									key={city.id}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active ? "bg-teal-600 text-white" : "text-gray-900"
										}`
									}
									value={city}>
									{({ selected, active }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}>
												{city.name} ({cityAdministrations(city)})
											</span>

											<span
												className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
													active ? "text-white" : "text-teal-600"
												}`}>
												<img
													className="w-6 h-6 rounded-full"
													src={`https://hatscripts.github.io/circle-flags/flags/${city.country_code.toLowerCase()}.svg`}
													alt="flag"
												/>
											</span>
										</>
									)}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
}
